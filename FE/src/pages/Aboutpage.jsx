// Doctors.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const AboutPage = () => {
    return (
        <Container className="mt-5 mb-5 animate">
            <h1 className="text-center mb-4 text-white">Chi Siamo</h1>

            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>La Nostra Missione</h3>
                            <p>
                                Il nostro obiettivo è rendere l'assistenza sanitaria più accessibile e facile da trovare. Siamo una piattaforma che connette pazienti e dottori con il solo scopo di migliorare la salute e il benessere di chi ci sceglie. Ogni medico presente nel nostro portale è altamente qualificato e impegnato a offrire un’assistenza sanitaria di qualità.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} className="mb-3 mb-md-0">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>La Nostra Visione</h3>
                            <p>
                                Crediamo che ogni persona abbia il diritto di ricevere assistenza sanitaria tempestiva e competente. La nostra visione è quella di diventare un punto di riferimento nella ricerca e nella scelta dei professionisti medici, garantendo ai pazienti l'accesso a un’ampia gamma di specializzazioni e trattamenti, tutto in un'unica piattaforma.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>Perché Scegliere Noi?</h3>
                            <p>
                                - **Qualità e Professionalità**: Ogni dottore che trovi sul nostro sito è stato verificato e selezionato con cura, garantendo alti standard professionali.
                                - **Accesso Facile e Veloce**: Trova facilmente medici nelle tue vicinanze o in base alla specializzazione di cui hai bisogno.
                                - **Piattaforma User-Friendly**: Navigare sulla nostra piattaforma è semplice e intuitivo, con la possibilità di prenotare appuntamenti in pochi clic.
                                - **Assistenza Dedicata**: Siamo sempre a disposizione per aiutarti a scegliere il medico giusto per le tue esigenze.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>I Nostri Valori</h3>
                            <ul>
                                <li><strong>Competenze Mediche:</strong> Selezioniamo solo medici esperti e altamente qualificati. </li>
                                <li><strong>Integrità e Trasparenza:</strong> Lavoriamo con i migliori dottori, e ci impegniamo a offrire un servizio trasparente, con recensioni e feedback degli utenti. </li>
                                <li><strong>Accessibilità:</strong> Vogliamo che ogni persona abbia facile accesso alle cure di cui ha bisogno. </li>
                                <li><strong>Innovazione:</strong> Siamo sempre alla ricerca di soluzioni moderne per migliorare l’esperienza dei nostri utenti e la qualità dei servizi medici.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>Il Nostro Team</h3>
                            <p>
                                Il nostro team è composto da esperti nel settore della salute, dello sviluppo tecnologico e della gestione dei servizi online. Collaboriamo con medici, operatori sanitari e tecnici per rendere l’esperienza del paziente la migliore possibile.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;
