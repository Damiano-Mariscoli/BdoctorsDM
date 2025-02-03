import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const FormReview = ({ slug, fetchDoctor, onClose }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    review: "",
    vote: 1, // Voto di default
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};

    // Validazione nome e cognome (minimo 3 caratteri)
    if (!formData.first_name.trim() || formData.first_name.length < 3) {
      errors.first_name =
        "Il nome è obbligatorio e  deve essere lungo almeno 3 caratteri";
    }
    if (!formData.last_name.trim() || formData.last_name.length < 3) {
      errors.last_name =
        "Il cognome è obbligatorio e deve essere lungo almeno 3 caratteri";
    }

    // Validazione email (deve essere un'email valida)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errors.email = "L'email è obbliogatoria e deve essere valida";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset degli errori
    setFormErrors({});

    // Validazione
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return; // Non inviare il form se ci sono errori
    }

    setIsSubmitting(true); // Imposta lo stato di invio

    // Se il form è valido, invia la recensione
    const reviewData = {
      ...formData,
      vote: parseInt(formData.vote, 10), // Assicurati che il voto sia un numero
    };

    axios
      .post(
        `${import.meta.env.VITE_ENV_URI}/api/doctors/${slug}/review`,
        reviewData
      )
      .then((response) => {
        // Se la recensione è inviata con successo
        fetchDoctor(); // Ricarica i dettagli del medico
        onClose(); // Chiudi il modale
      })
      .catch((err) => {
        console.error(err);
        setIsSubmitting(false); // Ripristina lo stato di invio
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="first_name">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          isInvalid={!!formErrors.first_name}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.first_name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="last_name">
        <Form.Label>Cognome</Form.Label>
        <Form.Control
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          isInvalid={!!formErrors.last_name}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.last_name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          isInvalid={!!formErrors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formErrors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="review">
        <Form.Label>Recensione</Form.Label>
        <Form.Control
          as="textarea"
          name="review"
          value={formData.review}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="vote">
        <Form.Label>Voto</Form.Label>
        <Form.Control
          as="select"
          name="vote"
          value={formData.vote}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Control>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        disabled={isSubmitting}
        className="mt-2"
      >
        {isSubmitting ? "Invio..." : "Invia Recensione"}
      </Button>
    </Form>
  );
};

export default FormReview;
