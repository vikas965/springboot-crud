import React from 'react'
import { Link,Outlet } from 'react-router-dom';

const Projects = () => {
  return (
    <div>

        


        <center>
        <h2>Projects</h2> 
        <br />
        <Link to="/projects/featured">Featured Projects</Link>
<br /><br />
<Link to="/projects/new">New Projects</Link>
        </center>

<Outlet/>
      
    </div>
  )
}

export default Projects;
