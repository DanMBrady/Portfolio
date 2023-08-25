import photo from "../photos/dan.jpg"
import "./About.css"
export const About =()=>{
    return <div className="aboutDiv">
        <div className="leftDivAbout">
            <div>
            <h1 className="aboutName">Dan Brady</h1>
            <section className="aboutTitle">Full Stack Web Developer</section>
            </div>
        </div>
       <div className="rightDivAbout">
        <img className="profilePhoto" src={photo}></img>
        </div>
    </div>
}