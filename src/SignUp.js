import React from 'react';
import { useHistory } from 'react-router';


const SignUp = () => {

      let history = useHistory();

    function backLogin() {
        history.push('/');
    }

    return (
        <div>
        <form onSubmit={backLogin} className="container-fluid bg-secondary row col-sm-6 offset-sm-3 mt-5">
      <h3 className="text-center  mt-1">SIGN_UP FORM</h3>

       <div class="mb-2 row ">
         <label for="inputPassword" class="col-sm-3 col-form-label">First Name</label>
         <div class="col-sm-10">
           <input type="text" class="form-control" id="inputPassword"/>
         </div>
        </div>
         
        <div class="mb-2 row">
          <label class="col-sm-3 col-form-label">Last Name</label>
          <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPassword"/>
          </div>
        </div>
        
        <div class="mb-2 row">
          <label for="inputPassword" class="col-sm-3 col-form-label">Email</label>
          <div class="col-sm-10">
          <input type="email" class="form-control" id="inputPassword"/>
          </div>
        </div>  
              
        <div class="mb-2 row">
          <label  class="col-sm-3 col-form-label">Password</label>
          <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword"/>
          </div>
        </div>
        
        <div class="row col-sm-4 ">
            <input class="offset-sm-1 bg-info text-white" type="submit" value="SIGN_UP"></input>
        </div>
    </form>
        </div>
    );
};

export default SignUp;