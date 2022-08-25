import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdWork} from "react-icons/md";

const Education = () =>
{
    let elements = [
        {
            id:1,
            title:"10th Standard",
            board_name:"CBSE",
            inst_name:"Army School, Kandrori",
            date:"April 2012 - April 2013",
            icon:"school"

        },
        {
            id:1,
            title:"12th Standard",
            board_name:"CBSE",
            inst_name:"Kendriya Vidyalaya, Nangal Bhur",
            date:"April 2014 - April 2015",
            icon:"school"

        },
        {
            id:1,
            title:"B. Tech",
            board_name:"MAKAUT",
            inst_name:"B.P Poddar Institute of Mangt & Tech.",
            date:"July 2016 - July 2020",
            icon:"college"

        }
    ]











    return(
        <>
        <a name="education"></a>
             <h1 style={{textAlign:"center",marginTop:"100px",marginBottom:"100px",color:"#00f100",fontFamily:"VT323",fontSize:"80px"}}>Education Details</h1>
             
             <VerticalTimeline>
                    {elements.map((ele,i)=>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date={ele.date}
                        icon={<MdWork />}
                        key={i}
                    >
                        <h3 className="vertical-timeline-element-title">{ele.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{ele.board_name}</h4>
                        <h4 className="vertical-timeline-element-subtitle">{ele.inst_name}</h4>
                        <p>
                        {ele.desc}
                        </p>
                    </VerticalTimelineElement>)}
            </VerticalTimeline>
            <div style={{marginTop:"100px",marginBottom:"100px"}}>

            </div>
        </>
    )
}

export default Education;