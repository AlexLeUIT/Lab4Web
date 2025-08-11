import React, { useState } from 'react';

function FilterableTodoList() {
  // Danh sách todo ban đầu
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Do Exercise 5' },
    { id: 3, text: 'Enhance Todo List with Filter' }
  ]);

  const [newTodo, setNewTodo] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Style chung
  const containerStyle = {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '20px',
    paddingRight: '45px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif'
  };

  const inputStyle = {
    padding: '10px',
    width: '65%',
    fontSize: '16px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer'
  };

  // Hàm thêm todo
  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;

    const newItem = {
      id: Date.now(),
      text: newTodo.trim()
    };

    setTodos([...todos, newItem]);
    setNewTodo('');
  };

  // Tạo mảng todos sau khi lọc
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={containerStyle}>
      <h2>Filterable Todo List</h2>

      {/* Ô tìm kiếm */}
      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Search todos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ ...inputStyle, width: '100%' }}
        />
      </div>

      {/* Ô thêm todo */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={inputStyle}
          placeholder="Enter new todo"
        />
        <button onClick={handleAddTodo} style={buttonStyle}>
          Add
        </button>
      </div>

      {/* Danh sách todo hoặc thông báo */}
      {filteredTodos.length > 0 ? (
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {filteredTodos.map((item) => (
            <li key={item.id} style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
              {item.text}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: 'gray', textAlign: 'center' }}>No todos match your search.</p>
      )}
    </div>
  );
}

export default FilterableTodoList;
