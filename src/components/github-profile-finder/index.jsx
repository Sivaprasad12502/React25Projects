import React, { useEffect, useState } from "react";
import User from "./User";
import './style.css'

export default function GithubProfileFinder() {
    const [userName,setUserName]=useState('Sivaprasad12502')
    const [userData,setUserData]=useState(null)
    const [loading,setLoading]=useState(false)
    function handleSubmit(){
        fetchGithubUserData()

    }
    async function fetchGithubUserData() {
        setLoading(true)
        const res=await fetch(`https://api.github.com/users/${userName}`)
        const data=await res.json()
        if(data){
            setUserData(data)
            setLoading(false)
            setUserName('')
        }
        console.log(data)
        
    }
    useEffect(()=>{
        fetchGithubUserData()
    },[])
    if(loading){
        return <h1>laoding data! please Wait</h1>
    }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username...."
          value={userName}
          onChange={(event)=>setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {
        userData!==null?<User user={userData}/>:null
      }
    </div>
  );
}
