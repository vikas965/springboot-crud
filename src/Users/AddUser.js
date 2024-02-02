import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AddUser = () => {

  let navigate = useNavigate();

  const [user ,setuser]= useState({
    name:"",
    username:"",
    email:""
  })

  const ChangeInput = (e)=>{
    setuser({
      ...user,
      [e.target.name]:e.target.value
    })

  }


  const onSubmit= async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user",user)
    navigate("/")
}
  const {name,username,email} = user;
  const Navigatetohome = useNavigate();
  return (
    <div>
        <form action="" onSubmit={onSubmit}>
          <div className="form-inputs-add">
            <h1>Add User</h1>
          <input name='name' value={name} type="text" placeholder='Name' onChange={ChangeInput} />
          <input name='username' value={username} type="text" placeholder='Username ' onChange={ChangeInput}/>
          <input name='email' value={email} type="email" placeholder='Email' onChange={ChangeInput} />
          <button onClick={()=>Navigatetohome('../')} className="btn btn-danger">Cancel</button>
          <button className='btn btn-primary'>Submit</button>
          </div>
        </form>
      
    </div>
  )
}

export default AddUser
