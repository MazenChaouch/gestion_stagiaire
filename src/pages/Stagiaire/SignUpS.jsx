import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { setDoc, doc } from "firebase/firestore";
import { fireStore } from "../../auth/Firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import generateId from "../../lib/generateId";

const SignUpS = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [stagiaire, setStagiaire] = useState([]);

    const getStagiaire = async () => {
        const q = query(collection(fireStore, "stagiaire"));
            onSnapshot(q, (querySnapshot) => {
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


    const submitRegistration = async (e) => {
        e.preventDefault();
        let user = false;
        let id = generateId();
        stagiaire.map(s => {

            if (s.email === email) {
                user = true

            }
            else
                user = user || false

        })
        
        if (password.length > 6 && !user) {
            
            await setDoc(doc(fireStore, "stagiaire", id), {
                email: email,
                password: password
            });
            toast.success('Signed up successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
            navigate("/stagiaire/logins")
        }
        else if (user) {
            toast.error('This E-mail already used!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
        else {
            toast.error('Password must be at least 6 characters!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
    }


    return (
        <>

            <div className="bg-image2">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div>
                        <Link to="/" className="text-black text-decoration-none"><h1 className="fw-bolder fs-1 d-block">SignUp Stagiaire </h1></Link>
                        <Form className="mt-5" onSubmit={submitRegistration}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                SignUp
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>


        </>



    )

}

export default SignUpS;