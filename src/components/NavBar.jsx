import { Nav, Col, Container, Image, Button } from 'react-bootstrap'
import { HouseDoorFill } from 'react-bootstrap-icons'
import Logo from '../assets/logo/logo.png'

const NavBar = () =>{
    return(
        <Col className='col col-2'>
            <Nav className='navbar navbar-expand-md fixed-left justify-content-between' id='sidebar'>
                <Container className='container flex-column align-items-start'>
                    <Nav.Link className='navbar-brand' href='#'>
                        {/* <Image src={Logo} /> */}
                    </Nav.Link>
                    <Button className='navbar-toggle' type='button' data-toggle='collapse'>
                        <span className='navbar-toggler-collapse'></span>
                    </Button>
                    <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                        <div className='navbar-nav'>
                            <ul>
                                <li>
                                    <a className='nav-item nav-link d-flex align-items-center' href="#">
                                        <HouseDoorFill />&nbsp; Your Library
                                    </a>
                                </li>
                                <li>
                                    <div className='input-group mt-3'>
                                        <input type="text" className='form-control' placeholder='Search' aria-label='Search' />
                                        <div className='input-group-append'>
                                            <Button className='btn btn-outline-secondary btn-sm h-100'>Go</Button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='nav-btn'>
                        <Button classname='btn singup-btn' type='button'>Sing Up</Button>
                        <Button classname='btn login-btn' type='button'>Login</Button>
                    </div>
                </Container>
            </Nav>
        </Col>
    )
}

export default NavBar
