import {Container,Nav,Navbar,Button} from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";

const NavBarS = () => {
    const navigate = useNavigate();
    let { stagiaireId } = useParams();
    const logout = () => {
      navigate("/stagiaire/logins")
    } 
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >Gestion De Stagiaire</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link href={`../mesdemandes/${stagiaireId}`}>Mes Demande</Nav.Link>
              <Nav.Link href={`../demandes/${stagiaireId}`}>Faire une Demande</Nav.Link>
              <Nav.Link href={`../endedstages/${stagiaireId}`}>Stage terminée</Nav.Link>
          </Nav>
          <Nav>
          <Button variant="light" onClick={logout}>Déconnexion</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBarS;