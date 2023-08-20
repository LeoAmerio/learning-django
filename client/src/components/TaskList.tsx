import {useEffect} from "react";
import {getAllTasks} from "../api/tasks.api.ts";

export function TaskList() {

    useEffect(() => {
        function loadTasks() {
            const res: Request = getAllTasks()
        }
        loadTasks()
    }, []);

    return(
        <div>a</div>
    )
}