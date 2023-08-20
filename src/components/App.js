import { Routes, Route } from "react-router-dom"
import './App.css';
import { NavigateBar } from "./nav/NavBar";
import { ApplicationViews } from "./views/ApplicationViews"
export const App =() =>{
return <Routes>

  <Route path="*" element={
    <>
   <NavigateBar/>
    <ApplicationViews/>
    </>
  } />
</Routes>
}

