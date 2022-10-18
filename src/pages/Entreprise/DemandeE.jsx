import { fireStore } from "../../auth/Firebase";
import { collection, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import NavBarE from "../../componant/NavBarE";
import { Button, Modal, Table } from "react-bootstrap";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
const DemandeE = () => {

    const [demande, setDemande] = useState([]);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [show, setShow] = useState(false);
    const [id, setId] = useState('');
    const getDemande = async () => {
        const q = query(collection(fireStore, "demande"), where("statut", "==", "en attend"));
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const result = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setDemande(result);
            });

        });
    }
    const accepter = (idd) => {
        let start = startDate/1000
        let end = endDate/1000
        updateDoc(doc(fireStore, "demande", idd), { statut: "valide", datedestart: start, datedefin: end })
        setStartDate(null);
        setEndDate(null);
    }
    const refuse = (idd) => {
        updateDoc(doc(fireStore, "demande", idd), { statut: "refuse" })
    }

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
    };
    useEffect(() => {
        getDemande();
    }, [])
    return (
        <>
            <NavBarE />
            <div className="fs-1 fw-bold text-center p-5">
                Les Demandes en attends
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
                        <th>Accepter</th>
                        <th>Refuser</th>
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
                                <td><Button variant="success" size="sm" onClick={() => { handleShow(); setId(d.id) }}>Accepter</Button></td>
                                <td><Button variant="danger" size="sm" onClick={() => refuse(d.id)}>Refuser</Button></td>
                            </tr>
                        )
                    }
                    )
                }
                </tbody>
            </Table>
            <Modal show={show}
                onHide={handleClose}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-sm-6">
                            <label>Date de debut</label>
                            <DatePicker
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                placeholderText={'dd/mm/yyyy'}
                                filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} // weekends cancel
                                showYearDropdown // year show and scrolldown alos
                                scrollableYearDropdown
                            />
                        </div>
                        <div className="col-sm-6 px-3">
                            <label>Date de fin</label>
                            <DatePicker
                                selected={endDate}
                                onChange={date => setEndDate(date)}
                                placeholderText={'dd/mm/yyyy'}
                                filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} // weekends cancel
                                showYearDropdown // year show and scrolldown alos
                                scrollableYearDropdown
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleClose(); accepter(id); }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default DemandeE;