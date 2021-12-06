import React, {useState, useRef } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';

const Login = () => {
    let history = useHistory()

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const emailRef = useRef();
    const passwordRef = useRef();

    function handlePassword() {
        setPassword(passwordRef.current.value);
    }

      function emailHandle(e) {
        setEmail(emailRef.current.value);
    }

    function login(e) {
        e.preventDefault();
        setPassword(passwordRef.current.value);
        alert('Your Email is ' +email +'And ' +'Your Password is ' + password);
        
        history.push('/home');
    }

    //Handle Email input
  

    return (
        <div>
            <form onSubmit={login} className="container-fluid bg-secondary row col-sm-6 offset-sm-3 mt-5">
      <h3 className="text-center  mt-1">LOGIN</h3>
        
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
          <input type="email" onChange={emailHandle} ref={emailRef}  class="form-control" id="inputPassword"/>
          </div>
        </div>  
              
        <div class="mb-3 row">
          <label  class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
          <input type="password" ref={passwordRef} onChange={handlePassword} class="form-control" id="inputPassword"/>
          </div>
        </div>
        
        <div class="row col-sm-4 offset-2">
            <input class="bg-info text-white" type="submit" value="LOGIN"></input>
        </div>
    </form>
    
            {/* <div>Written Email is: { email }</div>
            <div>Written Password is: { password }</div> */}

            <div className="col mt-2 offset-md-6">Don't you have an account? 
                <Link to='/signup'> sign_up</Link></div>
    
        </div>
    );
};

export default Login;