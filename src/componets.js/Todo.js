import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

function Todo() {
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");
    const [editedTodo, setEditedTodo] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const addTodo = (todo) => {
        const newTodo = {
            id: Math.random(),
            todo: todo,
        };

        
        setList([...list, newTodo]);

        
        setInput("");
    };

    const deleteTodo = (id) => {
        
        const newList = list.filter((todo) => todo.id !== id);

        setList(newList);
    };

    const editTodo = (id) => {
    
        const todoToEdit = list.find((todo) => todo.id === id);

        
        setInput(todoToEdit.todo);

        
        setEditedTodo(id);
    };

    const updateTodo = () => {
        
        const updatedList = list.map((todo) =>
            todo.id === editedTodo ? { ...todo, todo: input } : todo
        );

        
        setList(updatedList);

        
        setInput("");
        setEditedTodo(null);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredList = list.filter((todo) =>
        todo.todo.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className=" ">
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder=" Enter your todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            {editedTodo ? (
                <button onClick={updateTodo}>
                    <FontAwesomeIcon icon={faCheck} /> 
                </button>
            ) : (
                <button onClick={() => addTodo(input)}>
                    <FontAwesomeIcon icon={faPlus} /> 
                </button>
            )}
            <div className="search">
            <input
                type="text"
                placeholder="Search Todo"
                value={searchQuery}
                onChange={handleSearch}
            />
            </div>
            
            <ul>
                
                {filteredList.map((todo) => (
                    <li key={todo.id}>
                        {todo.todo}
                        <button onClick={() => deleteTodo(todo.id)}>
                            <FontAwesomeIcon icon={faTimes} /> 
                        </button>
                        <button onClick={() => editTodo(todo.id)}>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
