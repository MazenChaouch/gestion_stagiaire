import NavBarE from "../../componant/NavBarE";
import { fireStore } from "../../auth/Firebase";
import { collection, deleteDoc, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import { Button, Table } from "react-bootstrap";
const ExpiredStageE = () => {
    const [demande, setDemande] = useState([]);
    const getDemande = async () => {
        var timestamp = Date.now();
        const q = query(collection(fireStore, "demande"),where("datedefin","<",timestamp/1000));
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
            <NavBarE />
            <div className="fs-1 fw-bold text-center p-5">
            Les Stage Terminée
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
                        <th>Demande</th>
                        <th>Telephone</th>
                        <th>Delete</th>
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
                                    <td><Button variant="danger" size="sm" onClick={() => deleteDoc(doc(fireStore, "demande", d.id))}></Button></td>
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
export default ExpiredStageE;