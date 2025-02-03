import React, { useContext, useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import { Link } from "react-router";
import { Row, Col, Button, Form } from "react-bootstrap";
import GlobalContext from "../../contexts/globalContext";
import axios from "axios";
import { useNavigate } from "react-router";
import { NavLink } from "react-router";

export default function HomePage() {
  const [doctors, setDoctors] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [searchSpec, setSearchSpec] = useState("");
  const { setIsLoading } = useContext(GlobalContext);
  const navigate = useNavigate();

  function fetchSpecializations() {
    axios
      .get(`${import.meta.env.VITE_ENV_URI}/api/doctors/spec`)
      .then((res) => {
        setSpecializations(res.data.specializations);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const fetchDoctors = () => {
    setIsLoading(true);
    axios
      .get(`${import.meta.env.VITE_ENV_URI}/api/doctors`, {
        params: { home: true },
      })
      .then((res) => {
        setDoctors(res.data.doctors);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchDoctors();
    fetchSpecializations();
  }, []);

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    const cleanSpec = searchSpec.replace(/\s+/g, "-");
    // Invia la specializzazione così come è, con gli spazi
    navigate(`/doctor/search?spec=${cleanSpec}`);
  };

  return (
    <section className="animate">
      <div
        style={{
          backgroundImage: `url("./background.jpg")`,
          backgroundSize: "cover", // Adatta l'immagine per coprire l'intero div
          backgroundPosition: "center", // Centra l'immagine
          //backgroundRepeat: "no-repeat", // Evita la ripetizione dell'immagine
          width: "100vw", // 100% della larghezza della viewport
          height: "700px", // Altezza fissa di 400px
        }}
        className="mb-5 d-md-block d-none bgImage"
      >
        {/*<img
          className="backgroundHomePage bgImage d-none d-md-block animate-load w-100"
          src="./background.jpg"
          alt="Background"
        />*/}
        <div className="d-flex container justify-content-start align-items-center h-100">
          <div className="text-dark text-lg-light">
            <h2>Il tuo dottore a portata di un Click!</h2>
            <h3>Filtra le tue ricerche per specializzazioni.</h3>
            <h3>
              Osserva i profili, Leggi le recensioni e scegli il meglio per te!
            </h3>
          </div>
        </div>
      </div>

      <div className="container-fluid container">
        <Form className="d-flex gap-5 filterBar" onSubmit={handleSearch}>
          <Form.Control
            as="select"
            value={searchSpec}
            onChange={(e) => setSearchSpec(e.target.value)}
            className="form-select border-0 outline-0 searchSelect"
            style={{ boxShadow: "none" }}
          >
            <option value="">Seleziona Specializzazione</option>
            {specializations.map((spec, index) => (
              <option key={index} value={spec}>
                {spec}
              </option>
            ))}
          </Form.Control>
          <Button
            className="w-50 btn btn-primary SearchBtn"
            type="submit"
            variant="primary"
          >
            Invia
          </Button>
        </Form>

        <h4 className="text-light text-center fs-1 mb-5">
          I nostri medici in evidenza
        </h4>

        <Row className="row-gap-3">
          {doctors.map((doctor) => (
            <Col
              key={doctor.id}
              xl={3} // 4 card per riga su schermi XL
              lg={4} // 3 card per riga su schermi LG
              md={6} // 2 card per riga su schermi MD
              xs={12} // 1 card per riga su schermi XS (100% della larghezza)
              className="d-flex flex-column align-items-center col-2"
            >
              <Link to={`/doctor/${doctor.slug}`} className="w-100">
                <DoctorCard doctor={doctor} />
              </Link>
            </Col>
          ))}
        </Row>

        <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center my-5">
          <div
            className="text-light doctorCaption"
            style={{ color: "#0f3439" }}
          >
            <h3>Sei un Medico?</h3>
            <h5 className="fs-4">Iscriviti e raggiungi nuovi pazienti.</h5>
            <p className="fs-4">
              Più di 1 milione di pazienti <br /> cercano ogni mese il loro
              Medico su BDoctors <br /> il primo sito in Italia per visitatori.
            </p>
            <p className="fs-4">
              Unisciti alla nostra comunità di medici e raggiungi un pubblico
              vasto e interessato. Con BDoctors, puoi:
            </p>
            <ul>
              <li>Creare un profilo professionale e personalizzato</li>
              <li>Presentare le tue competenze e i tuoi servizi</li>
              <li>
                Aumentare la tua visibilità online e raggiungere nuovi pazienti
              </li>
            </ul>
            <p className="fs-4">
              Non perdere l'opportunità di crescere la tua attività e di aiutare
              più persone. Iscriviti ora e scopri come BDoctors può aiutarti a
              raggiungere i tuoi obiettivi.
            </p>
            <h5>Vantaggi di iscriversi a BDoctors:</h5>
            <ul>
              <li>Aumento della visibilità online</li>
              <li>Maggiore accesso a nuovi pazienti</li>
              <li>
                Possibilità di creare un profilo professionale personalizzato
              </li>
              <li>
                Opportunità di essere trovato da pazienti che cercano un medico
                specializzato come te
              </li>
            </ul>
          </div>
          <div className="d-none d-md-block">
            <img
              src="./doctorCaption.png"
              alt="Doctor Caption"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="d-flex justify-content-center my-5">
          <Button
            variant="primary"
            as={NavLink}
            to="/doctor/register"
            className="mt-3 button-register fs-4 px-5"
          >
            Iscriviti
          </Button>
        </div>
      </div>
    </section>
  );
}
