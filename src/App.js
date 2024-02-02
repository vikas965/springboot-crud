import React from "react";
// import Navbar from "./navbar";

import "./index.css"
// import Todolist from "./Todolist";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Notfound from "./components/Notfound";
import { Routes,Route } from "react-router-dom";
import Success from "./components/Success";
import Projects from "./components/Projects";
import FeatureProject  from "./components/FeatureProject";
import Newproject from "./components/Newproject";
import Users from "./components/Users";
import Userview from "./components/Userview";
import ViewUser from "./Users/ViewUser";
import EditUser from "./Users/EditUser";
import AddUser from "./Users/AddUser";

const App = () => {

    
    return (
        <section className="App">
            <Navbar/>
          <Routes>
            
            <Route path="/"  element={<Home/>}/>
            <Route path="/About"  element={<About/>}/>
            <Route path="/Contact"  element={<Contact/>}/>
            <Route path="/Success"  element={<Success/>}/>
            <Route path="/projects"  element={<Projects/>}>
                <Route index element={<FeatureProject/>}/>
                <Route path="featured" element={<FeatureProject/>}/>
                <Route path="new" element={<Newproject/>}/>
            </Route>
            <Route path="/users"  element={<Users/>}/>
            <Route path="/users/:Userid"  element={<Userview/>}/>


            <Route path="/viewuser/:id"  element={<ViewUser/>}></Route>
            <Route path="/edituser/:id"  element={<EditUser/>}></Route>
            <Route path="/adduser"  element={<AddUser/>}></Route>
            <Route path="*"  element={<Notfound/>}/>
          </Routes>

            
          
        </section>

    );
}





export default App