import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {TasksPage} from "./pages/TasksPage.tsx";
import {TaskFormPage} from "./pages/TaskFormPage.tsx";
import {Navigation} from "./components/Navigation.tsx";

function App() {
    return (
        <BrowserRouter>

            <Navigation />

            <Routes>
                <Route path={"/"} element={<Navigate to={"/tasks"}/>} />
                <Route path="/tasks" element={<TasksPage />}/>
                <Route path="/task-create" element={<TaskFormPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;