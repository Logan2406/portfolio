const SkillsContainer = (props) =>
{
    return(
        <div className="d-flex flex-column align-items-start skill-cont" style={{color:"#00f100",width:"20%"}}>
        <div className="term-bar d-flex justify-content-start" style={{columnGap:"2px"}}>
            <div className="fakeButtons" style={{background:"red"}}></div>
            <div className="fakeButtons" style={{background:"yellow"}}></div>
            <div className="fakeButtons" style={{background:"green"}}></div>
        </div>
        <div className="d-flex skill-det flex-column align-items-center" style={{padding:"20px"}}>
          <h3 style={{}}>{props.element.name}</h3>
          <div className="skill-img-div d-flex justify-content-center">
            <img className="skill-image" src={props.element.img} style={{width:"100%",borderRadius:"20px"}}/>
          </div>
          <p style={{marginTop:"10px"}}>
          Proficency : {props.element.prof}
          </p>
          <p style={{textAlign:'center'}}>
          Experiance : {props.element.date}
          </p>
          
        </div>
      </div>
    )
}
export default SkillsContainer;