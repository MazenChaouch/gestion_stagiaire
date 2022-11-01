import { Navbar, Container, Nav } from "react-bootstrap"
const Header = () => {
    return (
        <div>
        <Navbar className="sticky" collapseOnSelect expand="sm" >
        <Container>
            <Navbar.Brand className="text-white fw-bold" >
                <Nav className="text-white d-block">ENVAST_Stagiaire</Nav>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/" className="text-white d-block">Accueil</Nav.Link>
                    </Nav>{' '}
                    <Nav >
                        <Nav.Link href="/contact" className="text-white d-block">Contact</Nav.Link>
                    </Nav>
                    <Nav >
                        <Nav.Link href="/apropos" className="text-white d-block">A propos</Nav.Link>
                    </Nav>{'   '}
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
   ); }
    export default Header;
    