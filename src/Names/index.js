import React, { useState, useEffect } from "react";


function ChangeName() {
    
    const [name, setName] = useState("Blah blah");
    const [theme, setTheme] = useState('yellow');

   
    return (
        <div>
            <button className="btn btn-lg bg-danger" onClick={() => setName("Ramadhani")}>CHANGENAME</button>
            <h2 style={{ textAlign: 'center', color: 'indigo' }}>Your name is {name} </h2>
            <button onClick={() => setTheme("red")} style={{ background: { theme } }}>BUTTON1</button>
            <h3 style={{ color: '{theme}', textAlign: 'center' }}>Your color is {theme}</h3>
            
        </div>
    )
}
export default (ChangeName);