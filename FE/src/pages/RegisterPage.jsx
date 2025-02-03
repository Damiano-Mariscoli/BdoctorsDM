import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";

export default function RegisterPage() {
  const [isFormVAlid, setIsFormValid] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [image, setImage] = useState(null);
  const [cv, setCV] = useState(null);
  const [formErrors, setFormErrors] = useState({}); // Aggiungi questo stato per gli errori

  const initialFormData = {
    first_name: "",
    last_name: "",
    address: "",
    email: "",
    phone: "",
    spec: "",
    description: "",
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isRegistered || isFormVAlid === true) {
      const timer = setTimeout(() => {
        navigate(`/doctor/search`);
        setIsRegistered(false);
        setIsFormValid(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isRegistered, isFormVAlid]);

  const [formData, setFormData] = useState(initialFormData);

  function storeDoctor(e) {
    e.preventDefault();

    // Reset degli errori precedenti
    setFormErrors({});

    // Validazione dei campi obbligatori
    let hasErrors = false;
    const errors = {};

    if (!formData.first_name || formData.first_name.length < 3) {
      errors.first_name =
        "Il nome è obbligatorio e deve essere lungo almeno 3 caratteri";
      hasErrors = true;
    }
    if (!formData.last_name || formData.last_name.length < 3) {
      errors.last_name =
        "Il cognome è obbligatorio e deve essere lungo almeno 3 caratteri";
      hasErrors = true;
    }
    if (!formData.email) {
      errors.email = "L'email è obbligatoria e deve essere valida";
      hasErrors = true;
    }
    if (!formData.phone || formData.phone.length < 9) {
      errors.phone = "Il telefono è obbligatorio e deve essere valido";
      hasErrors = true;
    }
    if (!formData.spec) {
      errors.spec = "La specializzazione è obbligatoria";
      hasErrors = true;
    }
    if (!formData.address || formData.address.length < 5) {
      errors.address =
        "L'indirizzo è obbligatorio e deve essere lungo almeno 5 caratteri";
      hasErrors = true;
    }

    if (hasErrors) {
      setFormErrors(errors);
      setIsFormValid(false);
      return;
    }

    // Preparazione dei dati per l'invio al server
    const formDataFull = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataFull.append(key, formData[key]);
    });

    // Aggiungi immagine e cv se presenti
    if (image) formDataFull.append("image", image);
    if (cv) formDataFull.append("cv", cv);

    // Invio del form al server
    axios
      .post(
        `${import.meta.env.VITE_ENV_URI}/api/doctors/register`,
        formDataFull,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);
        // Reset dei dati del form dopo successo
        setFormData(initialFormData); // Reset dei dati del form
        setImage(null); // Svuota il campo immagine
        setCV(null); // Svuota il campo CV
        setIsRegistered(true); // Successo nella registrazione
      })
      .catch((err) => {
        console.error(err);
        setIsFormValid(false);
        setIsRegistered(false);
        if (err.response && err.response.data.errors) {
          setFormErrors(err.response.data.errors);
        }
      });
  }

  function onFormChange(e) {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <section className="container d-flex justify-content-center animate">
      <Row>
        <Form as={Col} className="text-light" onSubmit={storeDoctor}>
          <Row className="mb-2">
            <Form.Group className="mb-2" sm={6} as={Col}>
              <Form.Label htmlFor="first_name">Nome</Form.Label>
              <Form.Control
                className="form-control custom-form-control"
                minLength={3}
                required
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                placeholder="Nome"
                onChange={onFormChange}
                isInvalid={formErrors.first_name !== undefined}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.first_name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label htmlFor="last_name">Cognome</Form.Label>
              <Form.Control
                className="form-control custom-form-control"
                minLength={3}
                required
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                placeholder="Cognome"
                onChange={onFormChange}
                isInvalid={formErrors.last_name !== undefined}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.last_name}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col}>
              <Form.Label htmlFor="address">Indirizzo</Form.Label>
              <Form.Control
                className="form-control custom-form-control"
                type="text"
                required
                id="address"
                name="address"
                value={formData.address}
                placeholder="Indirizzo"
                onChange={onFormChange}
                isInvalid={formErrors.address !== undefined}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.address}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group className="mb-2" sm={6} as={Col}>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                className="form-control custom-form-control"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="email"
                onChange={onFormChange}
                isInvalid={formErrors.email !== undefined}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="phone">Telefono</Form.Label>
              <Form.Control
                className="form-control custom-form-control"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                placeholder="Telefono"
                onChange={onFormChange}
                isInvalid={formErrors.phone !== undefined}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.phone}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label htmlFor="spec">Specializzazione</Form.Label>
              <Form.Control
                className="form-control custom-form-control"
                type="text"
                required
                id="spec"
                name="spec"
                value={formData.spec}
                placeholder="Specializzazione"
                onChange={onFormChange}
                isInvalid={formErrors.spec !== undefined}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.spec}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="description">Descrizione</Form.Label>
              <Form.Control
                className="form-control custom-form-control"
                type="text"
                id="description"
                name="description"
                value={formData.description}
                placeholder="Descrizione"
                onChange={onFormChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <Form.Label htmlFor="image">Immagine</Form.Label>
              <Form.Control
                className="form-control custom-form-control"
                type="file"
                accept="image/*"
                id="image"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="cv">CV</Form.Label>
              <Form.Control
                className="form-control custom-form-control"
                type="file"
                accept=".pdf"
                id="cv"
                name="cv"
                onChange={(e) => setCV(e.target.files[0])}
              />
            </Form.Group>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Button
                className="btn btn-primary mt-3"
                variant="primary"
                onClick={(e) => storeDoctor(e)}
              >
                Registrati
              </Button>
            </Col>
          </Row>
          <div className="mt-5 animate">
            {isRegistered && (
              <div className="alert alert-success">
                Registrazione avvenuta con successo!
              </div>
            )}
            {!isRegistered && isFormVAlid && (
              <div className="alert alert-danger">I dati non sono validi</div>
            )}
          </div>
        </Form>
      </Row>
    </section>
  );
}
