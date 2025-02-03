import { useState } from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";

export default function ContactForm({ slug, doctor, onClose }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  // Funzione per validare l'email (controlla presenza di @ e .)
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const defaultText = `Grazie per aver contattato ${doctor.first_name} ${doctor.last_name} tramite il nostro servizio, ti risponderà al più presto.`;

  const sendEmail = async (e) => {
    e.preventDefault();

    // Verifica se l'email è valida
    if (!isValidEmail(email)) {
      setStatus("Per favore, inserisci una email valida con '@' e '.'");
      return;
    }

    // Verifica se il messaggio è vuoto
    if (!message.trim()) {
      setStatus("Per favore, scrivi un messaggio.");
      return;
    }

    setStatus("Invio in corso...");

    try {
      // Invio dell'email al medico
      const response = await axios.post(
        `${import.meta.env.VITE_ENV_URI}/api/doctors/${slug}/contact`,
        {
          from: email,
          to: doctor.email,
          subject: `Richiesta di contatto da ${email}`,
          text: message,
          html: `<header><h1>BDoctors</h1></header>
          <p>${message}</p>`,
        }
      );

      if (response.data.success) {
        setStatus("Email inviata con successo!");

        // Invia email di conferma all'utente
        await axios.post(
          `${import.meta.env.VITE_ENV_URI}/api/doctors/${slug}/contact`,
          {
            from: "bdoctors@customers.it",
            to: email,
            subject: "Conferma contatto",
            text: defaultText,
            html: `<p>${defaultText}</p>`,
          }
        );

        // Chiude il modale dopo l'invio
        onClose();
      } else {
        setStatus(`Errore: ${response.data.error}`);
      }
    } catch (error) {
      setStatus(`Errore: ${error.message}`);
    }
  };

  return (
    <div>
      <Form onSubmit={sendEmail}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tua Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={status && status.includes("email")}
          />
          <Form.Control.Feedback type="invalid">
            Per favore, inserisci una email valida con '@' e '.'.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Messaggio</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Il tuo messaggio"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            isInvalid={status && status.includes("messaggio")}
          />
          <Form.Control.Feedback type="invalid">
            Per favore, scrivi un messaggio.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-2">
          Invia Email
        </Button>
      </Form>

      {/* Mostra solo il messaggio di successo dopo l'invio */}
      {status &&
        !status.includes("errore") &&
        !status.includes("Invio in corso") && (
          <Alert className="mt-3" variant="success">
            {status}
          </Alert>
        )}
    </div>
  );
}
