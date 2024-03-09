import React from "react";
import "./index.css"
import ViewUser from "./Users/ViewUser";
import EditUser from "./Users/EditUser";
import AddUser from "./Users/AddUser";
// import Home from "./Users/Home";
import { Route,Routes } from "react-router-dom";
import Login from "./Users/Login";
import AddNotes from "./Users/AddNotes";
import Shownotes from "./Users/Shownotes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditNotes from "./Users/EditNotes";
import Showdata from "./Users/Showdata";
import Visuals from "./Users/Visuals";
const App = () => {

    
    return (
        <section className="App">


<ToastContainer />
          <Routes>            
            <Route path="/"  element={<Shownotes/>}/>
           
            <Route path="/viewuser/:id"  element={<ViewUser/>}></Route>
            <Route path="/edituser/:id"  element={<EditUser/>}></Route>
            <Route path="/editnotes/:id"  element={<EditNotes/>}></Route>
            <Route path="/register"  element={<AddUser/>}></Route>
            <Route path="/login"  element={<Login/>}></Route>
            <Route path="/addnotes"  element={<AddNotes/>}></Route>
            {/* <Route path="/shownotes"  element={<Shownotes/>}></Route> */}
            <Route path="/showdata"  element={<Showdata/>}></Route>
            <Route path="/visuals"  element={<Visuals/>}></Route>
            {/* <Route path="*"  element={<Notfound/>}/> */}
          </Routes>

            
          
        </section>

    );
}





export default App