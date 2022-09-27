import { useRef, useState } from "react";
import { Card, Form , Button } from "react-bootstrap";
import NavBarS from "../../componant/NavBarS";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import AuthCode from 'react-auth-code-input';


const DemandeS = () => {

    const [nom, setNom] = useState([]);
    const [prenom, setPrenom] = useState([]);
    const [email, setEmail] = useState([]);
    const [niveau, setNiveau] = useState([]);
    const [demande, setDemande] = useState([]);
    const [address, setAdress] = useState([]);
    const [sexe, setSexe] = useState([]);
    const [tel, setTel] = useState("");
    const [codepostal, setCodepostal] = useState("");
    const AuthInputRef = useRef(null);

    return (

        <><NavBarS />
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="fw-bolder fs-1 d-block my-5">Formulaire d'une demande de stage </h1>
                    <Form>
                        <Card className="my-5">
                            <Card.Body>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Label className="fs-5 fw-bold">Nom</Form.Label>
                                        <Form.Control type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Entrer votre nom"></Form.Control>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Label className="fs-5 fw-bold">Prénom</Form.Label>
                                        <Form.Control type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Entrer votre prénom"></Form.Control>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-8">
                                        <Form.Label className="fs-5 fw-bold">Address</Form.Label>
                                        <Form.Control type="text" value={address} onChange={(e) => setAdress(e.target.value)} placeholder="Entrer votre address"></Form.Control>
                                    </div>
                                    <div className="col-md-4">
                                        <Form.Label className="fs-5 fw-bold">Code postal</Form.Label>
                                        <AuthCode
                                            key={'numeric'}
                                            allowedCharacters={'numeric'}
                                            ref={AuthInputRef}
                                            onChange={setCodepostal}
                                            inputClassName='input'
                                            length={4}
                                            isPassword={false}
                                            autoFocus={false}
                                        />
                                    </div>
                                </div> 
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <Form.Label className="fs-5 fw-bold">E-mail</Form.Label>
                                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Entrer votre e-mail"></Form.Control>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-sm-3">
                                        <Form.Label className="fs-5 fw-bold">Sexe</Form.Label>
                                    </div>
                                    <div className="col-sm-3">
                                        <Form.Check inline label="Masculin" name="sexe" value={sexe} onChange={(e) => setSexe(e.target.value)} type="radio" />
                                        <Form.Check inline label="Feminin" name="sexe" value={sexe} onChange={(e) => setSexe(e.target.value)} type="radio" />
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <Form.Label className="fs-5 fw-bold">Niveau universitaire</Form.Label>
                                        <Form.Control type="text" value={niveau} onChange={(e) => setNiveau(e.target.value)} placeholder="Entrer votre niveau universitaire"></Form.Control>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <Form.Label className="fs-5 fw-bold">Université</Form.Label>
                                        <Form.Control type="email" value={universite} placeholder="Entrer votre université actual"></Form.Control>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <Form.Label className="fs-5 fw-bold">Deploye votre demande de stage</Form.Label>
                                        <Form.Control type="file" value={demande} onChange={(e) => setDemande(e.target.value)} accept=".pdf" placeholder="Entrer votre e-mail"></Form.Control>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-6">
                                        <Form.Label className="fs-5 fw-bold">Telephone</Form.Label>
                                        <PhoneInput
                                            defaultCountry="TN"
                                            placeholder="Enter votre numero de telephone"
                                            value={tel}
                                            onChange={setTel}
                                        />
                                    </div>
                                    <div className="col-md-2 m-auto mt-4 p-2">
                                    <Button variant="dark" >Envoyer</Button>
                                    </div>
                                </div>

                            </Card.Body>
                        </Card>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default DemandeS;