import { useStore, actions } from "../store";

const Navbar = ({status, onClick}) => {
    const [state, dispatch] = useStore();
    const {todos, statusInput} = state;

    let classNameAdd = "fas fa-plus";
    let classNameSearch = "fas fa-search ";
    let classNameBtn1 = "navbar__btn";
    let classNameBtn2 = "navbar__btn";
    let classNameBtn3 = "navbar__btn";

    switch(statusInput) {
        case "add":
            classNameAdd += " active";
            break;
        case "search":
            classNameSearch += " active";
            break;
        case "":
        default:
            break;
    };
    switch(status) {
        case "all":
            classNameBtn1 += " active";
            break;
        case "active":
            classNameBtn2 += " active";
            break;
        case "completed":
            classNameBtn3 += " active";
            break;
        default:
            throw new Error("Unknown status")
    }

    const handleSet = (status) => {
        return () => {
            const check = statusInput === status ? "" : status;
            dispatch(actions.setStatusInput(check));
            dispatch(actions.setTodoInput(""));
        }
    }

    return (
            <div className="Form__navbar">
            <div className="navbar__left">
                <div className="navbar__left-icon">
                    <i className={classNameAdd} onClick={handleSet("add")}></i>
                    <i className={classNameSearch} onClick={handleSet("search")}></i>
                </div>
                <div className="navbar__right-total">
                    <span>{todos.length} items left</span>
                </div>
            </div>
            <div className="navbar__right">
                <button className={classNameBtn1} onClick={onClick("all")}>All</button>
                <button className={classNameBtn2} onClick={onClick("active")}>Active</button>
                <button className={classNameBtn3} onClick={onClick("completed")}>Completed</button>
            </div>
        </div>  
    )
}

export default Navbar;