import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const TermsOfServicePage = () => {
    return (
        <Container className="mt-5 mb-5 animate">
            <h1 className="text-center mb-4 text-white">Termini di Servizio</h1>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>1. Introduzione</h3>
                            <p>
                                Benvenuto sul nostro sito web! I presenti Termini di Servizio regolano l'accesso e l'uso del nostro sito. Utilizzando i nostri servizi, accetti i seguenti termini e condizioni. Se non sei d'accordo con questi termini, ti invitiamo a non utilizzare il nostro sito.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>2. Accettazione dei Termini</h3>
                            <p>
                                Utilizzando il nostro sito web, accetti di essere vincolato dai Termini di Servizio qui descritti, così come dalle leggi applicabili. Se non sei d'accordo con questi Termini, ti chiediamo di non utilizzare il sito.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>3. Modifiche ai Termini</h3>
                            <p>
                                Ci riserviamo il diritto di modificare questi Termini di Servizio in qualsiasi momento. Le modifiche entreranno in vigore non appena pubblicate sul nostro sito. È tua responsabilità verificare periodicamente eventuali modifiche ai Termini.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>4. Uso del Sito</h3>
                            <p>
                                Sei autorizzato a utilizzare il nostro sito web solo per scopi leciti. Non puoi utilizzare il sito in modo da violare leggi locali, nazionali o internazionali. È vietato l'uso di software o dispositivi per danneggiare o compromettere il funzionamento del sito.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>5. Contenuti del Sito</h3>
                            <p>
                                Tutti i contenuti pubblicati sul nostro sito, inclusi testi, immagini, video, loghi e marchi, sono protetti da copyright e sono di proprietà nostra o dei nostri licenzianti. È vietato copiare, distribuire o modificare i contenuti senza il nostro permesso esplicito.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>6. Responsabilità dell'Utente</h3>
                            <p>
                                L'utente è responsabile dell'uso che fa del nostro sito e dei servizi associati. L'utente si impegna a non utilizzare il sito per scopi illegali o dannosi, e a non compromettere in alcun modo la sicurezza del nostro sistema.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>7. Limitazione di Responsabilità</h3>
                            <p>
                                Non saremo responsabili per danni diretti, indiretti, accidentali o consequenziali derivanti dall'uso del nostro sito o dall'impossibilità di utilizzarlo. Utilizzi il nostro sito a tuo rischio e pericolo.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>8. Privacy e Protezione dei Dati</h3>
                            <p>
                                La nostra politica sulla privacy descrive come raccogliamo, usiamo e proteggiamo i tuoi dati personali. Si consiglia di leggere attentamente la nostra Privacy Policy, disponibile sul nostro sito.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>9. Forza Maggiore</h3>
                            <p>
                                Non saremo responsabili per ritardi o inadempimenti derivanti da eventi al di fuori del nostro controllo, come guerre, calamità naturali, disastri informatici, interruzioni di rete e altri eventi di forza maggiore.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>10. Legge Applicabile</h3>
                            <p>
                                Questi Termini di Servizio sono regolati dalle leggi in vigore nel nostro paese. Qualsiasi controversia derivante dall'uso del sito sarà sottoposta alla giurisdizione dei tribunali competenti.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>11. Contatti</h3>
                            <p>
                                Se hai domande riguardanti i nostri Termini di Servizio, non esitare a contattarci tramite i dettagli forniti nella nostra pagina di contatto.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default TermsOfServicePage;
