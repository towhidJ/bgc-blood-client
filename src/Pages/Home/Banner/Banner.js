import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://templates.bwlthemes.com/blood_donation/images/home_1_slider_1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="cap">
                        <div className="box">
                            <h3>1st slide label</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </p>
                            <button className="btn btn-warning">Request Blood</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://templates.bwlthemes.com/blood_donation/images/home_1_slider_1.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="cap">
                        <div className="box">
                            <h3>Second slide label</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src="https://templates.bwlthemes.com/blood_donation/images/home_1_slider_1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="cap">
                        <div className="box">
                            <h3>3rd slide label</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;
