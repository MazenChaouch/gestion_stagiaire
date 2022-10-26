import { Link } from "react-router-dom"
import { Navbar, Container, Nav, Button } from "react-bootstrap"
const Header = () => {
    return (
        <Navbar className="sticky" collapseOnSelect expand="sm" style={{backgroundColor: "#87CEFA"}}>
        <Container>
            <Navbar.Brand className="text-white fw-bold" >
                <Link to="/" className="text-white ">ENVAST_Stagiaire</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Nav.Link>
                            <Link to={'/Home'} className="text-white text-decoration-none">Accueil</Link>
                        </Nav.Link>*/}
                    </Nav>
                    <Nav>
                        <Link to={'/'}><Button  variant="light" className="fw-bold">Accueil</Button></Link>
                    </Nav>
                    <Nav className="mx-1">
                        <Link to={'/Apropos'}><Button  variant="light" type="submit" className="fw-bold">A propos</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
   ); }
    export default Header;
    