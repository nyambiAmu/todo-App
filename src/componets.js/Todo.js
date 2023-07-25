import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

function Todo() {
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");
    const [priority, setPriority] = useState("low"); // New state for priority
    const [editedTodo, setEditedTodo] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const addTodo = (todo, priority) => { // Updated addTodo function to include priority
        const newTodo = {
            id: Math.random(),
            todo: todo,
            priority: priority,
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
        setPriority(todoToEdit.priority); // Set the priority of the todo being edited
        setEditedTodo(id);
    };

    const updateTodo = () => {
        const updatedList = list.map((todo) =>
            todo.id === editedTodo ? { ...todo, todo: input, priority: priority } : todo
        );
        setList(updatedList);
        setInput("");
        setPriority("low"); // Reset priority to "low" after updating
        setEditedTodo(null);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredList = list.filter((todo) =>
        todo.todo.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Enter your todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
            </select>
            {editedTodo ? (
                <button onClick={updateTodo}>
                    <FontAwesomeIcon icon={faCheck} />
                </button>
            ) : (
                <button onClick={() => addTodo(input, priority)}>
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
                        <FontAwesomeIcon
                            icon={faEdit}
                            onClick={() => editTodo(todo.id)}
                            className="edit-icon"
                        />
                        {todo.todo}
                        <button onClick={() => deleteTodo(todo.id)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        {todo.priority === "low" && (
                            <FontAwesomeIcon icon={faCheck} className="low-priority" />
                        )}
                        {todo.priority === "medium" && (
                            <FontAwesomeIcon icon={faCheck} className="medium-priority" />
                        )}
                        {todo.priority === "high" && (
                            <FontAwesomeIcon icon={faCheck} className="high-priority" />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
                        }







        
export default Todo;
