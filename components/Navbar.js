import {useState} from 'react';

import Link from "next/link"
import { Navbar,Container,Nav} from "react-bootstrap"

import {BiDetail} from 'react-icons/bi'

import Offcanvas from 'react-bootstrap/Offcanvas';

const  SideMenu = (props) => {
  return (
    <>
      <Offcanvas show={props.show} onHide={props.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <div className="d-flex flex-column align-items-center menu-items">
            <h4>Eduction</h4>
            <h4>Skills</h4>
            <h4>Experience</h4>
            <h4>Projects</h4>
            <h4>Resume</h4>
         </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



const NavBar =() =>
{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const openWindow =() =>
    {
        window.open("/jppal_resume.pdf", "_blank","noopener,noreferrer")
    }


    return(
       <nav className="navbar" style={{height:"80px"}}>
           <div>
            <img src="./jyoti.png" style={{height:"60px"}}/>
           </div>
           <div className="navLinks">
                <Link href="#about">$ about:</Link>
                <Link href="#education">$ education:</Link>
                <Link href="#skills">$ skills:</Link>
                <Link href="#experice">$ experiance:</Link>
                <Link href="#project">$ project:</Link>
                <div className="resume" onClick={openWindow}><h4>resume</h4></div>
           </div>
           <div className="ham-icon">
                <BiDetail onClick={()=>handleShow()} className="ham-icon" style={{color:"#00f100",fontSize:"50px"}}/>
           </div>
           <SideMenu show={show} handleClose={handleClose}/>
       </nav>
    )
}

export default NavBar