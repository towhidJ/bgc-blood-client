import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";

const drawerWidth = 200;

function Dashboard(props) {
    const url = "/dashboard";
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logOut } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar style={{ backgroundColor: "aliceblue" }}>
                <span className="fw-bolder" style={{ fontSize: "24px" }}>
                    Winter CS
                </span>
            </Toolbar>
            <Divider />
            <Link to="/" id="link">
                <Button color="inherit">Home</Button>
            </Link>
            <br />
            <Link to={""} id="link">
                <Button color="inherit">Dashboard</Button>
            </Link>
            <Link to={`${url}/requestbloodlist`} id="link">
                <Button color="inherit">Request Blood List</Button>
            </Link>

            <Divider />

            {!admin && (
                <>
                    {/* <Link to={`${url}/review`} id="link">
                        <Button color="inherit">User Review</Button>
                    </Link>
                    <div>
                        <Link to={`${url}/payment`} id="link">
                            <Button color="inherit">Payment</Button>
                        </Link>
                    </div> */}
                </>
            )}
            <br />
            {admin && (
                <Box>
                    {/* <Link to={`${url}/makeAdmin`} id="link">
                        <Button color="inherit">Make Admin</Button>
                    </Link> */}
                    <Divider />
                    <Link to={`${url}/addDonner`} id="link">
                        <Button color="inherit">Add Donner</Button>
                    </Link>

                    <Divider />
                    <Link to={`${url}/donnerRegList`} id="link">
                        <Button color="inherit">Donner Reg List</Button>
                    </Link>
                </Box>
            )}
            <div className="px-2 my-5">
                <Button onClick={logOut} variant="contained">
                    Logout
                </Button>
            </div>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
                style={{ backgroundColor: "darkmagenta" }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Winter Care Cream Shop Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />

                <Outlet></Outlet>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
