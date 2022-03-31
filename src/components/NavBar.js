import "../App.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <>
        <Navbar bg="dark" variant="white">
            <Container>
                <Navbar.Brand href="#home">
                    <h1 className="TituloNavBar">AnormalStore</h1>
                </Navbar.Brand>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                      <Nav.Link className="ItemNavBar" href="/home">Tienda</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="ItemNavBar" href="/home">Acerca De</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <CartWidget/>
                    </Nav.Item>
                </Nav>
            </Container>
         </Navbar>
      </>
    );
  }

export default NavBar;