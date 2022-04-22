import "../App.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <>
        <Navbar className="NavBar" bg="dark" variant="white">
            <Container>
                <Navbar.Brand>
                <Link style={{textDecoration: "none"}} to='/'><h1 className="TituloNavBar">AnormalStore</h1></Link>
                </Navbar.Brand>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                      <Link to='/category/1' className="ItemNavBar" style={{textDecoration: "none"}}>Animales</Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Link to='/category/2' className="ItemNavBar" style={{textDecoration: "none"}}>StreetPhotography</Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Link to='/category/3' className="ItemNavBar" style={{textDecoration: "none"}}>Astros</Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Link to='/category/4' className="ItemNavBar" style={{textDecoration: "none"}}>Miscelaneo</Link>
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