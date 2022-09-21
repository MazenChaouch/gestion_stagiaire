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
              <NavDropdown.Item href="#action/3.1">Demande</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Demande accepté</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Demande refusée</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">stage expiré</Nav.Link>
            <Nav.Link href="#pricing">Utilisation</Nav.Link>
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