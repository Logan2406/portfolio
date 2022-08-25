import SkillsContainer from "./SkillsContainer";
const LanguageSkills = () =>
{
    let langs =[
        {
            name:"Java",
            img:"java-icon.png",
            prof:90,
            date:"2017 - present"
        },
        {
            name:"JavaScript",
            img:"javascript-icon.png",
            prof:80,
            date:"2020 - present"
        },
        {
            name:"HTML",
            img:"html-icon.png",
            prof:90,
            date:"2019 - present"
        },
        {
            name:"CSS",
            img:"css-icon.png",
            prof:60,
            date:"2020 - present"
        },
        {
            name:"SQL",
            img:"sql-icon.png",
            prof:80,
            date:"2018 - present"
        },
    ]

    return(
        <div className="d-flex justify-content-center flex-wrap" style={{columnGap:"40px",rowGap:"40px"}}>
        {
            langs.map((ele,i)=>
            {
                return(
                    <SkillsContainer key={i} element={ele}></SkillsContainer>
                )
            })
        }
        </div>
    )

}

export default LanguageSkills;