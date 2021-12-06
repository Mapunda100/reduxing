import React, { useState, useEffect } from 'react';

function AddAge() {

  const [age, setAge] = useState(0);
  
   useEffect(() => {
        
     document.title = `you clicked ${age} times `
    
    })
    return (
    <div>
      <h1 style={{
        color: 'blue', textAlign: 'center',
        marginTop: '20px'  }}>
        <b>WELCOME MR GRAYSON TO THE WORLD OF HOOKS</b>
      </h1>
      <h2 style={{textAlign: 'center'}}>Your age is </h2>
      <button style={{ alignItems: 'center' }} className="btn btn-lg bg-warning"
      onClick={()=> setAge(age + 1 )}>CLICK
        </button>
        <h1 style={{textAlign:'center', color:'red'}}><b>{ age } Years old</b></h1>
    </div>
  );
}

export default (AddAge);