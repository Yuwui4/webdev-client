"use client";

import { useState } from "react";

export default function QueryParameters() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");

  return (
    <div>
      <h4>Query Parameters</h4>

      <div className="mb-4 flex gap-2">
        <input type="number" className="border rounded p-2" value={a} onChange={(e) => setA(e.target.value)} />
        <input type="number" className="border rounded p-2" value={b} onChange={(e) => setB(e.target.value)} />
      </div>

      <a id="wd-query-parameter-add"
      href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
      className="rounded bg-blue-600 text-white px-3 py-2">
        Add {a} + {b}
      </a>

      <a id="wd-query-parameter-subtract"
      href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
      className="rounded bg-red-600 text-white px-3 py-2">
        Subtract {a} - {b}
      </a>

      <a id="wd-query-parameter-multiply"
      href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
      className="rounded bg-green-600 text-white px-3 py-2">
        Multiply {a} * {b}
      </a>

      <a id="wd-query-parameter-divide"
      href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
      className="rounded bg-orange-600 text-white px-3 py-2">
        Divide {a} / {b}
      </a>
    </div>
  )
}