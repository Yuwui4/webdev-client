"use client";

import { useState, useEffect } from "react";
import * as client from "./client";

export default function WorkingWithRemoteObjectsAsynchronously() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0
  });

  const fetchAssignment = async () => {
    setAssignment(await client.fetchAssignment());
  };
  const updateTitle = async () => {
    setAssignment(await client.updateTitle(assignment.title));
  };
  useEffect(() => { fetchAssignment(); }, []);

  return (
    <div>
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>

      <div className="flex flex-col gap-2 items-start">
        <input value={assignment.title} onChange={(e) => setAssignment({...assignment,title: e.target.value,})}/>
        <textarea value={assignment.description} onChange={(e) => setAssignment({...assignment, description: e.target.value,})}/>
        <input
          type="date"
          value={assignment.due}
          onChange={(e) =>
            setAssignment({
              ...assignment,
              due: e.target.value,
            })
          }
        />
        <label>
          <input
            type="checkbox"
            checked={assignment.completed}
            onChange={(e) =>
              setAssignment({
                ...assignment,
                completed: e.target.checked,
              })
            }
          />
          Completed
        </label>
      </div>

      <button onClick={updateTitle} >Update Title</button>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>

    </div>
  );
}