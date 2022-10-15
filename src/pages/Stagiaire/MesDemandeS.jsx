import { Button, Table } from "react-bootstrap";
import NavBarS from "../../componant/NavBarS";
import { useEffect, useState } from "react"
import { collection, deleteDoc, doc, onSnapshot, query, where } from "firebase/firestore";
import { fireStore } from "../../auth/Firebase";
import { AiFillDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";


const MesDemandeS = () => {
    let { stagiaireId } = useParams();
    console.log(stagiaireId)
    const statut = (s) => {
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
                                    <td>{statut(d.statut)}</td>
                                    <td><Button variant="danger" size="sm" onClick={() => deleteDoc(doc(fireStore, "demande", d.id))}><AiFillDelete size={25}   /></Button></td>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </Table>
        </>
    )
}
export default MesDemandeS;