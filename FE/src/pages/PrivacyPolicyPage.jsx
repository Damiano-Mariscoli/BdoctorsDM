import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const PrivacyPolicyPage = () => {
    return (
        <Container className="mt-5 mb-5 animate">
            <h1 className="text-center mb-4 text-white">Privacy Policy</h1>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>Introduzione</h3>
                            <p>
                                La presente Privacy Policy ha lo scopo di informarti sulla raccolta, l'uso e la protezione dei tuoi dati personali quando utilizzi i nostri servizi online. Rispettiamo la tua privacy e ci impegniamo a proteggere le informazioni che ci fornisci.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>1. Informazioni che raccogliamo</h3>
                            <p>
                                Raccogliamo diverse categorie di informazioni durante il tuo utilizzo dei nostri servizi. Queste possono includere:
                            </p>
                            <ul>
                                <li><strong>Informazioni personali:</strong> nome, indirizzo email, numero di telefono, ecc.</li>
                                <li><strong>Informazioni di navigazione:</strong> indirizzo IP, tipo di browser, dati di traffico e interazione con il sito.</li>
                                <li><strong>Informazioni di pagamento:</strong> dati relativi a transazioni effettuate, se applicabile.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>2. Come raccogliamo le informazioni</h3>
                            <p>
                                Le informazioni vengono raccolte quando:
                            </p>
                            <ul>
                                <li>Ti registri sul nostro sito.</li>
                                <li>Compili moduli di contatto o sondaggi.</li>
                                <li>Utilizzi i nostri servizi, navigando sul nostro sito.</li>
                                <li>Effettui acquisti o transazioni online.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>3. Come utilizziamo le tue informazioni</h3>
                            <p>
                                Utilizziamo le informazioni raccolte per vari scopi, tra cui:
                            </p>
                            <ul>
                                <li>Fornire e migliorare i nostri servizi.</li>
                                <li>Rispondere a richieste di assistenza o informazioni.</li>
                                <li>Gestire transazioni e processi di pagamento.</li>
                                <li>Personalizzare la tua esperienza sul nostro sito.</li>
                                <li>Analizzare il comportamento degli utenti per migliorare il sito.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>4. Cookie Policy</h3>
                            <p>
                                Utilizziamo i cookie per migliorare l'esperienza dell'utente sul nostro sito. I cookie sono piccoli file che vengono memorizzati sul tuo dispositivo per raccogliere informazioni su come utilizzi il nostro sito.
                            </p>
                            <p>
                                Puoi scegliere di disabilitare i cookie dal tuo browser, ma ciò potrebbe influire sulla tua esperienza di navigazione.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>5. Condivisione dei dati</h3>
                            <p>
                                Non vendiamo né affittiamo le tue informazioni personali a terzi. Tuttavia, possiamo condividere i tuoi dati con partner terzi che ci aiutano a gestire il nostro sito o a fornire servizi, solo se necessario e in conformità con la legge.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>6. Sicurezza dei dati</h3>
                            <p>
                                Adottiamo misure di sicurezza adeguate per proteggere i tuoi dati da accessi non autorizzati, perdita o danneggiamento. Tuttavia, nessun metodo di trasmissione via internet o di archiviazione elettronica è sicuro al 100%, quindi non possiamo garantire una protezione assoluta.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>7. Diritti dell'utente</h3>
                            <p>
                                Hai il diritto di accedere, correggere, eliminare o limitare l'uso delle tue informazioni personali. Puoi anche opporti al trattamento dei dati o richiedere la portabilità dei tuoi dati.
                            </p>
                            <p>
                                Se desideri esercitare i tuoi diritti, contattaci tramite i dettagli forniti nella sezione di contatto. Risponderemo alle tue richieste in conformità con le leggi applicabili.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>8. Modifiche alla Privacy Policy</h3>
                            <p>
                                Ci riserviamo il diritto di aggiornare o modificare questa Privacy Policy in qualsiasi momento. Le modifiche entreranno in vigore non appena pubblicate su questa pagina.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>9. Contattaci</h3>
                            <p>
                                Se hai domande o preoccupazioni riguardo alla nostra Privacy Policy, contattaci tramite i dettagli forniti nella sezione di contatto del nostro sito.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PrivacyPolicyPage;
