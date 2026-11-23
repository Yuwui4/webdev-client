"use client";

import { useState } from "react";

// AI checklist
// [ ] GET /lab5/module — get the module object
// [ ] GET /lab5/module/name — get the module name
// [ ] GET /lab5/module/name/:newName — update the module name
// [ ] GET /lab5/module/description/:newDesc — update the module description

export default function WorkingWithRemoteObjects() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`

  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0
  });

  const [module, setModule] = useState({
    id: 8,
    name: "NodeJS Module",
    description: "Create a NodeJS Module",
    course: "R108"
  });

  return (
    <>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments"
      className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
      href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>

      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title"
      className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
      href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Title
      </a>

      <h4>Modifying Objects</h4>
      <div className="flex flex-col gap-2">
        <div>
          <a id="wd-update-assignment-title"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
            Update Title
          </a>
          <input id="wd-assignment-title" value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
        </div>
        
        <div>
          <a id="wd-update-assignment-score"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${ASSIGNMENT_API_URL}/title/${assignment.score}`}>
            Update Score
          </a>
          <input type="number" id="wd-assignment-score" value={assignment.score}
            onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })} />
        </div>

        <div>
          <a id="wd-update-assignment-completed"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
            Update Completed
          </a>
          <input type="checkbox" id="wd-assignment-completed"
            checked={assignment.completed}
            onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
        </div>
      </div>
      

      <h4>Module (On Your Own)</h4>
      <a className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
      href={`${HTTP_SERVER}/lab5/module`}>
        Get Module
      </a>
      <a className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
      href={`${HTTP_SERVER}/lab5/module/name`}>
        Get Module Name
      </a>
      <div className="flex flex-col gap-2">
        <div>
          <a className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${MODULE_API_URL}/name/${module.name}`}>
            Update Module Name
          </a>
          <input
            value={module.name}
            onChange={(e) => setModule({ ...module, name: e.target.value })}
          />
        </div>

        <div>
          <a className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${MODULE_API_URL}/description/${module.description}`}>
            Update Module Description
          </a>
          <input
            value={module.description}
            onChange={(e) => setModule({ ...module, description: e.target.value })}
          />
        </div>
      </div>

    </>
  )
}