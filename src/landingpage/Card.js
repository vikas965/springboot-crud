import React from "react";


const Card = (props) =>{

    const {header , imgurl , desc } = props
    return(
        <>
        <div class="card" style={{width: "18rem"}}>
  <img src={imgurl} class="card-img-top" alt="..." style={{width:"18rem" ,height:"250px"}}/>
  <div class="card-body">
    <h5 class="card-title">{header}</h5>
    <p class="card-text">{desc}</p>
    <a href="" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </>
    )
}


export default Card;