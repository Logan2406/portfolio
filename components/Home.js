import { setConfig } from 'next/config';
import {useState} from 'react';
import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

const HomePage=() =>
{

    const [myconfig,setMyConfig] = useState(["I build apps for Web","I build apps for Mobile","I am interested in Web Development","I likes solving problems"]);
    const [mybio,setMyBio] = useState("I am a Software Developer and Web Developer. I make Projects to learn new things and love to enhance myself with different Technologies. ");
    return(
    <Container className="container-home-fluid" fluid style={{boxSizing:"border-box"}}>
      <div className="d-flex justify-content-around align-items-center home-all-cont" style={{height:"100%",width:"100%",paddingLeft:"100px",paddingRight:"100px"}}>
            <div className="d-flex flex-column align-items-start home-cont" style={{color:"#00f100",width:"40%"}}>
              <div className="term-bar d-flex justify-content-start"style={{columnGap:"2px"}}>
                  <div className="fakeButtons" style={{background:"red"}}></div>
                  <div className="fakeButtons" style={{background:"yellow"}}></div>
                  <div className="fakeButtons" style={{background:"green"}}></div>
                 
              </div>
              <div className="d-flex home-details flex-column" style={{padding:"20px"}}>
                <h3 style={{}}>Hi, my name is</h3>
                <h1 style={{}}>Jyoti Pravo Pal.</h1>
                <h1 style={{}}><Typewriter
                    options={{
                      strings: myconfig,
                      autoStart: true,
                      loop: true,
                    }}
                  /></h1>
                <p style={{}}>
                {mybio}
                </p>
                
              </div>
            </div>
            <img className="home-img" src="./web-dev.png" style={{}}/>
      </div>
      </Container>
    )
}
export default HomePage;