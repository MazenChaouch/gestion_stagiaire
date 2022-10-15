import { Button, Form, Modal, ModalBody, ModalFooter, ModalHeader, Table, Card } from "react-bootstrap";
import NavBarS from "../../componant/NavBarS";
import { useEffect, useRef, useState } from "react"
import { collection, deleteDoc, doc, onSnapshot, query, where } from "firebase/firestore";
import { fireStore } from "../../auth/Firebase";
import { MdOutlineDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { useParams } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import AuthCode from 'react-auth-code-input';
import Footer from "../../componant/Footer";

const MesDemandeS = () => {
    let { stagiaireId } = useParams();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const statutS = (s) => {
        if (s==="en attend" ){
            return (
        <Button variant="warning" disabled size="sm">En Attend</Button>
        )}
        else if (s==="valide" ){
            return (
        <Button variant="success" disabled size="sm">Valide</Button>
        )}
        else if (s==="refuse")
        return (
            <Button variant="danger" disabled size="sm">refuse</Button>
        )
    }
    const [demande, setDemande] = useState([]);
    const getDemande = async () => {
        const q = query(collection(fireStore, "demande"), where("stagiaireId" ,"==" , stagiaireId));
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const result = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                    setDemande(result);
            });
        });
    }
    useEffect(() => {
        getDemande();
    }, [])
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [niveau, setNiveau] = useState("");
    const [address, setAdress] = useState("");
    const [sexe, setSexe] = useState("");
    const [tel, setTel] = useState("");
    const [codepostal, setCodepostal] = useState("");
    const [universite, setUniversite] = useState("");
    const [statut] = useState("en attend");
    const [pdf, setPdf] = useState(null);
    const AuthInputRef = useRef(null);

    return (
        <>
            <NavBarS />
            <div className="fs-1 fw-bold text-center p-5">
                Mes Demandes
            </div>
            <Table striped>
                <thead>
                    <tr className="text-center">
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Address</th>
                        <th>Code postal</th>
                        <th>E-mail</th>
                        <th>sexe</th>
                        <th>niveau universite</th>
                        <th>Universite</th>
                        <th>CV</th>
                        <th>Telephone</th>
                        <th>Statut</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>{
                    demande.map((d, index) => {
                            return ( 
                                <tr key={index} className="text-center" >
                                    <td>{index + 1}</td>
                                    <td>{d.nom}</td>
                                    <td>{d.prenom}</td>
                                    <td>{d.address}</td>
                                    <td>{d.codepostal}</td>
                                    <td>{d.email}</td>
                                    <td>{d.sexe}</td>
                                    <td>{d.niveau}</td>
                                    <td>{d.universite}</td>
                                    <td><Button variant="dark" target={'_blank'} href={d.pdf} size="sm">Link</Button></td>
                                    <td>{d.tel}</td>
                                    <td>{statutS(d.statut)}</td>
                                    <td><Button variant="danger" size="sm" onClick={() => deleteDoc(doc(fireStore, "demande", d.id))}><MdOutlineDelete  size={25}/></Button></td>
                                    <td><Button variant="info" size="sm" onClick={handleShow}><TbEdit size={25}/></Button></td>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </Table>


            <Modal  show={show}
                    onHide={handleClose}
                    size="lg"
            >
                <ModalHeader className="fw-bolder fs-3 text-center" closeButton>
                Modification d'une demande
                </ModalHeader>
                <ModalBody>
                <Form method="post">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Label className="fs-5 fw-bold">Nom</Form.Label>
                                        <Form.Control type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Entrer votre nom" required></Form.Control>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Label className="fs-5 fw-bold">Prénom</Form.Label>
                                        <Form.Control type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Entrer votre prénom" required></Form.Control>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-8">
                                        <Form.Label className="fs-5 fw-bold">Address</Form.Label>
                                        <Form.Control type="text" value={address} onChange={(e) => setAdress(e.target.value)} placeholder="Entrer votre address" required></Form.Control>
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
                                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Entrer votre e-mail" required></Form.Control>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-sm-3">
                                        <Form.Label className="fs-5 fw-bold">Sexe</Form.Label>
                                    </div>
                                    <div className="col-sm-3">
                                        <Form.Check label="Masculin" name="sexe" value="Masculin" onChange={(e) => setSexe(e.target.value)} checked={sexe === "Masculin"} type="radio" />
                                        <Form.Check label="Feminin" name="sexe" value="Feminin" onChange={(e) => setSexe(e.target.value)} checked={sexe === "Feminin"} type="radio" />
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <Form.Label className="fs-5 fw-bold">Niveau universitaire</Form.Label>
                                        <Form.Control type="text" value={niveau} onChange={(e) => setNiveau(e.target.value)} placeholder="Entrer votre niveau universitaire" required></Form.Control>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <Form.Label className="fs-5 fw-bold">Université</Form.Label>
                                        <Form.Control type="text" value={universite} onChange={(e) => setUniversite(e.target.value)} placeholder="Entrer votre université actual" required></Form.Control>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <Form.Label className="fs-5 fw-bold">Deploye votre demande de stage</Form.Label>
                                        <Form.Control type="file" onChange={(e) => setPdf(e.target.files[0])} accept=".pdf" placeholder="Entrer votre e-mail" required></Form.Control>
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

                                </div>
                    </Form>
                </ModalBody>
                <ModalFooter>
                <div className="row my-3">
                                    <div className="col-md-6">
                                        <Button variant="dark" type="submit" >Modifier</Button>
                                    </div>
                                </div>
                </ModalFooter>
            </Modal>
            <Footer/>
        </>
    )
}
export default MesDemandeS;