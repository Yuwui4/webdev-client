"use client";

import { useState } from "react";

export default function WorkingWithRemoteArray() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const API = `${HTTP_SERVER}/lab5/todos`;
  
  const [todo, setTodo] = useState({
    id: "1",
    title: "Task 1",
    completed: false,
    description: "goo"
  });

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="rounded bg-blue-600 text-white px-3 py-2" href={API}>
        Get Todos
      </a>

      <h4>Retrieving an Item from an Array by ID</h4>
      <a id="wd-retrieve-todo-by-id" className="rounded bg-blue-600 text-white px-3 py-2" href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <input id="wd-todo-id" value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })} />

      <h4>Filtering Array Items</h4>
      <a id="wd-retrieve-completed-todos" href={`${API}?completed=true`} className="rounded bg-blue-600 text-white px-3 py-2">
        Get Completed Todos
      </a>

      <h4>Creating new Items in an Array</h4>
      <a id="wd-create-todo" href={`${API}/create`} className="rounded bg-blue-600 text-white px-3 py-2">
        Create Todo
      </a>

      <h4>Removing from an Array</h4>
      <a id="wd-remove-todo" href={`${API}/${todo.id}/delete`} className="rounded bg-red-600 text-white px-3 py-2">
        Remove Todo with ID = {todo.id}
      </a>

      <h4>Updating an Item in an Array</h4>
      <div className="flex flex-col gap-2">
        <div>
          <a href={`${API}/${todo.id}/title/${todo.title}`} id="wd-update-todo-title" className="rounded bg-blue-600 text-white px-3 py-2">
            Update Todo
          </a>
          <input value={todo.title} onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
        </div>

        <div>
          <a href={`${API}/${todo.id}/completed/${todo.completed}`} id="wd-update-todo-completed" className="rounded bg-blue-600 text-white px-3 py-2">
            Complete Todo ID = {todo.id}
          </a>
          <input type="checkbox" checked={todo.completed} onChange={(e) => setTodo({ ...todo, completed: e.target.checked })} />
        </div>

        <div>
          <a href={`${API}/${todo.id}/description/${todo.description}`} id="wd-update-todo-description" className="rounded bg-blue-600 text-white px-3 py-2">
            Describe Todo ID = {todo.id}
          </a>
          <input value={todo.description} onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
        </div>

      </div>

    </div>
  );
}