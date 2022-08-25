import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import {Context} from '../App'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'

function Header() {

  const context = useContext(Context)
  const handleClicked = () => {
    context.setKategori("");
  }
  const handleChange = (e) => {
    context.setKategori(e.target.value)
  }
 
  return (
    <Navbar className='navbar-container py-4' expand="lg">
      <Container fluid>
        <Navbar.Brand className='brand'><Link className='brand' to="/"><span>İlhanMarket</span></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="topbar-mid" id="navbarScroll">
          <Nav 
            navbarScroll
          >
            
            <Form  className="d-flex topbar-input">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button variant="outline-secondary">Search</Button>
            
          </Form>
          <div className="topbar-right">
              <Link className='header-navigate' to="/favoriler"><Button variant="outline-danger">Favoriler</Button></Link>
              <Link className='header-navigate' to="/sepetim"><Button variant="outline-success">Sepetim</Button></Link>
          </div>
          </Nav>

              
        </Navbar.Collapse>
           
      </Container>
    </Navbar>
  );
}

export default Header;

/*
<Navbar className='navbar-container py-4'  expand="lg">
      <Container fluid>
        <Navbar.Brand className='brand'><Link className='brand' to="/"><span>İlhanMarket</span></Link></Navbar.Brand>
        
            <Button variant="outline-secondary">Search</Button>
            
        <Navbar.Collapse className='topbar-mid-container' >
          <Nav
            className="me-auto my-2 my-lg-0 topbar-mid"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            
            <Form className="d-flex">
            
          </Form>
            
          </Nav>

                
        </Navbar.Collapse>

          <div className="header-buttons">
            
              <Link className='header-navigate' to="/favoriler"><Button variant="outline-danger">Favoriler</Button></Link>
              <Link className='header-navigate' to="/sepetim"><Button variant="outline-success">Sepetim</Button></Link>
                
          </div>

      </Container>
    </Navbar>
*/