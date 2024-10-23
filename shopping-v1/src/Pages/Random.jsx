import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Random = () => {
    const[user, setUserData]=useState(null)
    const URL="https://randomuser.me/api/?results=1"
    function fetchAPI(){
    axios.get(URL)
  /* .then(function (response) {
    // handle success
    console.log(response.data.results[0]);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  }) */
    .then(response => setUserData(response.data.results[0]))
    .catch(error => console.log("error", error))
}
console.log(user);
useEffect(()=>{
    fetchAPI();
},[])
    
  
  return (
    <div>
        <h1>Random User:</h1><br></br>
        <button onClick={fetchAPI}>Click here</button>
        { user ? (
            <div>
                <p>{user.name.first}</p>
                <p>{user.name.last}</p>
            </div>
        ):(
            <div>
                <p>loading </p>

            </div>
        )}
    </div>
  )
}

export default Random