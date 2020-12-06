import React from 'react';
import { Container, Navbar, Collapse, Nav } from 'reactstrap';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBook, faGraduationCap, faHome } from '@fortawesome/free-solid-svg-icons';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ({ isAuth, name, logoutHandler, role, cartItemsNumber, notifications, light = false, font }) => {
    return (
        <Navbar className="pb-4" dark={!light} light={light} expand>
            <Container>
                <Collapse navbar>
                    <Nav className="d-block d-lg-flex align-items-center" navbar>
                        <NavigationItem font={font} icon={faHome} href="/">Home</NavigationItem>
                        <NavigationItem font={font} icon={faUser} href="/about-us">About Us</NavigationItem>
                        <NavigationItem font={font} icon={faGraduationCap} href="/scholar">Scholar</NavigationItem>
                        <NavigationItem font={font} icon={faBook} href="/academic">Academic</NavigationItem>
                        <NavigationItem font={font} icon={faEnvelope} href="/contact">Contact</NavigationItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default navigationItems;