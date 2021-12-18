import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";

const DonnerRegList = () => {
    const [donnerRegList, setDonnerRegList] = useState([]);
    const [loadorder, setLoadOrder] = useState(true);
    const { user } = useAuth();
    const [st, setSt] = useState(0);
    useEffect(() => {
        setLoadOrder(true);
        fetch("https://evening-atoll-80410.herokuapp.com/requestDonnerReglist/")
            .then((res) => res.json())
            .then((data) => {
                setDonnerRegList(data);
                setSt(0);
                setLoadOrder(false);
            });
        console.log(donnerRegList);
    }, [st]);

    const changHandler = (data, id) => {
        console.log(data);
        fetch(
            `https://evening-atoll-80410.herokuapp.com/bloodDonnerRegStatus/${id}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: data }),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setSt(1);
                toast.success("Status Updatetd successfully");
            });
    };

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to delete this order?")) {
            {
                fetch(
                    `https://evening-atoll-80410.herokuapp.com/donner/${id}`,
                    {
                        method: "Delete",
                        headers: { "Content-Type": "application/json" },
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        setSt(1);

                        toast.error("Order Delete Success!");
                    });
            }
        }
    };
    return (
        <div>
            <div className="">
                <div className="container mt-5 mb-2">
                    <div className="text-center">
                        <h1 className="search-text">
                            Manage
                            <span className="search-heading-text"> Donner</span>
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="container ">
                    <Table responsive striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Blood Group</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Division</th>

                                <th scope="col">Status</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        {loadorder ? (
                            <div className=" d-flex justify-content-center align-items-center">
                                <Spinner animation="border" />
                            </div>
                        ) : (
                            <tbody>
                                {donnerRegList.map((order) => (
                                    <tr key={order._id}>
                                        <td>{order.donnerName}</td>
                                        <td>{order.phoneNumber}</td>
                                        <td>{order.bloodGroup}</td>
                                        <td>{order.dob}</td>
                                        <td>{order.division}</td>

                                        <td
                                            className={
                                                order.status === "Pending"
                                                    ? "pending"
                                                    : "accepted"
                                            }
                                        >
                                            {order.status !== "accepted" ? (
                                                <select
                                                    className={
                                                        order.status ===
                                                        "Pending"
                                                            ? "pending"
                                                            : "accepted"
                                                    }
                                                    onChange={(e) =>
                                                        changHandler(
                                                            e.target.value,
                                                            order._id
                                                        )
                                                    }
                                                >
                                                    <option
                                                        className="pending"
                                                        value="pending"
                                                    >
                                                        {order.status}
                                                    </option>
                                                    <option
                                                        className="complete"
                                                        value="accepted"
                                                    >
                                                        Accepted
                                                    </option>
                                                </select>
                                            ) : (
                                                order.status
                                            )}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    deleteHandler(order._id)
                                                }
                                                className="btn btn-danger"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default DonnerRegList;
