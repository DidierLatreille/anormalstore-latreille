import "../App.css";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <>
        <Navbar className="NavBar" bg="dark" variant="white">
            <Container id="NavBarCont">
                <Navbar.Brand>
                <Link style={{textDecoration: "none"}} to='/'><h1 id="TituloNavBar">AnormalStore</h1></Link>
                </Navbar.Brand>
                <Nav className="justify-content-center" activeKey="/home">
                  <Nav.Item className="ItemNavBarFull">
                      <Link to='/category/animales' className="ItemNavBar" style={{textDecoration: "none"}}>Animales</Link>
                    </Nav.Item>
                    <Nav.Item className="ItemNavBarFull">
                      <Link to='/category/streetPhotography' className="ItemNavBar" style={{textDecoration: "none"}}>StreetPhotography</Link>
                    </Nav.Item>
                    <Nav.Item className="ItemNavBarFull">
                      <Link to='/category/astros' className="ItemNavBar" style={{textDecoration: "none"}}>Astros</Link>
                    </Nav.Item>
                    <Nav.Item className="ItemNavBarFull">
                      <Link to='/category/miscelaneo' className="ItemNavBar" style={{textDecoration: "none"}}>Miscelaneo</Link>
                    </Nav.Item>

                    <NavDropdown title="Categorias" id="responsiveNav">
                        <Nav.Item>
                          <Link to='/category/animales' className="ItemNavBar" style={{textDecoration: "none"}}>Animales</Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Link to='/category/streetPhotography' className="ItemNavBar" style={{textDecoration: "none"}}>StreetPhotography</Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Link to='/category/astros' className="ItemNavBar" style={{textDecoration: "none"}}>Astros</Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Link to='/category/miscelaneo' className="ItemNavBar" style={{textDecoration: "none"}}>Miscelaneo</Link>
                        </Nav.Item>
                    </NavDropdown>
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