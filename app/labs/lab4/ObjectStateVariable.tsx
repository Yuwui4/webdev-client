"use client";

import { useState } from "react";

export default function ObjectStateVariable() {
  const [person, setPerson] = useState({ name: "Peter", age: 24, personal_city: "Cowabunga", city: "Boston"});
  return (
    <div id="wd-object-state-variables">
      <h2>Object State Variables</h2>
      {/* JSON.stringify(value, replacer, space), replacer lets you pass array or func to only get thins you wan
      while space is for pretty spacing like indents or new lines*/}
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <input
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
        id="wd-person-name"
      />
      <input
        type="number"
        className="block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={person.age}
        onChange={(e) =>
          setPerson({ ...person, age: parseInt(e.target.value) || 0 })
        }
        id="wd-person-age"
      />
      {/* ADDED: Sample city field */}
      <input
        className="block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={person.city}
        onChange={(e) => setPerson({ ...person, city: e.target.value })}
        id="wd-person-city"
      />
      {/* not again... stop making the ai be the same as the do it on your own?? */}
      <input
        className="block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={person.personal_city}
        onChange={(e) => setPerson({ ...person, personal_city: e.target.value })}
        id="wd-person-personal-city"
      />
      <hr />
    </div>
  );
}