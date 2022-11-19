import { useRef, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import NavBarS from "../../componant/NavBarS";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import AuthCode from 'react-auth-code-input';
import generateId from "../../lib/generateId";
import { toast } from 'react-toastify';
import { setDoc, doc } from "firebase/firestore";
import { fireStore, storage } from "../../auth/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Footer from "../../componant/Footer";
import { useEffect } from "react";
const DemandeS = () => {

    let id = generateId();
    let { stagiaireId } = useParams();
    let navigate = useNavigate()
    const user = localStorage.getItem("user");
    
    const addDemande = async (e) => {
        e.preventDefault();
        const storageRef = ref(storage, `demande/${id}`);

        const uploadTask = uploadBytesResumable(storageRef, pdf);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;

                    case 'running':
                        console.log('Upload is running');
                        break;

                    default:
                        console.log('Upload is in progress');
                }
                console.log(pdf)
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await setDoc(doc(fireStore, "demande", id), {
                        nom: nom,
                        prenom: prenom,
                        email: email,
                        niveau: niveau,
                        pdf: downloadURL,
                        address: address,
                        sexe: sexe,
                        tel: tel,
                        codepostal: codepostal,
                        universite: universite,
                        statut: statut,
                        stagiaireId: stagiaireId
                    });
                    Navigate("/stagiaire/mesdemandes/" + stagiaireId);
                    toast.success('Demande envoyer', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                    console.log("Demande envoyer");
                }
                );
            }
        );
        
    }
    useEffect(() => {
        if (user!==stagiaireId){
            navigate("/stagiaire/logins")
        }
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

        <><NavBarS />
            <div className="img1">
                <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <Form onSubmit={addDemande} method="post">
                            <div className="glass-effect">
                                <h1 className="fw-bolder fs-1 d-block my-5">Formulaire d'une demande de stage </h1>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Label className="fs-5 fw-bold">Nom</Form.Label>
                                        <Form.Control bsClass="input1" type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Entrer votre nom" required></Form.Control>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Label className="fs-5 fw-bold">Prénom</Form.Label>
                                        <Form.Control bsClass="input1" type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Entrer votre prénom" required></Form.Control>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-8">
                                        <Form.Label className="fs-5 fw-bold">Address</Form.Label>
                                        <Form.Control bsClass="input1" type="text" value={address} onChange={(e) => setAdress(e.target.value)} placeholder="Entrer votre address" required></Form.Control>
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
                                        <Form.Control bsClass="input1" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Entrer votre e-mail" required></Form.Control>
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
                                        <Form.Control bsClass="input1" type="text" value={niveau} onChange={(e) => setNiveau(e.target.value)} placeholder="Entrer votre niveau universitaire" required></Form.Control>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <Form.Label className="fs-5 fw-bold">Université</Form.Label>
                                        <Form.Control bsClass="input1" type="text" value={universite} onChange={(e) => setUniversite(e.target.value)} placeholder="Entrer votre université actual" required></Form.Control>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <Form.Label className="fs-5 fw-bold">Deploye votre demande de stage</Form.Label>
                                        <Form.Control bsClass="input1" type="file" onChange={(e) => setPdf(e.target.files[0])} accept=".pdf" placeholder="Entrer votre e-mail" required></Form.Control>
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
                                <div className="row my-3">
                                    <div className="col-md-6">
                                        <Button variant="dark" type="submit" >Envoyer</Button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default DemandeS