import React from 'react';

const Calculator = (props) => {
    if (props.number > 18){
              return <p className='col text-danger offset-sm-4'><b>HELO HAVE A NICE MOMENT WITH HEINEKEN</b></p>

    }

    else {
        return <p className='col text-danger offset-sm-4'><b>YOUR AGE IS UNDER 18</b></p>
    }
   
};

export default Calculator;