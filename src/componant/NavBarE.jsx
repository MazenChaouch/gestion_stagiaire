import {Container,Nav,Navbar,NavDropdown,Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const NavBarE = () => {
  const navigate = useNavigate();
    const logout = () => {
      return(
        navigate("/entreprise/logine")

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
              <NavDropdown.Item href="CreateDemande">Crée une Demande</NavDropdown.Item>
              <NavDropdown.Item href="AcceptedDemande">Demande accepté</NavDropdown.Item>
              <NavDropdown.Item href="RefusedDemande">Demande refusée</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="ExpiredStage">stage expiré</Nav.Link>
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