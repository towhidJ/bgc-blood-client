import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import useAuth from "../../hooks/useAuth";
import Header from "../Shared/Header/Header";
import "./DonnerRegistration.css";

const DonnerRegistration = () => {
    const { user, requestSend, donnerStatus } = useAuth();
    const schema = yup.object().shape({
        phoneNumber: yup.string().required("Phone Number is Required"),
        dob: yup.string().required("Please Enter DOB"),
        division: yup.string().required("Please Enter Division Name"),
        bloodGroup: yup.string().required("Select Blood Group"),
        address: yup.string().required("Please Type Your Address"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmitHandler = (data) => {
        data.donnerName = user?.displayName;
        data.email = user?.email;
        data.donnerRole = "donner";
        data.status = "pending";
        console.log({ data });

        fetch("http://localhost:5000/donnerRegister", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                toast.success("Donner Request Submitted");
            });

        reset();
    };

    // useEffect(() => {
    //     fetch(`http://localhost:5000/donnerRegister/${user.email}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setRequestSend(data.request);
    //         });
    //     console.log(user.email);
    // }, [user.email]);
    return (
        <>
            <Header />
            {requestSend ? (
                <div className="text-center d-flex align-items-center justify-content-center flex-column">
                    <h1>
                        Your request is{" "}
                        <span className="text-warning">{donnerStatus}</span>
                    </h1>
                    <h1>Please Wait 12 to 24h</h1>
                </div>
            ) : (
                <div className="row  container mx-auto">
                    <div className="col-12 mx-auto">
                        <div class="appointment-form-wrapper theme-custom-box-shadow text-center clearfix wow zoomIn">
                            <h3 class="join-heading join-heading-alt">
                                Request Donner Registration
                            </h3>
                            <form
                                class="appoinment-form row "
                                onSubmit={handleSubmit(onSubmitHandler)}
                            >
                                <div class="form-group col-md-6">
                                    <input
                                        id="your_name"
                                        class="form-control"
                                        placeholder="Name"
                                        type="text"
                                        defaultValue={user?.displayName}
                                        readOnly
                                    />
                                </div>
                                <div class="form-group col-md-6">
                                    <input
                                        id="your_email"
                                        class="form-control"
                                        placeholder="Email"
                                        type="email"
                                        defaultValue={user?.email}
                                        readOnly
                                    />
                                </div>
                                <div class="form-group col-md-6">
                                    <input
                                        id="your_phone"
                                        class="form-control"
                                        placeholder="Phone"
                                        type="text"
                                        {...register("phoneNumber")}
                                    />
                                    <p className="text-warning">
                                        {errors.phoneNumber?.message}
                                    </p>
                                </div>
                                <div class="form-group col-md-6">
                                    <div class="select-style">
                                        <select
                                            class="form-control"
                                            name="your_center"
                                            {...register("bloodGroup")}
                                        >
                                            <option value="">
                                                Blood Group
                                            </option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </select>
                                    </div>
                                    <p className="text-warning">
                                        {errors.bloodGroup?.message}
                                    </p>
                                </div>

                                <div class="form-group col-md-6">
                                    <div class="input-group mb-3">
                                        <span
                                            class="input-group-text"
                                            id="basic-addon1"
                                        >
                                            DOB
                                        </span>
                                        <input
                                            id="your_date"
                                            class="form-control"
                                            type="date"
                                            aria-describedby="basic-addon1"
                                            {...register("dob")}
                                        />
                                    </div>
                                    <p className="text-warning">
                                        {errors.dob?.message}
                                    </p>
                                </div>

                                <div class="form-group col-md-6">
                                    <input
                                        id="your_time"
                                        class="form-control"
                                        placeholder="Division"
                                        type="text"
                                        {...register("division")}
                                    />
                                    <p className="text-warning">
                                        {errors.division?.message}
                                    </p>
                                </div>
                                {/* <div class="form-group col-12">
                                <input
                                    id="your_address"
                                    class="form-control"
                                    placeholder="Address"
                                    type="text"
                                />
                            </div> */}

                                <div class="form-group col-md-12 col-sm-12 col-xs-12">
                                    <textarea
                                        id="textarea_address"
                                        class="form-control"
                                        rows="4"
                                        placeholder="Your Address..."
                                        {...register("address")}
                                    ></textarea>
                                    <p className="text-warning">
                                        {errors.address?.message}
                                    </p>
                                </div>

                                <div class="form-group col-md-12 col-sm-12 col-xs-12">
                                    <button
                                        id="btn_submit"
                                        class="btn btn-theme"
                                        type="submit"
                                    >
                                        Get Appointment
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DonnerRegistration;