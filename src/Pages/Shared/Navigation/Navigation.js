import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../../../Image/Group 33092.png';
const Navigation = () => {
    return (
        <>
  <Navbar bg="white" sticky="top" collapseOnSelect expand="lg"  variant="dark">
    <Container>
         {/* <Navbar.Brand href="#home"><img className="logo" src={logo} alt="" /> </Navbar.Brand> */}
         <Navbar.Brand href="#home"><img   className="logo" src={logo} alt="" /> </Navbar.Brand> 
   {/*  <Navbar.Text className=" text-black">
         jerins-parlour
      </Navbar.Text> */}
   
    <Navbar.Toggle />
    
    <Navbar.Collapse className="justify-content-end">
   
    <Nav.Link className="home text-black"  as={Link}  to="/home">Home</Nav.Link>
    <Nav.Link className="home text-black"  as={Link}  to="/login">Login</Nav.Link>
      {/* {
        user.email ? <Button   onClick={logOut} className="log-out"  >Log out</Button>
        :
        <Nav.Link className="home text-white"  as={Link}  to="/login">Log in</Nav.Link>} */}
     {/*  <Nav.Link  className="home text-white" as={Link}  to="/aboutbgh">About BGH</Nav.Link>
      <Nav.Link  className="home text-white" as={Link}  to="/latestnews">Latest News</Nav.Link> */}
      {/* <Navbar.Text className=" text-white">
         {user.displayName}  
      </Navbar.Text> */}
    </Navbar.Collapse>
     
    </Container>
  </Navbar> 
</>  
    );
};

export default Navigation;