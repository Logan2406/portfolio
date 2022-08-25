import {useState} from 'react';

import Link from "next/link"
import { Navbar,Container,Nav} from "react-bootstrap"

import {BiDetail} from 'react-icons/bi'

import Offcanvas from 'react-bootstrap/Offcanvas';

const  SideMenu = (props) => {

  const openWindow =(url) =>
    {
        window.open(url, "_blank","noopener,noreferrer")
    }
  return (
    <>
      <Offcanvas show={props.show} onHide={props.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <div className="d-flex flex-column align-items-center menu-items">
            <div className="" style={{width:'100%'}} onClick={()=>openWindow("https://github.com/Logan2406")}><h4>Visit my Github</h4></div>
            <div className="" style={{width:'100%'}} onClick={()=>openWindow("/jppal_resume.pdf")}><h4>See the Resume</h4></div>
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
                <Link href="#experience">$ experience:</Link>
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