import {Container,Nav,Navbar,NavDropdown,Button, NavLink} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const NavBarE = () => {
  const navigate = useNavigate();
    const logout = () => {
      return(
        navigate("/entreprise/logine")

      )
    }
    return (
    <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand ><Nav.Link href={`/`}>Gestion De Stagiaire</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <NavLink href="../entreprise/demandee">demande en attente</NavLink>
              <NavLink href="../entreprise/accepteddemandee">Demande accepté</NavLink>
              <NavLink href="../entreprise/refuseddemandee">Demande refusée</NavLink>
          </Nav>
          <Nav>
          <Button variant="light" onClick={logout}>Déconnexion</Button>{''}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBarE;