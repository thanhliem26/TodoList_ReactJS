import InputTodo from "./Input";
import ListToDo from "./List";
import Navbar from "./navbar";
import './Formtodo.css';
import { TextCancel, FuncAS } from './Text';
import { useStore, actions } from '../store';
import { useState, useEffect } from "react";
const FormTodo = () => {
    const [status, setStatus] = useState('all');
    const handleClick = (status) => {
        return () => setStatus(status);
    }
    const [state, dispatch] = useStore();
    const {statusInput} = state;
    
    useEffect(() => {
        const handleKey = (e) => {
            if(statusInput === "") {
                if(e.keyCode === 191) {
                    dispatch(actions.setStatusInput("search"))
                } else if(e.keyCode === 78) {
                    dispatch(actions.setStatusInput("add"))
                }
            } else {
               if(e.keyCode === 27) {
                   dispatch(actions.setStatusInput(""));
               }
            }
        }

        window.addEventListener("keyup", handleKey);

        return () => {
            window.removeEventListener("keyup", handleKey);
        }
    }, [statusInput, dispatch]);

    return (
        <div className="FormTodo">
            <div className="form-group">
                <h1>THINGS TO DO</h1>
                <InputTodo />
                <ListToDo status={status} />
                <Navbar status={status} onClick={handleClick} />
            </div>
            <div className="text__status">
                {statusInput === ""  ? <p>{FuncAS}</p> : <p>{TextCancel}</p>}
            </div>
        </div>
    )
}

export default FormTodo;