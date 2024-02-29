import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Hamburger from './Offcanvas';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
const Header = () => {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light" fixed="top">
                <Container>
                <Hamburger/>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        
                            
                            <Col xs="auto" className="d-flex justify-content-end">
                                <Button disabled={true}>Your Balance : 0</Button>
                            </Col>
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header







