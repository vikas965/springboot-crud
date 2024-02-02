import React from "react";
import Card from "./Card";


import { listdata } from "./Data";

const Section1 = () =>{
  
    return(
<div className="card-container">
    {
    listdata.map((eachitem)=>{

        const {heading,imgaddress, desc}=eachitem;
        return(

 <Card header={heading} imgurl={imgaddress} desc={desc} />
        );

    })}


 </div> );
 
}
       

       
    




export default Section1;