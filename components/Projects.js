import { Container } from "react-bootstrap"
import {AiFillGithub} from 'react-icons/ai';

const Project =({item}) =>
{
    return(
        <>
        <div className="d-flex flex-column align-items-start skill-cont" style={{color:"#00f100",width:"40%",padding:'10px'}}>
        <div className="term-bar d-flex justify-content-start" style={{columnGap:"2px"}}>
            <div class="fakeButtons" style={{background:"red"}}></div>
            <div class="fakeButtons" style={{background:"yellow"}}></div>
            <div class="fakeButtons" style={{background:"green"}}></div>
        </div>
        <div className="d-flex project-skill-det flex-column align-items-center" style={{padding:"20px"}}>
          <h3 style={{textAlign:"center"}}>{item.title}</h3>
          <div style={{border:"2px solid",padding:"10px"}}>
            <p>{item.desc}</p>
            <br/>
            <h5>Technologies Used</h5>
            <ul style={{display:'flex',columnGap:"20px",flexWrap:"wrap"}}>
                            {item.technoligies.map((item,index)=>{return(<li style={{marginRight:"10px",fontFamily:"'Ubuntu Mono', monospace"}}>{item}</li>)})}
            </ul>
          </div>
          
        </div>
            <div style={{display:'flex',width:"100%",justifyContent:'center'}}>
                <AiFillGithub style={{fontSize:'30px'}}/><a href={item.github_link}  style={{fontSize:'20px',marginLeft:'10px',textDecoration:'none',color:"#00f100"}}>Github Repo</a>
            </div>
      </div>
      </>
    )
}



const Projects = () =>
{
    let projects = [
        {   id:1,
            title:"Corona Tracker and Predictor",
            desc:"This project is made for my B.Tech Final Year Project. Our team has created a website using HTML, CSS and Javascript in the frontend and for the backend we have chosen Java Spring Boot. The project uses the concept of Data Visualization, Web Scrapping and a little Machine Learnig for the prediction part. You can check the github repo for further info.",
            github_link:"github link",
            technoligies:["Spring Boot","HTML","CSS","JavaScript"]
        },
        {   id:1,
            title:"NewCoffeeHouse",
            desc:"This is Restraunt Management webiste created using React Js as the frontend and Express Js as the backend, also used the Mysql for the Database. I have applied the Authentication part for users and as well as for the admin. Applied the e-billing, where the bill will be send to the user over sms. Users can check the vacancy of the tables, order according to their choice from inside the restraunt and the billing system is physical. Further you can check the github repo and I have also deployed the website on heroku.",
            github_link:"github link",
            technoligies:["Express JS","React JS","MySQL"]
        },
        {   id:1,
            title:"MyCuteDemoClock",
            desc:"This project is the first one for me to create nay library package. This package is created solely using React Js and uploaded to npm. It has the functionality of showing the dynamic hours, minutes, seconds and the Date with day of the week in a digital form.I kept the design as minimal as I can. The clock is responsive and can be attached to any website by just isntalling it through npm. I have provided the github repo, there you can find the image and and instrutions, about how to use it.",
            github_link:"github link",
            technoligies:["React JS"]
        },
        {   id:1,
            title:"Local BookStore",
            desc:"This is a online Library Management App. This project has two parts, one is created using React Native for the users(front end) which is a mobile application. The other one is for the admin section created using React and Electron Js, this is a desktop application. The backend of the project is common and created using Express JS and database is Mysql. Here I have also applied the authentication and authorization for the users.",
            github_link:"github link",
            technoligies:["React Native","React JS","Electron JS","Express JS","MySQL"]
        },

    ]

    return(
        <>
         <h1 style={{textAlign:"center",marginTop:"100px",marginBottom:"100px",color:"#00f100",fontFamily:"VT323",fontSize:"80px"}}>Projects</h1>
         <Container className="projects-container skill-container d-flex justify-content-center flex-wrap" style={{marginBottom:"100px",columnGap:"40px",rowGap:"40px"}}>
            {projects.map((ele,index)=>
            {
                return(<Project item={ele}/>)
            })}
        </Container>
        </>
    )
}

export default Projects 