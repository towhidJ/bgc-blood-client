import React from "react";
import "./DonationProcess.css"
const DonationProcess = () => {
    return (
        <>
            <section className="section-content-block section-process mx-auto container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 text-center">
                            <h2 className="section-heading">
                                <span>Donation</span> Process
                            </h2>
                            <p className="section-subheading">
                                The donation process from the time you arrive
                                center until the time you leave
                            </p>
                        </div>
                    </div>

                    <div className="row wow fadeInUp">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="process-layout">
                                <figure className="process-img">
                                    <img
                                        src="https://templates.bwlthemes.com/blood_donation/images/process_1.jpg"
                                        alt="process"
                                    />
                                    <div className="step">
                                        <h3>1</h3>
                                    </div>
                                </figure>

                                <article className="process-info">
                                    <h2>Registration</h2>
                                    <p>
                                        You need to complete a very simple
                                        registration form. Which contains all
                                        required contact information to enter in
                                        the donation process.
                                    </p>
                                </article>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="process-layout">
                                <figure className="process-img">
                                    <img
                                        src="https://templates.bwlthemes.com/blood_donation/images/process_2.jpg"
                                        alt="process"
                                    />
                                    <div className="step">
                                        <h3>2</h3>
                                    </div>
                                </figure>


                                <article className="process-info">
                                    <h2>Screening</h2>
                                    <p>
                                        A drop of blood from your finger will
                                        take for simple test to ensure that your
                                        blood iron levels are proper enough for
                                        donation process.
                                    </p>
                                </article>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="process-layout">
                                <figure className="process-img">
                                    <img
                                        src="https://templates.bwlthemes.com/blood_donation/images/process_3.jpg"
                                        alt="process"
                                    />
                                    <div className="step">
                                        <h3>3</h3>
                                    </div>
                                </figure>

                                <article className="process-info">
                                    <h2>Donation</h2>
                                    <p>
                                        After ensuring and passed screening test
                                        successfully you will be directed to a
                                        donor bed for donation. It will take
                                        only 6-10 minutes.
                                    </p>
                                </article>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="process-layout">
                                <figure className="process-img">
                                    <img
                                        src="https://templates.bwlthemes.com/blood_donation/images/process_4.jpg"
                                        alt="process"
                                    />
                                    <div className="step">
                                        <h3>4</h3>
                                    </div>
                                </figure>

                                <article className="process-info">
                                    <h2>Refreshment</h2>
                                    <p>
                                        You can also stay in sitting room until
                                        you feel strong enough to leave our
                                        center. You will receive awesome drink
                                        from us in donation zone.{" "}
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DonationProcess;
