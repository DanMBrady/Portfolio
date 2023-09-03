import { Card } from "reactstrap"
import Logo from "../photos/newLogo.png"
import "./Projects.css"
import { Link } from "react-router-dom"
export const Projects =()=>{
    return <div>
    <div className="projectTitle"><h1>Projects</h1></div>
    
    <div className="projectDiv">
        
      <Link to={"/pop"}className="popCard">Pop Quiz</Link>
      <Link to={"/flash"}className="flashCard"><img className="flashLogo" src={Logo}></img></Link>
    </div>
    </div>
}