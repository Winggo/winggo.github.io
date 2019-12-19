import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import resume from '../../static/WinggoTse_Resume.pdf';
// import styles from './index.module.css';

const Header = () => {
    return (
        <Navbar expand='md' sticky='top'>
            <Navbar.Brand as={Link} to='/'>
                <b>Winggo Tse</b>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
                <Nav className='mr-auto'>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/work'>
                            <b>Work</b>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/blog'>
                            <b>Blog</b>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/about'>
                            <b>About</b>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} to='/photography'>
                            <b>Photograhy</b>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active={false} href={resume} target='_blank'>
                            <b>Résumé</b>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;