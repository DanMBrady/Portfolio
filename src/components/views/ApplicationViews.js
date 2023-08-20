import { Outlet, Route, Routes } from "react-router-dom"
import { About } from "../pages/About"
import { Conatct } from "../pages/Contact"
import { Projects } from "../pages/Projects"

export const ApplicationViews =()=>{
    return (
        <Routes>
            <Route path="/" element={<About/>}></Route>

            <Route path ="/projects" element={ <Projects/>}></Route>
            <Route path ="/contact" element={ <Conatct/>}></Route>
        </Routes>
    )
}