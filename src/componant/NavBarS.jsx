import {Container,Nav,Navbar,NavDropdown,Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const NavBarS = () => {
    const navigate = useNavigate();
    const logout = () => {
      return(
        navigate("/stagiaire/logins")

      )
    } 
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >Gestion De Stagiaire</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Demandes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="../stagiaire/demandes">Faire une Demande</NavDropdown.Item>
              <NavDropdown.Item href="../stagiaire/accepteddemandes">Demande accepté</NavDropdown.Item>
              <NavDropdown.Item href="../stagiaire/refuseddemandes">Demande refusée</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="../stagiaire/endedstages">Stage terminée</Nav.Link>
          </Nav>
          <Nav>
          <Button variant="light" onClick={logout}>Déconnexion</Button>{''}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBarS;