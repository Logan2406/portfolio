import Progress from 'react-bootstrap/ProgressBar';
import { Row,Col } from 'react-bootstrap';


const SkillsContainer = (props) =>
{
    return(
        <div className="d-flex flex-column align-items-start skill-cont" style={{color:"#00f100",width:"20%"}}>
        <div className="term-bar d-flex justify-content-start" style={{columnGap:"2px"}}>
            <div className="fakeButtons" style={{background:"red"}}></div>
            <div className="fakeButtons" style={{background:"yellow"}}></div>
            <div className="fakeButtons" style={{background:"green"}}></div>
        </div>
        <div className="d-flex skill-det flex-column align-items-center" style={{padding:"20px",marginLeft:"auto",marginRight:"auto"}}>
          <h3 style={{}}>{props.element.name}</h3>
          <div className="skill-img-div d-flex justify-content-center">
            <img className="skill-image" src={props.element.img} style={{width:"100%",borderRadius:"20px"}}/>
          </div>
          
           
          <Progress style={{width:"80%",margin:"1.5rem",height:"1.5rem"}}striped variant="success" now={props.element.prof} label={`${props.element.prof}%`} active="true"/>
           
      
          <p style={{textAlign:'center'}}>
            {props.element.date}
          </p>
          
        </div>
      </div>
    )
}
export default SkillsContainer;