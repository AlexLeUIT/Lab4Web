import React, {useState} from 'react'

function TodoList() {
    const [todos, setTodos] = useState([
        {id: 1, text: 'Learn React'},
        {id: 2, text: 'Do exercise 5'}
    ])

    const [newTodo, setNewTodo] = useState('')

    const containerStyle = {
        maxWidth: '500px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        fontFamily: 'Arial, sans-serif'
    }

    const inputStyle = {
        padding: '10px',
        width: '70%',
        fontSize: '16px',
        marginRight: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    }

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#4CAF50',
        color: 'white',
        cursor: 'pointer'
    }

    const handleAddTodo = () => {
        if (newTodo.trim() === '') return

        const newItem = {
            id: Date.now(),
            text: newTodo.trim()
        }

        setTodos([...todos, newItem])
        setNewTodo('')
    }

    return(
        <div style={containerStyle}>
            <div style={{marginBottom: '20px'}}>
                <input style={inputStyle} type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder='Enter new todo'/>
                <button style={buttonStyle} onClick={handleAddTodo}>Add</button>
            </div>

            <ul style={{listStyle: 'none', paddingLeft: 0}}>
                {todos.map((item) => (
                    <li style={{padding: '8px 0', borderBottom: '1px solid #eee'}} key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    )
}
export default TodoList
