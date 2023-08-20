import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
export const NavigateBar =()=>{
    const navigate = useNavigate()

    return (
        <ul className="navbar">
           
            <li className="navLink">
                <Link className="navLink" to="/">About</Link>
            </li>
            <li className="navLink">
                <Link className="navLink" to="/projects">Projects</Link>
            </li>
            <li className="navLink">
                <Link className="navLink" to="/contact">Contact</Link>
            </li>
        </ul>
    )
}