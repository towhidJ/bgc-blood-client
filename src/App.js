import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import AddDonner from "./Pages/Dashboard/AddDonner/AddDonner";
import BloodRequestList from "./Pages/Dashboard/BloodRequestList/BloodRequestList";
import Dashboard from "./Pages/Dashboard/Dashboard/DashBoard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import DonnerRegList from "./Pages/Dashboard/DonnerRegList/DonnerRegList";
import DonnerList from "./Pages/DonnerList/DonnerList";
import DonnerRegistration from "./Pages/DonnerRegistration/DonnerRegistration";
import Home from "./Pages/Home/Home/Home";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/donnerRequest"
                            element={
                                <PrivateRoute>
                                    <DonnerRegistration />
                                </PrivateRoute>
                            }
                        />

                        <Route
                            path="dashboard"
                            element={
                                <PrivateRoute>
                                    <Dashboard />
                                </PrivateRoute>
                            }
                        >
                            <Route
                                path=""
                                element={
                                    <PrivateRoute>
                                        <DashboardHome></DashboardHome>
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="requestbloodlist"
                                element={
                                    <AdminRoute>
                                        <BloodRequestList />
                                    </AdminRoute>
                                }
                            />
                            <Route
                                path="donnerRegList"
                                element={<DonnerRegList />}
                            />
                            <Route path="addDonner" element={<AddDonner />} />
                            <Route path="*" element={<h1>Not Found</h1>} />
                        </Route>
                        <Route path="donnerList" element={<DonnerList />} />
                        <Route path="*" element={<h1>Not Found</h1>} />
                    </Routes>
                </AuthProvider>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
                />
            </BrowserRouter>
        </div>
    );
}

export default App;
