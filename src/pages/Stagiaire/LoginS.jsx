import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { fireStore } from "../../auth/Firebase";
import { useNavigate } from "react-router-dom";

const LoginS = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [stagiaire, setStagiaire] = useState([]);

    const getStagiaire = async () => {
        const q = query(collection(fireStore, "stagiaire"));
        const fetch = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const result = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setStagiaire(result);
            });
        });
    }
    useEffect(() => {
        getStagiaire();
    }, [])

    const log = (e) => {
        e.preventDefault();
        console.log(stagiaire)
        stagiaire.map(s => {
            if (s.email === email && s.password === password) {
                console.log("ssss");
                return navigate("/stagiaire");
            }
        })

    }
    return (
        <>
            <div className="bg-image">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div>
                        <Link to="/" className="text-black text-decoration-none"><h1 className="fw-bolder fs-1 d-block ">Login Stagiaire </h1></Link>
                        <Form className="mt-5" onSubmit={log}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required placeholder="Password" />
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
export default LoginS;