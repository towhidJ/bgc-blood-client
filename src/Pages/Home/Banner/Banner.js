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
                            <h3 className="mx-3">
                                Blood donation will cost you nothing, but it
                                will save a life!
                            </h3>

                            <a href="#requestBlood">
                                <button className="btn btn-warning">
                                    Request Blood
                                </button>
                            </a>
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
                            <h3 className="mx-2">
                                Donate blood and be the reason of smile to many
                                faces.
                            </h3>
                            <p></p>
                            <a href="#requestBlood">
                                <button className="btn btn-warning">
                                    Request Blood
                                </button>
                            </a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://templates.bwlthemes.com/blood_donation/images/home_1_slider_1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="cap">
                        <div className="box">
                            <h3 className="mx-2">
                                Never refuse to donate blood if you can, as you
                                may be the next needy.
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                            <a href="#requestBlood">
                                <button className="btn btn-warning">
                                    Request Blood
                                </button>
                            </a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;
