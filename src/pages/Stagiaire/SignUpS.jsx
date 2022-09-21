import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { fireStore } from "../../auth/Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import generateId from "../../lib/generateId";

const SignUpS = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const submitRegistration = async (e) => {
        e.preventDefault();

        let id = generateId();
        if (password < 6) {
            toast.error('password must be more than 6!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else

            try {
                await setDoc(doc(fireStore, "stagiaire", id), {
                    email: email,
                    password: password
                });
                toast.success('Signed Seccessefully ', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                navigate("/stagiaire/logins")
            }
            catch (e) {
                console.log(e)
            }
    }


        return (
            <>

                <div className="bg-image">
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