import Environment from "./Environment";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithRemoteObjects from "./WorkingWithRemoteObjects";
import WorkingWithRemoteArray from "./WorkingWithRemoteArrays";
import HttpClients from "./HttpClient";
import WorkingWithRemoteObjectsAsynchronously from "./WorkingWithRemoteObjectsAsync";
import WorkingWithRemoteArraysAsynchronously from "./WorkingWithRemoteArraysAsync";
import HelloRoute from "./HelloRoute"
import CalculatorNextWebApiClient from "./Calculator"

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <p>
        Run npm run dev in the Next.js folder and, in a second terminal, 
        cd webdev-server && npm run dev (nodemon) so the Express demos reach http://localhost:4000. 
        No remote host is required. The Next.js calculator at the bottom uses same-origin /api/lab5/calculator.
      </p>
      <Environment />
      <hr />
      <PathParameters />
      <hr />
      <QueryParameters />
      <hr />
      <WorkingWithRemoteObjects />
      <hr />
      <WorkingWithRemoteArray />
      <hr />
      <HttpClients />
      <hr />
      <WorkingWithRemoteObjectsAsynchronously />
      <hr />
      <WorkingWithRemoteArraysAsynchronously />
      <hr />
      <HelloRoute />
      <hr />
      <CalculatorNextWebApiClient />
    </div>
  );
}