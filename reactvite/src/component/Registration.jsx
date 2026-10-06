import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



function Registration(regData) {
  const [name, setName]=useState();
  const [email, setEmail]=useState();
  const [password, setPassword]=useState();

  function regiterUser(e){
    e.preventDefault();
    regData={name, email, password}
    // alert(name+" " +email+ " "+password);
  }

  return (
    <div><h2>Registration</h2>
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="name" onChange={(e)=>setName(e.target.value)} class="form-control" id="name" aria-describedby="name" placeholder="Enter name"/>
    {/* <h2>
      {name}
    </h2> */}
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    {/* <h3>
      {email}
    </h3> */}
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  {/* <h3>
    {password}
  </h3> */}
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={regiterUser}>Register</button>
</form>
    
    </div>
  )
}

export default Registration