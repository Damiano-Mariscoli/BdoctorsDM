import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReviewCard from "../components/ReviewCard";
import FormReview from "../components/FormReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import GlobalContext from "../../contexts/globalContext";
import { Button, Modal, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import ContactForm from "../components/ContactForm";
import NotFound from "../components/NotFound";

export default function DetailPage() {
  const { setIsLoading, isLoading } = useContext(GlobalContext);
  const [doctor, setDoctor] = useState(null);
  const { slug } = useParams();
  const [showReview, setShowReview] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // Funzione per chiudere il modale della review
  const handleReviewSubmit = () => {
    setShowReview(false);
    fetchDoctor();
  };

  // Funzione per chiudere il modale del contact
  const handleContactSubmit = () => {
    setShowContact(false);
  };

  function fetchDoctor() {
    setIsLoading(true);
    axios
      .get(`${import.meta.env.VITE_ENV_URI}/api/doctors/${slug}`)
      .then((res) => {
        console.log(res.data);
        setDoctor(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchDoctor();
  }, [slug]);

  const stars = [];

  if (doctor) {
    for (let i = 0; i < 5; i++) {
      if (i < doctor.avg_vote) {
        stars.push(faStarSolid);
      } else {
        stars.push(faStarRegular);
      }
    }
  }

  const navigate = useNavigate();

  return doctor ? (
    <section className="container">
      <Button
        className="w-100 mb-1"
        variant="secondary"
        onClick={() => navigate(-1)}
        type="button"
      >
        Torna indietro
      </Button>

      <div className="doctor-info">
        <figure className="d-flex justify-content-center">
          <img
            src={
              doctor.image
                ? `${import.meta.env.VITE_ENV_URI}/uploads/img/${doctor.image}`
                : `${import.meta.env.VITE_ENV_URI}/img/doctorplaceholder.png`
            }
            alt={`${doctor.first_name} ${doctor.last_name} profile`}
            style={{
              width: "200px",

              objectFit: "cover",
              objectPosition: "top",
              aspectRatio: "1/1",
              borderRadius: "100%",
            }}
          />
        </figure>
        <div className="container d-flex justify-content-center flex-column align-items-center pb-5">
          <h1>
            {doctor.first_name} {doctor.last_name}
          </h1>
          <p>
            {doctor.reviews.length ? (
              <>
                <span>
                  {stars.map((star, i) => (
                    <FontAwesomeIcon key={i} icon={star} />
                  ))}
                </span>
                <span>({doctor.avg_vote})</span>
                <br />
                <i>{`in base a ${doctor.reviews.length} recensioni`}</i>
              </>
            ) : (
              <i>Ancora nessuna valutazione</i>
            )}
          </p>
          {/* Bottone per aprire il Modale di Contatto */}
          <Button
            variant="success"
            onClick={() => setShowContact(true)}
            className="ms-2"
          >
            Contatta il medico
          </Button>
        </div>

        <Row className="flex-column flex-md-row">
          <Col>
            {/*<p>
              <strong>Città:</strong> {doctor.city}
            </p> */}
            <p>
              <strong>Indirizzo:</strong> {doctor.address}
            </p>
            <p>
              <strong>Email:</strong> {doctor.email}
            </p>
            <p>
              <strong>Telefono:</strong> {doctor.phone}
            </p>
            <p>
              <strong>Specializzazione:</strong> {doctor.spec}
            </p>
            <p>
              <strong>Descrizione: </strong>
              {doctor.description || (
                <i>Nessuna descrizione inserita dal medico</i>
              )}
            </p>
          </Col>

          <Col>
            <strong>CV: </strong>
            {doctor.cv ? (
              <iframe
                src={`${import.meta.env.VITE_ENV_URI}/uploads/cv/${doctor.cv}`}
                height="700px"
                width="100%"
                style={{ border: "none" }}
                title="PDF Viewer"
              ></iframe>
            ) : (
              <i>Nessun CV caricato</i>
            )}
          </Col>
        </Row>
      </div>

      <div className="doctor-info">
        <div className="m-auto d-md-flex justify-content-between">
          {doctor.reviews.length ? (
            <h2 className="text-center">Recensioni</h2>
          ) : (
            <h2 className="text-center">Ancora nessuna recensione</h2>
          )}

          {/* Bottone per aprire il Modale di Recensione */}
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              className=""
              onClick={() => setShowReview(true)}
            >
              Aggiungi recensione
            </Button>
          </div>
        </div>

        {doctor.reviews.length > 0 && (
          <div>
            <ul>
              {doctor.reviews.map((review) => (
                <ReviewCard reviews={review} key={review.id} />
              ))}
            </ul>
          </div>
        )}

        {/* Modale per la Recensione */}
        <Modal show={showReview} onHide={() => setShowReview(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Aggiungi recensione</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormReview
              slug={slug}
              fetchDoctor={fetchDoctor}
              onClose={handleReviewSubmit}
            />
          </Modal.Body>
        </Modal>

        {/* Modale per il Contatto */}
        <Modal show={showContact} onHide={() => setShowContact(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Contatta il medico</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ContactForm
              slug={slug}
              doctor={doctor}
              onClose={handleContactSubmit}
            />
          </Modal.Body>
        </Modal>
      </div>
    </section>
  ) : (
    <NotFound />
  );
}
