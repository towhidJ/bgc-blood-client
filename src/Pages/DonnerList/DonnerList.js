import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import Header from "../Shared/Header/Header";

const DonnerList = () => {
    const [donnerList, setDonnerList] = useState([]);
    const [displayDonnerList, setDisplayDonnerList] = useState([]);
    const [loadorder, setLoadOrder] = useState(true);
    let aa = 0;
    useEffect(() => {
        setLoadOrder(true);
        fetch("https://evening-atoll-80410.herokuapp.com/donnerList/")
            .then((res) => res.json())
            .then((data) => {
                setDonnerList(data);
                setDisplayDonnerList(data);
                setLoadOrder(false);
            });
    }, []);

    const handleSearch = (event) => {
        const searchText = event.target.value;

        const matchedBloods = donnerList.filter((order) =>
            order.bloodGroup.toLowerCase().includes(searchText.toLowerCase())
        );

        setDisplayDonnerList(matchedBloods);
    };
    return (
        <>
            <Header />

            <div className="mx-3">
                <div className="text-center">
                    <h1>Donner List</h1>
                </div>
                <div className="search-container text-center my-3">
                    <input
                        type="text"
                        className="form-control mx-auto w-50"
                        onChange={handleSearch}
                        placeholder="Search BloodGroup"
                    />
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
                            {displayDonnerList.map((donner) => (
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
