import { useStore, actions } from "../store";
import { useRef, useEffect } from "react";
const InputTodo = () => {
    const [state, dispatch] = useStore();
    const { todoInput, statusInput } = state;
    const inputRef = useRef();
    
    useEffect(() => {
        if(statusInput !== "") {
            inputRef.current.focus();
        }
    }, [statusInput]);

    const handleKey = (e) => {
        const value = (e.target.value).trim();
       
        if (e.keyCode === 13) {
            if(value.length !== 0) {
                dispatch(actions.addTodoInput(value))
                dispatch(actions.setTodoInput(''))
            }  
        }
    }
    
    return (
        <div className="FormInput">
            {statusInput === "add" ?
                <input type="text"
                    ref={inputRef}
                    value={todoInput}
                    onChange={e => {
                        dispatch(actions.setTodoInput(e.target.value));
                    }}
                    onKeyUp={handleKey}
                    placeholder="Add New"
                />
                : statusInput === "search" ?
                    <input type="text"
                        ref={inputRef}
                        value={todoInput}
                        onChange={e => {
                            dispatch(actions.setTodoInput(e.target.value));
                        }}
                        placeholder="Search"
                    />
                    : ""}

        </div>
    )
}

export default InputTodo;