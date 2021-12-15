import React from 'react';
import {Card, CardGroup} from "react-bootstrap";
import "./Voluentier.css"
const Voluentier = () => {
    return (
        <>
            <div className="row container mx-auto">
                <div className="col-md-12 col-sm-12 text-center">
                    <h2 className="section-heading">
                        <span>Our</span> Volunteer
                    </h2>
                    <p className="section-subheading">

                    </p>
                </div>
            </div>
            <div className="container my-5">
                <CardGroup className="gap-4">
                    <Card className="bgTeam">
                        <Card.Img variant="top" src="https://templates.bwlthemes.com/blood_donation/images/team_6.jpg" className="teamImg"/>
                        <Card.Body>
                            <Card.Title className="fw-bold temHed">Anonda Paul</Card.Title>
                            <Card.Text className="fw-bold temSub">
                                Founder
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <div className="team-social-share text-center clearfix">
                                <a className="fab fa-facebook-square rectangle" href="#" title="Facebook"></a>
                                <a className="fab fa-twitter rectangle" href="#" title="Twitter"></a>
                                <a className="fab fa-google-plus rectangle" href="#" title="Google Plus"></a>
                                <a className="fab fa-linkedin rectangle" href="#" title="Linkedin"></a>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card className="bgTeam">
                        <Card.Img variant="top" src="https://templates.bwlthemes.com/blood_donation/images/team_6.jpg" className="teamImg"/>
                        <Card.Body>
                            <Card.Title className="fw-bold temHed">Anonda Paul</Card.Title>
                            <Card.Text className="fw-bold temSub">
                                Founder
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <div className="team-social-share text-center clearfix">
                                <a className="fab fa-facebook-square rectangle" href="#" title="Facebook"></a>
                                <a className="fab fa-twitter rectangle" href="#" title="Twitter"></a>
                                <a className="fab fa-google-plus rectangle" href="#" title="Google Plus"></a>
                                <a className="fab fa-linkedin rectangle" href="#" title="Linkedin"></a>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card className="bgTeam">
                        <Card.Img variant="top" src="https://templates.bwlthemes.com/blood_donation/images/team_6.jpg" className="teamImg"/>
                        <Card.Body>
                            <Card.Title className="fw-bold temHed">Anonda Paul</Card.Title>
                            <Card.Text className="fw-bold temSub">
                                Founder
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <div className="team-social-share text-center clearfix">
                                <a className="fab fa-facebook-square rectangle" href="#" title="Facebook"></a>
                                <a className="fab fa-twitter rectangle" href="#" title="Twitter"></a>
                                <a className="fab fa-google-plus rectangle" href="#" title="Google Plus"></a>
                                <a className="fab fa-linkedin rectangle" href="#" title="Linkedin"></a>
                            </div>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </>

    );
};

export default Voluentier;
