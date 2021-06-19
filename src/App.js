import './App.css';
import {TodoList} from "./components/TodoList";

function App() {
    return (

        <div className="container">
            <section>
                <h1 className="mx-auto">React TODO-list</h1>
                <TodoList/>
            </section>
        </div>

    );
}

export default App;
