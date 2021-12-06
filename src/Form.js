import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router';

const Form = () => {
  const history = useHistory()

  function Contexting() {
    history.push('/contexting')
  }

  const [state, setState] = useState();
  const [area, setArea] = useState();
  const [select, setSelect] = useState();
  const [firstName, setFirstName] = useState();

  //Input value using useRef 
  const inputVal = useRef();

    function submit(e) {
        let value = e.target.value;
      e.preventDefault();
      setState(e.target.value)
      alert('IN_INPUT__: Your name is ' +state  );
      
  }

  // handleChange for textInput
  function handleChange(e) {
    setState(e.target.value)
    console.log(state);
  }
  
  // function for Redirecting to home
  function home() {
  history.push('/')
  }
 
  // This is a submit button for TextArea
  function areasubmit(e) {
    e.preventDefault();
    setArea(e.target.value);
   alert('TEXT_AREA__:' +area)
  }

  // HandleChanges for textArea
  function handleArea(e) {
    setArea(e.target.value);
  }

  // Function for handle select
  function handleSelect(e) {
    setSelect(e.target.value)
  }

  //Function for selecting the value in select tag
  function selectSubmit(e) {
    e.preventDefault();
    setSelect(e.target.value);
    alert('You have selected ' +select +'As your favourite Continent to live')
    
  }

      return (
      <div>
      <h3 className="text-center  mt-5">SINGLE INPUT FORM</h3>
          
            <form className="row" style={{textAlign:'center'}}>
                <input className="col col-lg-5 offset-md-2" name="firstname" onChange={handleChange} type="text" placeholder="Enter your name"></input>
                <button className="col bg-success gy-3 col-lg-2 p-1" onClick={submit}>SUBMIT</button>
          <h2 className='bg-primary 
               padding-3 text-light offset-md-1 mr-3 col-md-10'>Your name is {state}</h2>
        </form>
        
        {/* This is for textArea element */}
        <form onSubmit={areasubmit} className="container-fluid mt-3 bg-secondary row gy-3">
          <label style={{textAlign:'center'}}><b><h2>TEXT__AREA</h2></b></label>
          <textarea onChange={handleArea} className="row p-3 offset-sm-2 col-sm-8"></textarea>
          <input  className="row col-md-5 p-2 bg-warning gy-3  offset-sm-4 justify-content-center " type="submit" value="SUBMIT"></input>
        </form>

      <h3 className="text-center  mt-5">SELECT FORM</h3>
        
        <form onSubmit={selectSubmit} className="container-fluid bg-secondary row mt-3">
          <label className="row ">
              <h4 className="col col-sm-5 offset-sm-1">Choose Your Favourite Continent Here:</h4>
            <select className="col col-sm-2" value={select} onChange={handleSelect}>
              <option value="Africa">Africa</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="South America">South America</option>
              <option value="North America">North America</option>
              <option value="Australia">Australia</option>
            </select>
          </label>
          <input className="col justify-content-center bg-success
               col-md-10 offset-sm-1 gy-1" type="submit" value="SELECT"></input>
        </form>
        <div className="offset-lg-4">Your Favourite Continent is { select }</div>

      
    
        <div class="row">
            <div class="col">
                <form class="row p-3 text-center">
                    <label><h2>FIRST FORM</h2></label>
                    <input class="col " type="text" placeholder="Enter your name here"></input>
                    <input class="mt-3" type="text" placeholder="Enter your name here"></input>
                    <input class="mt-3" type="text" placeholder="Enter your name here"></input>
                    <input class="mt-3" type="text" placeholder="Enter your name here"></input>
                    <div class="row col-sm-4 mt-3 offset-2">
                     <input onClick={home} class="bg-success text-white" type="submit" value="BACK"></input>
                    </div>
                </form>
            </div>
            <div class="col">
                <form class="row p-3 text-center">
                    <label><h2>SECOND FORM</h2></label>
                    <input class="col " type="text" placeholder="Enter your name here"></input>
                    <input class="mt-3" type="text" placeholder="Enter your name here"></input>
                    <input class="mt-3" type="text" placeholder="Enter your name here"></input>
                    <input class="mt-3" type="text" placeholder="Enter your name here"></input>
                    <div class="row col-sm-4 offset-2 mt-3">
                    <input onClick={Contexting} class="bg-dark text-white" type="submit" value="NEXT"></input>
                    </div>
                </form>
            </div>
        </div>
</div>
    );
};

export default Form;