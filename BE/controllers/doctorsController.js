const pool = require("../data/db");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  secure: false,
  auth: {
    user: "8ef052d3d70df1",
    pass: "6eda6e5509090d",
  },
});

async function index(req, res) {
  try {
    let sql = `SELECT doctors.*, AVG(vote) AS avg_vote 
               FROM doctors
               LEFT JOIN reviews ON doctors.id = reviews.doctor_id`;
    const params = [];
    const conditions = [];

    if (req.query.searchSpec && req.query.searchSpec.trim()) {
      conditions.push(`spec LIKE ?`);
      params.push(`%${req.query.searchSpec.trim()}%`);
    }

    if (req.query.searchName && req.query.searchName.trim()) {
      conditions.push(`doctors.first_name LIKE ?`);
      params.push(`%${req.query.searchName.trim()}%`);
    }

    if (req.query.searchLastName && req.query.searchLastName.trim()) {
      conditions.push(`doctors.last_name LIKE ?`);
      params.push(`%${req.query.searchLastName.trim()}%`);
    }

    if (conditions.length > 0) {
      sql += ` WHERE ${conditions.join(" AND ")}`;
    }

    sql += ` GROUP BY doctors.id`;

    if (req.query.vote) {
      sql += ` HAVING avg_vote >= ?`;
      params.push(req.query.vote);
    }

    sql += ` ORDER BY avg_vote DESC`;

    // Se home è true, aggiungiamo il LIMIT 4
    if (req.query.home === "true") {
      sql += ` LIMIT 4`;
    }

    const [doctors] = await pool.execute(sql, params);
    res.json({ doctors });
  } catch (err) {
    console.error("Errore SQL:", err);
    res.status(500).json({ message: err.message });
  }
}

async function show(req, res) {
  try {
    const slug = req.params.slug;
    let sql = `
      SELECT doctors.*, AVG(vote) AS avg_vote 
      FROM doctors
      LEFT JOIN reviews ON doctors.id = reviews.doctor_id 
      WHERE doctors.slug = ?
      GROUP BY doctors.id`;
    const [results] = await pool.execute(sql, [slug]);

    if (results.length === 0) {
      return res.status(404).json({
        error: "Not Found",
        message: "Doctor not found",
      });
    }

    const doctor = results[0];
    doctor.avg_vote = parseFloat(doctor.avg_vote);

    sql = `SELECT reviews.*
           FROM reviews
           JOIN doctors ON doctors.id = reviews.doctor_id
           WHERE doctors.slug = ?
           ORDER BY reviews.date DESC`;
    const [reviewResults] = await pool.execute(sql, [slug]);
    doctor.reviews = reviewResults;

    res.json(doctor);
  } catch (err) {
    console.error("Errore SQL:", err);
    res.status(500).json({ message: err.message });
  }
}

async function storeReview(req, res) {
  try {
    const dataObj = req.body;
    const doctor_slug = req.params.slug;
    const doctor_id = parseInt(doctor_slug.split("-").pop());
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const { first_name, last_name, email, review, vote } = dataObj;

    // Validazione dei campi obbligatori
    let errors = {};
    if (!first_name || first_name.trim().length < 3) {
      errors.first_name = "Il nome deve essere lungo almeno 3 caratteri";
    }
    if (!last_name || last_name.trim().length < 3) {
      errors.last_name = "Il cognome deve essere lungo almeno 3 caratteri";
    }
    if (!email || !emailRegex.test(email)) {
      errors.email =
        'L\'email deve essere valida e contenere una "@" ed un "."';
    }

    // Se ci sono errori, restituisci la risposta con gli errori
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    console.log("Dati ricevuti:", dataObj);

    const sql = `INSERT INTO reviews (review, vote, doctor_id, first_name, last_name, email)
                 VALUES (?, ?, ?, ?, ?, ?)`;
    await pool.execute(sql, [
      review,
      vote,
      doctor_id,
      first_name,
      last_name,
      email,
    ]);

    res.status(201).send({ message: "Recensione inviata con successo!" });
  } catch (err) {
    console.error("Database Error:", err.message);
    res.status(500).json({ message: err.message });
  }
}

async function storeDoctor(req, res) {
  try {
    console.log(req.file);
    console.log(req.body);

    const { first_name, last_name, address, email, phone, spec, description } =
      req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{9,14}$/;

    let errors = {};
    if (!first_name || first_name.length < 3) {
      errors.first_name =
        "Il nome è obbligatorio e deve essere lungo almeno 3 caratteri";
    }
    if (!last_name || last_name.length < 3) {
      errors.last_name =
        "Il cognome è obbligatorio e deve essere lungo almeno 3 caratteri";
    }
    if (!email || !emailRegex.test(email)) {
      errors.email = 'L\'email deve contenere una "@" ed un "."';
    }
    if (!phone || !phoneRegex.test(phone)) {
      errors.phone = "Il numero di telefono non è valido";
    }
    if (!address || address.length < 5) {
      errors.address =
        "L'indirizzo è obbligatorio e deve essere lungo almeno 5 caratteri";
    }
    if (!spec) {
      errors.spec = "La specializzazione è obbligatoria";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    const slug = `${first_name.toLowerCase()}-${last_name.toLowerCase()}-${Date.now()}`;
    const image =
      req.files && req.files["image"] ? req.files["image"][0].filename : null;
    const cv =
      req.files && req.files["cv"] ? req.files["cv"][0].filename : null;

    const sql = `INSERT INTO doctors (first_name, last_name, address, email, phone, spec, description, image, cv, slug)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const [result] = await pool.execute(sql, [
      first_name,
      last_name,
      address,
      email,
      phone,
      spec,
      description,
      image,
      cv,
      slug,
    ]);

    res.status(201).json({
      message: "Dottore inserito con successo",
      id: result.insertId,
    });
  } catch (err) {
    console.error("Errore durante l'inserimento del dottore:", err);
    res.status(500).json(err);
  }
}

async function contact(req, res) {
  try {
    const { from, to, subject, text, html } = req.body;

    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
    });

    console.log("Email inviata: %s", info.messageId);
    res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("Errore nell'invio email:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}

async function uniqueSpec(req, res) {
  try {
    const sql = `SELECT DISTINCT spec FROM doctors ORDER BY spec ASC`;
    const [specializations] = await pool.execute(sql);
    const specializationsArray = specializations.map((s) => s.spec);
    res.json({ specializations: specializationsArray });
  } catch (err) {
    console.error("Errore SQL:", err);
    res.status(500).json({ message: err.message });
  }
}

module.exports = { index, show, storeReview, storeDoctor, contact, uniqueSpec };
