import {useState} from "react";
import {TodoListItem} from "./TodoListItem";
import {Button, Form, ListGroup, Label, Input, FormText, Alert} from 'reactstrap';
import "../App.css"

export const TodoList = (props) => {

    const defaultListItems = [
        {name: 'tarefa 1', isComplete: true},
        {name: 'tarefa 2', isComplete: false},
    ]
    const [items, setItems] = useState(defaultListItems)
    const [taskValue, setTaskValue] = useState('')
    const handlersTaskSubmit = (event) => {
        if (items.find(i => i.name === taskValue)) {
            event.preventDefault()
            return alert("Tarefa já existente")
        }
        setItems([...items, {name: taskValue, isComplete: false}])
        setTaskValue('')
        event.preventDefault()
    }
    const handleOnTaskChanged = (event, item) => {
        setItems(items.map(i => {
            if (i.name === item.name) {
                return {
                    ...i,
                    isComplete: event.target.checked
                }
            }
            return i
        }))
    }
    return (
        <div className="container">
            <form onSubmit={handlersTaskSubmit}>
                <Input type="textarea"
                       value={taskValue}
                       onChange={(event) => setTaskValue(event.target.value)}
                />
                <Button className="mt-2 mb-2 float-right" color="primary">Adicionar Task</Button>{' '}
            </form>
            <ListGroup>
                {items.map((item) => <TodoListItem onTaskChanged={handleOnTaskChanged} item={item}/>)}
            </ListGroup>
            <Alert className="my-2" color="info">
                Você concluiu um total de {items.filter(i => i.isComplete).length} Task
            </Alert>
        </div>
    )
}

