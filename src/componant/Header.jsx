import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
const Header = () => {
    return (
        <div>
        <Navbar className="sticky" collapseOnSelect expand="sm" style={{backgroundColor: "#87CEFA"}}>
        <Container>
            <Navbar.Brand className="text-white fw-bold" >
                <Link to="/" className="text-black ">ENVAST_Stagiaire</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Nav.Link>
                            <Link to={'/Home'} className="text-white text-decoration-none">Accueil</Link>
                        </Nav.Link>*/}
                    </Nav>
                    <Nav>
                        <Link to={'/'}>Accueil</Link>
                    </Nav>{' '}
                    <Nav >
                        <Link to={'apropos'}>A propos</Link>
                    </Nav>{'   '}
                    <Nav >
                        <Link to={'contact'}>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
   ); }
    export default Header;
    