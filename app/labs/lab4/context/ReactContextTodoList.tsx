"use client";

import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, add, update, deleteTodo } = useTodosContext();
  const [todoName, setTodoName] = useState("");

  function addTodo() {
    const title = todoName.trim();
    add(title);
    setTodoName("");
  }

  return (
    <div>
      <h3>Todo List</h3>
      
      {/* input for todo inital text */}
      <div>
        <input
          type="text"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />

        <button
          type="button"
          onClick={addTodo}
        >
          Add
        </button>
      </div>

      {/* the items */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              value={todo.title}
              onChange={(e) => update(todo.id, e.target.value)}
            />

            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}