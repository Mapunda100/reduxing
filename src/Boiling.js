import { Alert } from 'bootstrap';
import React, { useState, useRef } from 'react';
import Calculator from './Calculator'
import { useHistory } from 'react-router';

const Boiling = () => {
    const [state, setState] = useState();
    const inputVal = useRef();
    const history = useHistory();
    
    function handleEvent() {
        setState(inputVal.current.value);
    }

    function submit(e) {
        e.preventDefault();
        setState(state);
        alert(state)
    }

    function Back() {
        history.push('/form')
    }
    return (
        <div>
            <form className="row" onSubmit={submit}>
                <input className="col offset-md-3 p-2 col-4 gy-3" ref={inputVal} onChange={handleEvent}

                    type="number"></input>
                <input className="col col-2 bg-info gy-3" type="submit" value="ENTER"></input>
            </form>
        
            <Calculator number={state} />
            <button onClick={Back} className="bg-primary col-lg-1 text-warning p-2"><b>BACK</b></button>
        </div>
    );
};

export default Boiling;