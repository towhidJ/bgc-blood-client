import { useEffect, useState } from "react";
import Slider from "react-slick";

const BloodRequestNotice = () => {
    const [reqList, setReqList] = useState([]);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    };

    useEffect(() => {
        fetch("http://localhost:5000/requestbloodlist")
            .then((res) => res.json())
            .then((result) => {
                setReqList(result);
            });
    }, []);
    return (
        <>
            <div
                style={{ backgroundColor: "#FFFEF0" }}
                className="py-5 overflow-hidden"
            >
                <h1 className="text-center">Blood Request</h1>
                <Slider {...settings}>
                    {reqList.map((review) => (
                        <div className="text-center  p-5 d-flex justify-content-center align-items-center flex-column gap-4">
                            <div>
                                <h5>{review.userName}</h5>
                                <h5>{review.phoneNumber}</h5>
                            </div>
                            <div>
                                <h4>{review.hospitalName}</h4>
                                <h5 className="text-danger fw-bold">
                                    Blood Group: {review.bloodGroup}
                                </h5>
                                <h4>
                                    {review.date} - {review.time}
                                </h4>
                            </div>
                            <h2 className="w-75">{review.messages}</h2>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default BloodRequestNotice;
