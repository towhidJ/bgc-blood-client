import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "./../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [requestSend, setRequestSend] = useState(false);
    const [donnerRole, setDonnerRole] = useState("");
    const [donnerStatus, setDonneStatus] = useState("");
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, "", "PUT");
                setAuthError("");
                const destination = location?.state?.from || "/";
                navigate(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setAdmin(data.admin);
            });
        console.log(user.email);
    }, [user.email]);

    useEffect(() => {
        fetch(`http://localhost:5000/donnerRegister/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setRequestSend(data.request);
                setDonnerRole(data.role);
                setDonneStatus(data.status);
            });
        console.log(user.email);
    }, [user.email]);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {})
            .finally(() => setIsLoading(false));
    };

    const saveUser = (email, displayName, phone?, method) => {
        const user = { email, displayName, phone };
        fetch("http://localhost:5000/users", {
            method: method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        }).then((result) => {
            console.log(result);
        });
    };

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        setIsLoading,
        setUser,
        admin,
        requestSend,
        donnerRole,
        donnerStatus,
    };
};

export default useFirebase;
