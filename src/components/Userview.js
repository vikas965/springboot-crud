import React from 'react'
import { Userdata } from './Userdata';
import {useParams} from 'react-router-dom'
const Userview = () => {
    const {Userid} = useParams();
    console.log(Userid);
    
    // const userdetails = useParams();

    // console.log(userdetails);
    
    const userviewdata =  Userdata.find((eachitem)=>
            eachitem.id=Userid
    )

    const {name,username,phone,website,email}=userviewdata;

    console.log(userviewdata);
//    console.log(Userid);
  return (

<div className="userviewdetails">
    <center>
    <h2>{name}</h2>
   <h2>{username}</h2>
   <h2>{phone}</h2>
   <h2>{website}</h2>
   <h2>{email}</h2>
    </center>
   
   </div>
        );
    }
    
   
  

export default Userview;
