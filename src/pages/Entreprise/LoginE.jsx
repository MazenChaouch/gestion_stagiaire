import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { fireStore } from "../../auth/Firebase";
import { useNavigate } from "react-router-dom";

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
        admin.map(a => {
            if (a.user === user && a.password === password) {
                return navigate("/entreprise/statistiquee");
            }
        })

    }
    return (
        <>

            <div className="bg-image">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div>
                        <Link to="/" className="text-black text-decoration-none"><h1 className="fw-bolder fs-1 d-block">Login Admin </h1></Link>
                        <Form className="mt-5" onSubmit={log}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Enter email" required />
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


        </>);

}
export default LoginE;