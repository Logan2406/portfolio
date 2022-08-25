import { Container } from "react-bootstrap";
import Link from "next/link"
import {BsLinkedin} from "react-icons/bs"
import {SiGmail} from "react-icons/si"
import {BsGithub} from "react-icons/bs"
const ReadMyBlog =() =>
{
    return(
        <>
            <Container className="d-flex justify-content-between read-me" style={{flexWrap:'wrap',columnGap:"20%"}}>
                <img src="./read-blog.png" style={{height:"600px",flex:1}}/>
                <div className="d-flex flex-column" style={{color:"#00f100",flex:1,alignSelf:'center'}}>
                    

                    <h1 className="readme-heading" style={{textAlign:"center",fontFamily:"'VT323', monospace"}}>How to Reach me !</h1>
                    <div className="reach-links" style={{display:"flex",flexDirection:'column',marginTop:"30px"}}>
                        <p style={{fontFamily:"'Ubuntu Mono', monospace"}}>
                            <BsLinkedin/> LinkedIn Profile : <a href="https://www.linkedin.com/in/jyoti-pravo-pal-952550243/" target="_blank">Jyoti Pravo Pal</a>
                        </p>
                        <p style={{fontFamily:"'Ubuntu Mono', monospace"}}>
                            <SiGmail/> Mail me at : <a href="mailto: jyotipravopal@gmail.com">jyotipravopal@gmail.com</a>
                        </p>
                        <p style={{fontFamily:"'Ubuntu Mono', monospace"}}>
                            <BsGithub/> GitHub Profile : <a href="https://github.com/Logan2406"  target="_blank">Logan2406</a>
                        </p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ReadMyBlog;