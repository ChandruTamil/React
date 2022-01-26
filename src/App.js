import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from "./lib/contextLib";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsJustify } from "react-icons/bs";
import "./App.css";
import Routes from './Routes';

function App() {
  let [isAuthenticated, userHasAuthenticated] = useState(false);
  const [sideNav, showSideNav] = useState(false);
  let linkClassSignUp = 'linkCss';
  let linkClassLogin = 'linkCss';
  const location = useLocation();
  if (location.pathname === '/signup') {
    linkClassSignUp = 'linkBold'
    linkClassLogin = 'linkCss'
  } else {
    linkClassSignUp = 'linkCss'
    linkClassLogin = 'linkBold'
  }
  isAuthenticated = localStorage.getItem('isAuth')
  function handleLogout() {
    localStorage.setItem('isAuth','');
    userHasAuthenticated(false)
  }
  function handleClose() {
    if (sideNav) {
      showSideNav(false)
    } else {
      showSideNav(true)
    }
  }
  return (
    <div>
      <div className="App container">
        <Navbar collapseOnSelect bg="light" expand="lg" className="mb-3 offcanvas-current">
          <Navbar.Brand className="font-weight-bold text-muted word-space justify-text-center">
            {isAuthenticated && !sideNav && <Button onClick={handleClose} variant="dark"><BsJustify /></Button>} <strong>Blog Channel</strong>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {isAuthenticated ? (
              <Nav>
                <Link to="/" onClick={handleLogout} className="linkCss"><Button variant="dark">SignOut</Button></Link>
              </Nav>
            ) : (
              <Nav>
                <Link to="/signup" className={linkClassSignUp}><Button variant="primary">SignUp</Button></Link>
                <Link to="/" className={linkClassLogin}><Button variant="success">LogIn</Button></Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated, sideNav,showSideNav }}>
          <Routes />
        </AppContext.Provider>
      </div>{isAuthenticated &&
        <Offcanvas show={sideNav} onHide={handleClose} placement="start" scroll="false">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ListGroup variant="flush" className="lstgrp">
              <Link onClick={handleClose} to="dashboard"><ListGroup.Item variant="success">DashBoard</ListGroup.Item></Link>
              <Link  onClick={handleClose} to="users"><ListGroup.Item variant="success">Users</ListGroup.Item></Link>
              <Link  onClick={handleClose} to="news"><ListGroup.Item variant="success">News</ListGroup.Item></Link>
              <Link  onClick={handleClose} to="map"><ListGroup.Item variant="success">Maps</ListGroup.Item></Link>
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>}
    </div>
  );
}

export default App;
