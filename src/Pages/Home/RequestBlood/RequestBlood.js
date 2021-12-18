import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import "./RequestBlood.css";
const schema = yup.object().shape({
    userName: yup.string().required("Name Is Required"),
    bloodGroup: yup.string().required(),
    phoneNumber: yup.string().required("Phone Numbe Is Required"),
    hospitalName: yup.string().required("Hospital Name is Required"),
    date: yup.string().required("Please Enter Date"),
    time: yup.string().required("Please Enter Time"),
    messages: yup.string().required("Please Type Your Message"),
});
const RequestBlood = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmitHandler = (data) => {
        data.status = "pending";
        console.log({ data });

        fetch("http://localhost:5000/requestBlood", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                toast.success("Request Submitted");
            });
        reset();
    };
    return (
        <>
            <div
                className="d-md-flex justify-content-between align-items-center container mx-auto"
                id="requestBlood"
            >
                <div className="d-none d-md-block">
                    <img
                        src="https://templates.bwlthemes.com/blood_donation/images/appointment.jpg"
                        className="img-fluid"
                        alt=""
                    />
                </div>
                <div className="card-blood mx-5">
                    <h5 className="text-center mb-4">Request Blood</h5>
                    <form
                        className="form-card "
                        onSubmit={handleSubmit(onSubmitHandler)}
                    >
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex">
                                {" "}
                                <label className="form-control-label px-3">
                                    Name
                                    <span className="text-danger"> *</span>
                                </label>{" "}
                                <input
                                    type="text"
                                    {...register("userName")}
                                    placeholder="Enter your first name"
                                />{" "}
                                <p className="text-danger">
                                    {errors.userName?.message}
                                </p>
                            </div>
                            <div className="form-group col-sm-6 flex-column d-flex">
                                {" "}
                                <label className="form-control-label px-3">
                                    Phone number
                                    <span className="text-danger"> *</span>
                                </label>{" "}
                                <input
                                    type="text"
                                    {...register("phoneNumber")}
                                    placeholder=""
                                />{" "}
                                <p className="text-danger">
                                    {errors.phoneNumber?.message}
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex">
                                {" "}
                                <label className="form-control-label px-3">
                                    Date<span className="text-danger"> *</span>
                                </label>{" "}
                                <input type="date" {...register("date")} />{" "}
                                <p className="text-danger">
                                    {errors.date?.message}
                                </p>
                            </div>
                            <div className="form-group col-sm-6 flex-column d-flex">
                                {" "}
                                <label className="form-control-label px-3">
                                    Time
                                    <span className="text-danger"> *</span>
                                </label>{" "}
                                <input type="time" {...register("time")} />{" "}
                                <p className="text-danger">
                                    {errors.time?.message}
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex">
                                {" "}
                                <label className="form-control-label px-3">
                                    Blood Group
                                    <span className="text-danger"> *</span>
                                </label>{" "}
                                <select
                                    className="form-control"
                                    name="your_center"
                                    {...register("bloodGroup")}
                                >
                                    <option value="">Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                                <p className="text-danger">
                                    {errors.bloodGroup?.message}
                                </p>
                            </div>
                            <div className="form-group col-sm-6 flex-column d-flex">
                                {" "}
                                <label className="form-control-label px-3">
                                    Hospital Name
                                    <span className="text-danger"> *</span>
                                </label>{" "}
                                <input
                                    type="text"
                                    {...register("hospitalName")}
                                    placeholder="Enter Hospital name"
                                />{" "}
                                <p className="text-danger">
                                    {errors.hospitalName?.message}
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-12 flex-column d-flex">
                                {" "}
                                <label className="form-control-label px-3">
                                    Message
                                    <span className="text-danger"> *</span>
                                </label>{" "}
                                <textarea
                                    rows="8"
                                    {...register("messages")}
                                    placeholder="Type Your Message Bangla Or English"
                                />{" "}
                                <p className="text-danger">
                                    {errors.messages?.message}
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="form-group col-sm-3">
                                {" "}
                                <button
                                    type="submit"
                                    className="btn-block btn-primary"
                                >
                                    Submit
                                </button>{" "}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default RequestBlood;
