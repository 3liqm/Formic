import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>

      <div style={{display:"flex" , alignItems:'center' , justifyContent:'center'}}>
      <h4 ><Link style={{color:'red' , textDecoration:'none' , marginRight:'5px'}} to="/login">Login</Link></h4>
      <h4><Link style={{color:'red' , textDecoration:'none'}} to="/register">Sign Up</Link></h4>
      </div>
     
    </div>
  )
}

export default Home
