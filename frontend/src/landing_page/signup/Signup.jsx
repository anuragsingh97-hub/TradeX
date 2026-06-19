import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {notifyError,notifySuccess} from "../utils/utils"
import Login from '../login/Login'
function Signup() {
name
 const [formData,setformData]=useState({
    username:"",
    email:"",
    password:""
  })
 const handleLogin=(e)=>{
    setformData({...formData,[e.target.name]:e.target.value});
    
  }
  
  const handleSignup= async (e)=>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
       return  notifyError("Please fill in all fields");
         }
         try{
          const url="http://localhost:3002/signup";
          const response= await fetch(url,{
            method:"POST",
            headers:{ "Content-Type":"application/json"},
            body:JSON.stringify(formData)
          });
          const data= await response.json();
         
          if(data.success){
            notifySuccess("Signup successful! Please login.");
            setTimeout(()=>{
              window.location.href="/login";
            }, 1000);
          }
          else if(data.error){
            notifyError(data.error.details[0].message || "Signup failed. Please try again.");
          }
          else{
            notifyError(data.message || "Signup failed. Please try again.");
          }
        } catch(error){
          notifyError(error.message || "An error occurred during signup");
        };
  }
    

  return (
    <div className='signup mt-5 mb-5 container bg-light p-5 rounded'>
      <h3>Signup Page</h3>
      <form className='signup-form' onSubmit={handleSignup}>
       <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
    <input type="text"  autoFocus className="form-control" id="exampleFormControlInput1" name="username" value={formData.username} onChange={handleLogin} placeholder="Enter your name"/>
     </div>
       <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={formData.email} onChange={handleLogin} placeholder="name@example.com"/>
     </div>
      <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleFormControlInput1" name="password" value={formData.password} onChange={handleLogin} placeholder="Enter your password"/>
     </div> 
      <button className='btn btn-primary'>Signup</button>
      </form>
      <ToastContainer/>
       <p className='mt-3'>Already have an account? <Link to="/login">Login</Link></p>
    </div>

  )
}

export default Signup