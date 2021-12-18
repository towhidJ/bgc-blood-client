import React from "react";
import banner from "../../../images/appointment_female_bg.jpg";
import BloodRequestNotice from "./../BloodRequestNotice/BloodRequestNotice";
import "./AdBanner.css";
const AdBanner = () => {
    return (
        <div className="container-fluid">
            <div>
                <img src={banner} alt="Banner" className="img-fluid" />
            </div>
            <div>
                <BloodRequestNotice />
            </div>
        </div>
    );
};

export default AdBanner;
