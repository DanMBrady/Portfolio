import { useNavigate } from "react-router-dom"
import photo from "../photos/dan.jpg"
import "./About.css"
export const About =()=>{
    const navigate = useNavigate()
    return <div>
    <div className="aboutDiv">
        <div className="leftDivAbout">
            <div>
                <section className="aboutTitle">Hi, my name is</section>
            <h1 className="aboutName">Dan Brady</h1>
            <section className="aboutTitle">I'm A Full Stack Web Developer From Upstate NY</section>
            <button className="contactButton" onClick={()=>navigate('/contact')}>Get In Touch</button>
            </div>
        </div>
       <div className="rightDivAbout">
        <img className="profilePhoto" src={photo}></img>
        </div>
    </div>
    <div className="bottomAbout">
        <div className="aboutSection">
    <h1 className="aboutMe">About Me</h1>
    <section>Hello, my name is Dan Brady and I'm a full stack software developer from Uptate New York. I am experienced with
        React Js, C# and Sql Server and I'm passionate about music, reading and software development.  </section>
        </div>
    </div>
    </div>
}