import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
 

  
  const {id} = useParams();

  const [users,setusers]=useState([]);

  useEffect(()=>{
    loadusers();
  },[])

  const  loadusers= async()=>{
    const result = await  axios.get("http://localhost:8080/users")
    // const resultnew = await result.json();
    setusers(result.data)
    console.log(result.data);
  }

  const deleteUser = async(id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadusers();
  }

  return (
    <div className='table-home'>
      <center>

        <h1 className="text-center"><Link to="/adduser"><button className='btn btn-primary m-3'>Add User</button></Link></h1>
      <table className="table table-bordered table-hover text-center" id="table">
  <thead className="thead-dark ">
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Username</th>
      <th scope="col">Name</th>

      <th scope="col">Email</th>

      <th scope="col">Action</th>
     
      
    </tr>
  </thead>
  <tbody>

  {
      users.map((eachitem)=>{
        const {id,username,name,email}= eachitem;
        return(
          <tr key={id}>
      <td className>{id}</td>
      <td className>{username}</td>
      <td className>{name}</td>

      <td className>{email}</td>
          <td  >
            
            <Link to={`/viewuser/${id}`}> <button className='btn btn-primary mx-3'>View</button> </Link>
            <Link to={`/edituser/${id}`}> <button className='btn btn-outline-primary mx-3'>Edit</button> </Link>
             <button onClick={()=>deleteUser(id)} className='btn btn-danger mx-3'>Delete</button> 
             
          
          </td> 
          
      
    </tr>
        )
      })
    }
    
    
  </tbody>
</table>
        
      </center>

    </div>
  )
}

export default Home
