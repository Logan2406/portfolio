import SkillsContainer from "./SkillsContainer";

const FrameworkSkill = () =>
{
    let frame=[
        {
            name:"React JS",
            img:"react-icon.png",
            prof:"70%",
            date:"2018 - present"
        },
        {
            name:"React Native",
            img:"react_native.png",
            prof:"70%",
            date:"2018 - present"
        },
        {
            name:"Spring Boot",
            img:"springboot-icon.png",
            prof:"70%",
            date:"2018 - present"
        },
        {
            name:"Bootstrap",
            img:"bootstrap-icon.jpg",
            prof:"70%",
            date:"2018 - present"
        },
        {
            name:"Redux",
            img:"redux-icon.png",
            prof:"70%",
            date:"2018 - present"
        },
        {
            name:"MySql",
            img:"mysql-icon.png",
            prof:"70%",
            date:"2018 - present"
        },
    ]


    return(
        <div className="d-flex justify-content-center flex-wrap" style={{columnGap:"40px",rowGap:"40px"}}>
            {
                frame.map((ele,i)=>
                {
                    return(
                        <SkillsContainer key={i} element={ele}></SkillsContainer>
                    )
                })
            }
        </div>
    )
}

export default FrameworkSkill;