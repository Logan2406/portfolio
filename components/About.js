import { Container } from "react-bootstrap";

const About =() =>
{
    return(<>
            <a name="about"></a>
            <hr style={{marginLeft:"auto",marginRight:"auto",height:"0.1rem",color:"white",width:"70%"}}/>
            <h1 style={{textAlign:"center",marginBottom:"",color:"#00f100",fontFamily:"VT323",fontSize:"80px"}}>About Me</h1>
            <hr style={{marginLeft:"auto",marginRight:"auto",height:"0.1rem",color:"white",width:"70%"}}/>
            <Container className="d-flex full-about-container justify-content-between" fluid style={{columnGap:"15rem", boxSizing:"border-box"}}>
                <div  className="photo-class" style={{flex:1}}>
                    <img src="Photo.jpg" style={{}}/>
                </div>
               
                <div className="about-container" style={{flex:2}}>
                    <p>
                    I am a Software Engineer from India currently working at Tata Consultancy Services(TCS), having a experience of 1.5 years. Here I have achieved the experience in the technologies such as HTML, CSS, Javascript, React Js, Tableau, SQL, Python. Majorly I have worked in the Web technologies. At the time of my Internship I received a training of Java Full Stack Developer and also had to work on a project from there on I got a keen interest in Web Development and App Development.
                    </p>
                    <p>
                    Whenever I learn any technology I always create a self-project regarding the technology, for that you can visit my github profile and go thriugh the repositories. I have created some projects in React Js, React Native, Express Js. I continuously enhance my skills and always try remain up to date. I regularly update and aquire knowledge of new frameworks. I love to explore the technologies around Javascript. 
                    </p>
                    <p>
                        Here are a few technologies that I am currently working on 
                        <ul className="about-ul">
                            <li>$ React JS</li>
                            <li>$ React Native</li>
                            <li>$ Spring Boot</li>
                        </ul>
                    </p>
               </div>
           </Container>
           </>
    )
}

export default About;