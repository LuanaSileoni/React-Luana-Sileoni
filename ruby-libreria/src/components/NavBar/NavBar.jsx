import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"


const NavBar = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
                <NavLink to="/">React-Bootstrap</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className={({ isActive })=> isActive ? 'btn btn-success' : 'btn btn-dark'} to="/categoria/remeras">Remeras</NavLink>
                    <NavLink className={({ isActive })=> isActive ? 'btn btn-success' : 'btn btn-dark'} to="/categoria/gorras">Gorras</NavLink>
                    {/* <NavLink to="/categoria">Gorras</NavLink> */}
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown"> */}
                    {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav>
                    <Link to='/cart' >🛒</Link>
                    
                    
                    <CartWidget />
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default NavBar
