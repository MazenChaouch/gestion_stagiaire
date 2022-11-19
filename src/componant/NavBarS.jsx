import {Container,Nav,Navbar,Button} from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";

const NavBarS = () => {
    const navigate = useNavigate();
    let { stagiaireId } = useParams();
    const logout = () => {
      localStorage.removeItem("user")
      navigate("/stagiaire/logins")
    } 
    return (
    <Navbar className='navbar' collapseOnSelect expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand ><Nav.Link href={`/`}>Gestion De Stagiaire</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link href={`../mesdemandes/${stagiaireId}`}>Mes Demande</Nav.Link>
              <Nav.Link href={`../demandes/${stagiaireId}`}>Faire une Demande</Nav.Link>
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