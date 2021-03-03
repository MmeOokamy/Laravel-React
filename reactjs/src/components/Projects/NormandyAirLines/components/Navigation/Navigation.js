import React, { Component } from "react";
import css from "./Navigation.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faUser, faSignOutAlt, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav} from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <Navbar className={css.spacer} bg="light" expand="lg">
          <Navbar.Brand href="/project/NormandyAirlines/recherche"><FontAwesomeIcon className={css.icon} icon={faSpaceShuttle} />Normandy AirLines</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/project/NormandyAirlines/recherche"><FontAwesomeIcon icon={faPlaneDeparture} /> Recherche de vol</Nav.Link>
              <Nav.Link href="/project/NormandyAirlines/profile"><FontAwesomeIcon icon={faUser} /> Profile & Settings</Nav.Link>
    
            </Nav>
            <Nav.Link href="/projects"><FontAwesomeIcon icon={faSignOutAlt} /> Retourner aux Projets</Nav.Link>
          </Navbar.Collapse>
        </Navbar>

     
    ) ;
  }
}

export default Navigation;
