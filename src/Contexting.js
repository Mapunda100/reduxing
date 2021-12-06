import React  from 'react';
import { createContext, useContext } from 'react';
import { useEffect, useState } from 'react';
import UseContext from './UseContext';
import FontButton from './Recoil';
import { RecoilRoot } from 'recoil';
import TodoList from './Todos';
import { useHistory } from 'react-router'
import TodoosList from './Todoos';
import Test from './Test'


export const Context = createContext('Juma')
const userName = 'blue';


const Contexting = () => {
  let history = useHistory();
  const [userName, setUserName] = useState("LOGIN");
  
  function Next() {
  history.push('/component')
  }
  
  function Back() {
    history.push('/form')
  }

     useEffect(() => {
    setTimeout(() => {
      setUserName('LOGOUT');
    }, 2000);
  }, []);
    return (
      <div>
        <Context.Provider value={userName}>
        <UseContext /> <br />
        <RecoilRoot>
            <FontButton />
            <Test />
            {/* <TodoList /> */}
          <TodoosList />
        </RecoilRoot>
        </Context.Provider>
        <div className="row">
            <button  onClick={Back} className="col col-md-1 bg-success text-dark ">BACK</button>
            <button  onClick={Next} className="col col-md-1 offset-md-10 bg-danger text-dark ">NEXT</button>
        </div>
        
        </div>
    );
};

// function Row() {
//     return (
//         <Context.Consumer>
//             {userName => <button style={{ background:'{userName}'}}>{ userName}</button> }
//         </Context.Consumer>
//     )





export default Contexting;