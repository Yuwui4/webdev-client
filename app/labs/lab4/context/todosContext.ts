
import { createContext, createElement, useContext, useState, type ReactNode } from "react";

export type Todo = {
  id: number;
  title: string;
};

// just copied from counter context really
type TodosContextValue = {
  todos: Todo[];
  add: (title: string) => void;
  update: (id: number, title: string) => void;
  deleteTodo: (id: number) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  // ai sample list, but otherwise i did most of the work since once again same instructions
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Do Web Dev Lab 4" },
    { id: 2, title: "Study for networking" },
    { id: 3, title: "Work on Godot" },
  ]);

  function add(title: string) {
    const newTodo: Todo = { id: Date.now(), title };
    setTodos((currentTodos) => [...currentTodos, newTodo]);
  }

  function update(id: number, title: string) {
    setTodos((currentTodos) => currentTodos.map((todo) => todo.id === id ? { ...todo, title } : todo));
  }

  // delete is reserved?
  function deleteTodo(id: number) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  // since we have to have ts instead of tsx?? had to look this up instead of just copying how it was done in
  // countercontext
  return createElement( TodosContext.Provider, { value: { todos, add, update, deleteTodo } }, children );
}

// just copied from counter context really
export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) {
    throw new Error(
      "useTodosContext must be used inside TodosProvider"
    );
  }
  return value;
}