import React from "react";
import PhotoGallary from "../../PhotoGallary/PhotoGallary";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import AdBanner from "../AdBanner/AdBanner";
import Banner from "../Banner/Banner";
import DonationProcess from "../DonationProcess/DonationProcess";
import RequestBlood from "../RequestBlood/RequestBlood";
import Voluentier from "../Voluentier/Voluentier";

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <DonationProcess />
            <Voluentier />
            <AdBanner />
            <RequestBlood />
            <PhotoGallary />
            <Footer />
        </>
    );
};

export default Home;
