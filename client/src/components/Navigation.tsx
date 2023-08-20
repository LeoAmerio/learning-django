import {Link} from "react-router-dom";

export function Navigation() {
    return(
        <div>
            <Link to={"/tasks"} >Link</Link>
            <h1>Task App</h1>
            <Link to={"/task-create"}>create a task</Link>
        </div>
    )
}