import logo from './logo.svg';
import './App.css';
import Users from "./components/users/Users";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";


const NestedChild = () =>{
    let [customChange, setCustomChange]= useState('')
    const onIncrementChange = (e)=>{
        setCustomChange(e.target.value)
    }



    const counter = useSelector(({counter:{value}}) => value)
    const dispatch = useDispatch()


    return(
        <div>
            <Users/>
            <h1>{counter}</h1>
            <form action="#">
                <input type={'number'} onChange={onIncrementChange}/>
            </form>

            <form action="#">
                <input  type={'number'}  onChange={onIncrementChange} />

                <button onClick={() => {
                    dispatch({type: 'INC_CUSTOM', payload: customChange})
                }
                }>inc</button>
            </form>

            {/*Decrement*/}
            <form action="#">
                <input type={'number'} onChange={onIncrementChange}/>
                <button onClick={() => {
                    dispatch({
                        type: 'DEC', payload: customChange
                    })

                }}>dec</button>
            </form>



            {/*Reset*/}
            <button onClick={() => {
                dispatch({
                    type: 'RES'


                })


            }}>res</button>



        </div>
    )
}

function App() {
  return (
    <div className="App">

      <NestedChild/>
    </div>
  );
}

export default App;
