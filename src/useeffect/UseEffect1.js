import React, { useEffect, useState } from 'react'
// import { json } from 'react-router-dom';

const UseEffect1 = () => {
  // const [state,setstate] = useState(0);

  const Apiurl = "https://jsonplaceholder.typicode.com/posts";

  const [state, setstate] = useState([]);
  const [iserror, setIsError] = useState(false);
  // const [notFound, setNotFound] = useState(false);

  const fetchUserData = async (url) => {
    try {
      const response = await fetch(url);
      const listdata = await response.json(response);
      setstate(listdata);
    }
    catch (error) {
      setIsError(true);

    }

  }

  useEffect(() => {
    fetchUserData(Apiurl);
  }, [])


  return (



    <div>
      <center>
        <h1>Users Fetch Data</h1>

        {
          iserror ? <h1>Error fetching data, please check the URL</h1> :
            state.map((eachitem) => {
              const { id, title } = eachitem;
              return (
                <div key={id} className="users">
                  <p>{title}</p>
                </div>

              )
            })
        }
      </center>
    </div>
  )
}

export default UseEffect1
