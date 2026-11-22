import Environment from "./Environment";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithRemoteObjects from "./WorkingWithRemoteObjects";
import WorkingWithRemoteArray from "./WorkingWithRemoteArrays";
import HttpClients from "./HttpClient";

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <Environment />
      <PathParameters />
      <QueryParameters />
      <WorkingWithRemoteObjects />
      <WorkingWithRemoteArray />
      <HttpClients />
    </div>
  );
}