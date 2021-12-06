import React from 'react';
import { Context } from './Contexting';
import { useContext, useState } from 'react';
import Boiling from './Boiling';
import { useHistory } from 'react-router';

const names = ["Ezekiel", "Grayson", "David", "Ramadhani", "Hamism"];

const UseContext = () => {
let history = useHistory();

    function Logout() {
        history.push('/')
    }


    const [toggle, setToggle] = useState({ isToggleOn: false })
   
    function tog() {
        setToggle(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }
    
    
    const userName = React.useContext(Context);
    return (
            <div className="row">
            <Context.Consumer>
                {userName => <button onClick={Logout} className="bg-danger btn-lg">{userName}</button>}
               </Context.Consumer>
            <button className=" col gy-3 btn btn-lg bg-dark text-warning" onClick={tog}><b>{toggle.isToggleOn ? "ON" : "OFF"}</b></button>
            <Boiling />
            </div>
    )
};

export default UseContext;