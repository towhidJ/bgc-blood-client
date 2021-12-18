import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import Header from "../Shared/Header/Header";

const DonnerList = () => {
    const [donnerList, setDonnerList] = useState([]);
    const [loadorder, setLoadOrder] = useState(true);
    let aa = 0;
    useEffect(() => {
        setLoadOrder(true);
        fetch("http://localhost:5000/donnerList/")
            .then((res) => res.json())
            .then((data) => {
                setDonnerList(data);
                setLoadOrder(false);
            });
    }, []);
    return (
        <>
            <Header />
            <div className="mx-3">
                <div className="text-center">
                    <h1>Donner List</h1>
                </div>
                <Table responsive striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Donner Name</th>
                            <th>Phone Number</th>
                            <th>Blood Group</th>
                            <th>Address</th>
                            <th>Division</th>
                        </tr>
                    </thead>
                    {loadorder ? (
                        <div className=" d-flex justify-content-center align-items-center">
                            <Spinner animation="border" />
                        </div>
                    ) : (
                        <tbody>
                            {donnerList.map((donner) => (
                                <tr key={donner._id}>
                                    <td>{++aa}</td>
                                    <td>{donner.donnerName}</td>
                                    <td>{donner.phoneNumber}</td>
                                    <td>{donner.bloodGroup}</td>
                                    <td>{donner.address}</td>
                                    <td>{donner.division}</td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </Table>
            </div>
        </>
    );
};

export default DonnerList;
