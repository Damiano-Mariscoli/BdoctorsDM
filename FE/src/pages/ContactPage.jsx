import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ContactPage = () => {
    return (
        <Container className="mt-5 mb-5 animate">
            <h1 className="text-center mb-5 text-white">Contattaci</h1>

            {/* Testo introduttivo casuale */}
            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <p className="text-center">
                                Benvenuto nella nostra pagina di contatto! Siamo felici di
                                offrirti il supporto di cui hai bisogno. Che tu voglia fissare un
                                appuntamento, chiedere maggiori informazioni o ricevere assistenza,
                                siamo qui per aiutarti. Non esitare a contattarci! I nostri esperti
                                sono sempre disponibili per rispondere alle tue domande e fornirti
                                le risposte più precise.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                {/* Sezione Dettagli di contatto */}
                <Col md={6} className="mb-4">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>Contattaci direttamente</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <strong>Telefono:</strong> +39 012 345 6789
                                </li>
                                <li>
                                    <strong>Email:</strong> <a href="mailto:info@doctor.com">info@doctor.com</a>
                                </li>
                                <li>
                                    <strong>Indirizzo:</strong> Via della Salute, 123, 00100 Roma, Italia
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Sezione Orari di apertura */}
                <Col md={6} className="mb-4">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>Orari di apertura</h3>
                            <ul className="list-unstyled">
                                <li><strong>Lunedì - Venerdì:</strong> 9:00 - 18:00</li>
                                <li><strong>Sabato:</strong> 10:00 - 14:00</li>
                                <li><strong>Domenica:</strong> Chiuso</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;

