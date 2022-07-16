import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ReactNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link href = "/home">Home</Nav.Link>
            <Nav.Link href = "/about">About</Nav.Link>
            <Nav.Link href = "/contect">Contect Us</Nav.Link>
          
        
          </Nav>
        </Container>
      </Navbar>
      

    </>
  );
}

export default ReactNavbar;
