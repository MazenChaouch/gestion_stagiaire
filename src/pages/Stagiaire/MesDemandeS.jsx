import NavBarS from "../../componant/NavBarS";





const MesDemandeS = () => {




    return (
/*<Button variant="warning" disabled>
<Spinner
as="span"
animation="grow"
size="sm"
role="status"
aria-hidden="true"
/>
En Attend...
</Button>*/
        <>
            <NavBarS />
            <div className="fs-1 fw-bold text-center p-5">
                Mes Demandes
            </div>
            <Table striped>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th></th>
                    <th>#</th>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>


            
        </>
    )
}
export default MesDemandeS;