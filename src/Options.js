import React from 'react';
import { useState } from 'react';

const NAMES = ["Grayson", "Daniel", "Hamis"]
const Options = () => {

    const [names, setNames] = useState();
    
    function handleChange(e) {
        setNames(e.target.value)
        console.log(e.target.value);
    }

    return (
        <div>
            <label>
                Select Your name:
                <select onChange={handleChange}>
                    {NAMES.map((name)  =>
                        <option >{ name }</option>
                   )}
                </select>
            </label>

            <h3>Your selection is {names}</h3>
        </div>
    );
};

export default Options;