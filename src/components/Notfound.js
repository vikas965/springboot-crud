import React from 'react'
import { useNavigate } from 'react-router-dom';
const Notfound = () => {
  const Navigatetohome = useNavigate();
  return (
    
    <div>
      <center>
      <h1>404 Not Found</h1>
      <button onClick={()=>Navigatetohome('./')}> Back to Home</button>
      </center>
      
    </div>
  )
}

export default Notfound;
