import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdWork} from "react-icons/md";

const Experience = () =>
{
    let elements = [
        {
            id:1,
            title:"Internship",
            company:"Cognizant",
            role:"Java Full Stack Developer",
            desc:"Gained some idea about the real time projects and also created a project in that period. Our team has created a Restraunt Management website using Spring Boot, HTML & CSS ",
            date:"January 2020 - May 2020",
            icon:"school",
            skils:["Java","HTML","CSS","JavaScript","Spring Boot"]

        },
        {
            id:1,
            title:"Full Time Job",
            company:"Tata Consultancy Services",
            role:"Assistant System Engineer",
            desc:"Worked in multiple real time Projects. Mainly worked with the fronted end technologies like React Js, HTML,CSS. Also got experience on Oracle Database.",
            date:"April 2021 - Present",
            icon:"school",
            skils:["React Js","Tableau","SQL"]

        }
    ]



    return(
        <>
        <a name="education"></a>
             <h1 style={{textAlign:"center",marginTop:"100px",marginBottom:"100px",color:"#00f100",fontFamily:"VT323",fontSize:"80px"}}>Experience Details</h1>
             
             <VerticalTimeline>
                    {elements.map((ele,i)=>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date={ele.date}
                        icon={<MdWork />}
                        key={i}
                    >
                        <h3 style={{textAlign:'center'}} className="vertical-timeline-element-title">{ele.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">Company : {ele.company}</h4>
                        <h4 className="vertical-timeline-element-subtitle">Role : {ele.role}</h4>
                        <p style={{marginBottom:"10px",fontFamily:"'Ubuntu Mono', monospace"}}>
                        {ele.desc}
                        </p>
                        <ul style={{display:'flex',columnGap:"20px",flexWrap:"wrap"}}>
                            {ele.skils.map((item,index)=>{return(<li key={index} style={{marginRight:"10px",fontFamily:"'Ubuntu Mono', monospace"}}>{item}</li>)})}
                        </ul>
                    </VerticalTimelineElement>)}
            </VerticalTimeline>
            <div style={{marginTop:"100px",marginBottom:"100px"}}>

            </div>
        </>
    )
}

export default Experience