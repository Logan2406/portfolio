import SkillsContainer from "./SkillsContainer"

const ToolsSkill = () =>
{
    let tools = [
        {
            name:"Postman",
            img:"postman-icon.png",
            prof:"80%",
            date:"2018 - present"
        },
        {
            name:"Eclipse",
            img:"eclipse-icon.png",
            prof:"80%",
            date:"2018 - present"
        }, 
        {
            name:"VS Code",
            img:"vs_code.jpg",
            prof:"80%",
            date:"2018 - present"
        }, 
        {
            name:"Tableua",
            img:"tableau.png",
            prof:"80%",
            date:"2018 - present"
        },
    ]


    return(
        <div className="d-flex justify-content-center flex-wrap" style={{columnGap:"40px",rowGap:"40px"}}>
            {
                tools.map((ele,i)=>
                {
                    return(
                        <SkillsContainer key={i} element={ele}></SkillsContainer>
                    )
                })
            }
        </div>
    )
}
export default ToolsSkill;