import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import Footer from "../componant/Footer";
const Home = () => {

    return (
        <>

            <div className="bg-image" >
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div>

                        <h1 className="fw-bolder fs-1 d-block">Gestion de Stagiaire </h1>

                        <Form className="mt-5" >
                            <Container className="w-50 text-center">
                                <Form.Group className="mb-3">
                                    <Form.Label className="fs-3">Stagiaire</Form.Label><br />
                                    <Link to={'/stagiaire/logins'}><Button variant="outline-info">Login</Button></Link>
                                    <Link to={'/stagiaire/signups'}><Button variant="outline-info">Sign Up</Button></Link>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="fs-3">Entreprise</Form.Label><br />
                                    <Link to={'/entreprise/logine'}><Button variant="outline-info">Login</Button></Link>
                                    <Link to={'/entreprise/signupe'}><Button variant="outline-info">Sign Up</Button></Link>
                                </Form.Group>
                            </Container>
                        </Form>

                    </div>
                </div>
            </div>

        <Footer/>
        </>
    )
}
export default Home;