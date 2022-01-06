import { SET_TODO_INPUT, ADD_TODO_INPUT, SET_COMPLETE_INPUT, SET_STATUS_INPUT} from "./constants";
// const storeState = JSON.parse(localStorage.getItem('stateTodolist'));

const initState = {
    todoInput: '',
    todos: [
        {
            index: 0,
            todo : "Quét nhà",
            isComplete: true
        },
        {
            index: 1,
            todo : "Rửa bát",
            isComplete: false
        }
    ],
    statusInput : "add",
}

function reducer(state, action) {
    switch(action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO_INPUT:
            const newState = {
                ...state,
                todos: [...state.todos, {
                    index: state.todos.length,
                    todo: action.payload,
                    isComplete: false
                }]
            }
            const jsonJobs = JSON.stringify(newState);
            localStorage.setItem('stateTodolist', jsonJobs);
            console.log(jsonJobs);
           
            return newState;
        case SET_COMPLETE_INPUT:
            const check = [...state.todos];
            check[action.index] = {
                index : action.index,
                todo : check[action.index].todo,
                isComplete: !check[action.index].isComplete,
            };
            return {
                ...state,
                todos: check
            }
        case SET_STATUS_INPUT:
            return {
                ...state,
                statusInput: action.payload
            }
        default:
            throw new Error("Invalid Action!");
    }
}

export {initState};
export default reducer;