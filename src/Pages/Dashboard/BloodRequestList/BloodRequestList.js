import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";

const BloodRequestList = () => {
    const [orders, setOrders] = useState([]);
    const [loadorder, setLoadOrder] = useState(true);
    const { user } = useAuth();
    const [st, setSt] = useState(0);
    useEffect(() => {
        setLoadOrder(true);
        fetch("http://localhost:5000/requestbloodlist/")
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
                setSt(0);
                setLoadOrder(false);
            });
        console.log(orders);
    }, [st]);

    const changHandler = (data, id) => {
        console.log(data);
        fetch(`http://localhost:5000/bloodRequeststatus/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: data }),
        })
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
                    `https://radiant-castle-55741.herokuapp.com/orders/${id}`,
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
                            <span className="search-heading-text">
                                {" "}
                                Blood Request List
                            </span>
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="container table-responsive mx-auto px-5">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Blood Group</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Hospital Name</th>
                                <th scope="col">Message</th>
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
                                {orders.map((order) => (
                                    <tr key={order._id}>
                                        <td>{order.userName}</td>
                                        <td>{order.phoneNumber}</td>
                                        <td>{order.bloodGroup}</td>
                                        <td>{order.date}</td>
                                        <td>{order.time}</td>
                                        <td>{order.hospitalName}</td>

                                        <td>{order.messages}</td>
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
                                            {/* <button
                                                onClick={() =>
                                                    deleteHandler(order._id)
                                                }
                                                className="btn btn-danger"
                                            >
                                                Delete
                                            </button> */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BloodRequestList;
