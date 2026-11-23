"use client";

import { useState, useEffect } from "react";
import * as client from "./client";
import { FaTrash, FaPlusCircle, FaPencilAlt } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

export default function WorkingWithRemoteArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchTodos = async () => {
    setTodos(await client.fetchTodos());
  };
  useEffect(() => { fetchTodos(); }, []);

  const removeTodo = async (todo: any) => {
    setTodos(await client.removeTodo(todo));
  };

  const createNewTodo = async () => {
  setTodos(await client.createNewTodo());
  };

  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };

  // const deleteTodo = async (todo: any) => {
  //   await client.deleteTodo(todo);
  //   setTodos(todos.filter((t) => t.id !== todo.id));
  // };

  const editTodo = (todo: any) => {
    setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)));
  };

  const updateTodo = async (todo: any) => {
    await client.updateTodo(todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };

  const deleteTodo = async (todo: any) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h3>Working with Arrays Asynchronously</h3>
      <div className="flex items-center gap-2">
        <h4>Todos</h4>
        <FaPlusCircle onClick={createNewTodo} id="wd-create-todo"
          className="cursor-pointer text-green-600" />
        <FaPlusCircle onClick={postNewTodo} id="wd-post-todo"
          className="cursor-pointer text-blue-600" />
      </div>

      {errorMessage && (
        <p id="wd-todo-error-message" className="rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}

      {todos.map((todo) => (
        <li key={todo.id}>
          {/* <input type="checkbox" defaultChecked={todo.completed} /> */}
          <input type="checkbox" checked={todo.completed}
            onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })} />
          {todo.editing ? 
            (<input value={todo.title} onChange={(e) => updateTodo({ ...todo, title: e.target.value })}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  updateTodo({ ...todo, editing: false });
                }
              }} />) :
            (<span className={todo.completed ? "line-through" : ""}>{todo.title}</span>)
          }
          {/* <span className={todo.completed ? "line-through" : ""}>{todo.title}</span> */}
          <FaTrash onClick={() => removeTodo(todo)} id="wd-remove-todo"
            className="cursor-pointer text-red-600" />
          <TiDelete onClick={() => deleteTodo(todo)} id="wd-delete-todo"
            className="cursor-pointer text-2xl text-red-600" />
          <FaPencilAlt onClick={() => editTodo(todo)} className="cursor-pointer text-blue-600" />
        </li>
      ))}
    </div>
  );
}