import { Outlet, Route, Routes } from "react-router-dom"
import { About } from "../pages/About"
import { Conatct } from "../pages/Contact"
import { Projects } from "../pages/Projects"
import { Pop } from "../pages/Pop"
import { Flash } from "../pages/Flash"

export const ApplicationViews =()=>{
    return (
        <Routes>
            <Route path="/" element={<About/>}></Route>

            <Route path ="/projects" element={ <Projects/>}></Route>
            <Route path ="/contact" element={ <Conatct/>}></Route>
            <Route path ="/pop" element={ <Pop/>}></Route>
            <Route path ="/flash" element={ <Flash/>}></Route>
        </Routes>
    )
}