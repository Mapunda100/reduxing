import React from 'react';
import { useState } from 'react';
const Count = (initialValue) => {

    const [value, setValue] = useState(0);

    function CurrentValue() {
         setValue(value)
    }
    
     function PreviousValue() {
         setValue(value - 1)
    }
    
     function NextValue() {
         setValue( value + 1)
     }
    return (
        <div>
            <div>
                <button onClick={CurrentValue} style={{color:'red'}}>RESET</button>
                <button onClick={NextValue} style={{color:'green'}}>NEXTVALUE</button>
                <button onClick={PreviousValue} style={{color:'blue'}}>PREVIOUSVALUE</button>
            </div>
            <h3>The value has { value } digits</h3>
        </div>
    );
};

export default Count;