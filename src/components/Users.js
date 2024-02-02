import React from 'react'
import { Userdata } from './Userdata';
import { Link } from 'react-router-dom';
const Users = () => {
  return (
    <div>
      <center>
        <h3>Users</h3>

        {
            Userdata.map((eachUser)=>{
                const {id,name,username,email,phone} = eachUser;
                return(
                   <Link to={`/users/${id}`} key={id} >
                    <div  className="user-card" >
                        <hr />
                        <h2>{name}</h2>
                        <h3>{username}</h3>
                        <h4>{email}</h4>
                        <h5>{phone}</h5>
                        <hr />
                    </div>
                    </Link>
                );
            })
        }
      </center>
    </div>
  )
}

export default Users
