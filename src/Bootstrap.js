import React, { useState } from 'react';
// import logo from './logo192.png'
import joh from './Joh.png'
import picture from './Picture1.png'
import mzungu from './Mzungu.png'
import { useHistory } from 'react-router-dom'

const NAMES = ["Ezekiel", "David", "Daniel", "Grayson", "Simon"];

const Bootstrap = () => {

    const [names, setNames] = useState();
let history = useHistory();

    function Go() {
        history.push('/form')
    }
    
    return (
        <div>

            <nav className="col justify-content-end 
            mr-2 ml-3  align-items-space-between d-flex bg-primary pt-2 pb-3 mr-0">
                <a className="text-light" href="#">HOME</a>
                <a className="text-light" href="#">ABOUT</a>
                <a className="text-light mr-3" href="#">SERVICES</a>
                <a className="text-light" href="#">LOGIN</a>
                <a className="text-light" href="#">LOGOUT</a>
                <a className="text-light" href="#">BOOKING</a>
            </nav>
            <div className="container-lg mt-2 bg-success text-center text-light">
               <h2>Hello chief Welcom to the World of Bootstrap</h2>
            </div>

            <div className="container">
                <div className="row text-center">
                    <div className="col bg-info">
                        <select>
                               {NAMES.map((name) =>
                                   <option>{ name }</option>
                                                           
                        )}
                        </select>
                        <h1>{ }</h1>
                     
                    </div>
                    <div className="col bg-warning text-center">
                            <div className="col bg-dark text-light">CEIT</div>
                        {NAMES.map((names) => 
                    <li key={names.toString}>{ names }</li>
                ) }
                    </div>
                    <div className="col col-lg-6 bg-danger">UDSM</div>
                    <div className="col">
                        <div className="row">
                            <div className="col bg-info">MUCE</div>
                            <div className="col text-white bg-dark">CoICT</div>
                            <div className="col bg-primary">DUCE</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-lg">
                <div className="col">
                    <div className="row mt-2 bg-success text-center">
                        <div className="col">TUNDURU</div>
                        <div className="col bg-warning">MBINGA</div>
                        <div className="col">NAMTUMBO</div>
                    </div>
                </div>
            </div>
           
            <div className="container fluid">
                <div className="row">
                    <img title className='col col-lg-3 gx-0' src={picture} height='300px' ></img>
                    <img className='col col-lg-6 gx-0' src={mzungu} height='300px' ></img>
                    <img className='col col-lg-3 gx-0' src={joh} height='300px' ></img>
                </div>
            </div>
            
            <button className="col col-md-12 bg-dark text-light">KUNDUCHI</button>
             <div className="row align-items-center">
                <button className="col align-self-center btn col-sm-2 bg-primary text-light">BACK</button>
                <button onClick={Go} className="col-md-2 offset-md-8 align-self-end btn bg-warning text-light">NEXT</button>
            </div>
        </div>
    );
};

export default Bootstrap;