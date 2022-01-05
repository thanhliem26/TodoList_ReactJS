import { useStore, actions } from "../store";

const ListToDo = ({status}) => {
    const [state, dispatch] = useStore();
    const { todos, statusInput, todoInput } = state;
    let listReview;
    switch(status) {
        case "all":
            listReview = todos;
            break;
        case "active":
            listReview = todos.filter((item) => {
                if(statusInput === "search") {
                    return item.isComplete === false && (item.todo.toLowerCase()).includes(todoInput.toLowerCase());
                } else {
                    return item.isComplete === false;
                }
            })
            break;
        case "completed":
            listReview = todos.filter((item) => {
                if(statusInput === "search") {
                    return item.isComplete === true && (item.todo.toLowerCase()).includes(todoInput.toLowerCase());
                } else {
                    return item.isComplete === true;
                }  
            })
            break;
        default:
            throw new Error("Invalid Status!");
    }
    
    const handleChange = (index) => {
       
        return () => {
            dispatch(actions.setCompleteInput(index));
        }
    }
    return (
        <div className="Form__list">
            <ul>
                {listReview.length > 0 ?
                    listReview.map((item) => {
                        return (
                            <li key={item.index}>
                                <input type="checkbox"  onChange={handleChange(item.index)} defaultChecked={item.isComplete}></input>
                                <span>{item.todo}</span>
                            </li>
                        )
                    })
                : <li className="List__empty">There are no items</li>}
            </ul>
        </div>
    )
}

export default ListToDo;