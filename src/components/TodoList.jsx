import { ListGroup } from 'react-bootstrap'
import DeleteButton from './DeleteButton'

function TodoList({ todos, setTodos }) {
    function deleteEventHandler(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function completeEventHandler(id) {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isComplete: !todo.isComplete
                }
            }
            return todo;
        }))
    }

    return (
        <ListGroup className="my-list">
            {todos.map((todo) => (
                <ListGroup.Item className="todo-item d-flex" key={todo.id} >
                    <div className="me-auto" id={todo.id} onClick={ () => completeEventHandler(todo.id) }  style={{ textDecoration: todo.isComplete ? "line-through" : "" }}>
                        {todo.text}
                    </div>
                <DeleteButton deleteEventHandler={ deleteEventHandler } id={ todo.id } />
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
export default TodoList