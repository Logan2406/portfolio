import { Container,Tabs,Tab } from "react-bootstrap"
import LanguageSkills from "./LanguageSkills";
import FrameworkSkill from "./FrameworkSkill";
import ToolsSkill from "./ToolsSkill";

const Skills=()=>
{
    return(
        <>
        <a name="skills"></a>
        <Container className="skill-container" style={{marginBottom:"100px"}}>
         <hr style={{marginLeft:"auto",marginRight:"auto",height:"0.1rem",color:"white",width:"70%"}}/>
         <h1 style={{textAlign:"center",marginBottom:"",color:"#00f100",fontFamily:"VT323",fontSize:"80px"}}>Skills</h1>
         <hr style={{marginLeft:"auto",marginRight:"auto",height:"0.1rem",color:"white",width:"70%"}}/>
            <Tabs defaultActiveKey="lang" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="lang" title="Languages">
                   <LanguageSkills/>
                </Tab>
                <Tab eventKey="fram" title="Frameworks/Libraries">
                    <FrameworkSkill/>
                </Tab>
                <Tab eventKey="tool" title="Tools">
                    <ToolsSkill/>
                </Tab>
            </Tabs>
        </Container>
        </>
    )
}

export default Skills;