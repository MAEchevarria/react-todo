import { Form } from 'react-bootstrap'

function TodoForm({ userText, setUserText, todos, setTodos, keyIndex, setKeyIndex }) {
    
    function inputTextHandler(event){
        setUserText(event.target.value)
    }
    
    function submitTodoHandler(event){
        event.preventDefault();
        const newId = keyIndex += 1
        setTodos([
            ...todos, {
                text: userText,
                isComplete: false,
                id: newId,
            }
        ])
        setKeyIndex(newId)
        setUserText("")
    }
    return (
        <Form onSubmit={ submitTodoHandler } className="my-form d-flex my-2">
            <Form.Control onChange={ inputTextHandler } type="text" className="todo-input" value={ userText } placeholder="Add a todo"/>
        </Form>
    )
}
export default TodoForm