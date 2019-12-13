import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import resume from '../../static/WinggoTse_Resume.pdf';
// import './index.module.css';

const Header = () => {
    return (
        <Navbar expand='md'>
            <Navbar.Brand as={Link} to='/'>
                Winggo Tse
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
                <Nav className='mr-auto'>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/projects'>
                            Work + Projects
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/about'>
                            About Me
                        </Nav.Link>
                    </Nav.Item>
                {/* </Nav> */}

                {/* <Nav className='justify-content-end'> */}
                    <Nav.Item>
                        <Nav.Link as={Link} to='/photography'>
                            Photograhy
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={false} href={resume} target='_blank'>
                            Resume
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;