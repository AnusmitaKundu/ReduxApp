import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Hamburger from './Offcanvas';


const Header = () => {
   
    return (
        
        <>
            <Navbar bg="light" data-bs-theme="light" fixed="top">
                <Container>
                <Hamburger/>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    
                </Container>
            </Navbar>
        </>
    );
}

export default Header







