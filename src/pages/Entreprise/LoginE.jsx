import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { fireStore } from "../../auth/Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Header from "../../componant/Header";
import Footer from "../../componant/Footer";

const LoginE = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [password, setPassword] = useState([]);
    const [admin, setAdmin] = useState([]);

    const getAdmin = async () => {
        const q = query(collection(fireStore, "admin"));
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const result = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setAdmin(result);
            });
        });
    }
    useEffect(() => {
        getAdmin();
    }, [])

    const log = (e) => {
        e.preventDefault();
        let u = false;
        admin.map(a => {
            if (a.user === user && a.password === password) {
                u = true
                
            }
            else
                u = u || false
            })
            if (u) {
                navigate("/entreprise/demandee");
                toast.success('Logged in', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });
            }
    
            else if (!u) {
                toast.error('Login information are unavaileble', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });
            }
        }
    return (
        <>
<Header/>
            <div className="bg-image2">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="glass-effect">
                        <label className="text-black text-decoration-none"><h1 className="fw-bolder fs-1 d-block">Login Entreprise </h1></label>
                        <Form className="mt-5" onSubmit={log}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>User name</Form.Label>
                                <Form.Control type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Enter user name" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
<Footer/>

        </>);

}
export default LoginE;