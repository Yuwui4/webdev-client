"use client";

const hello = () => {
  alert("Hello World!");
};

// ADDED: goodbye function
const goodbye = () => {
  alert("Goodbye World!");
};

const hello_personal = () => {
  alert("My Name is Zhu!");
};

export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hello
      </button>

      {/* ADDED: Goodbye button */}
      <button
        type="button"
        onClick={goodbye}
        id="wd-onclick-goodbye"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Goodbye
      </button>

      <button
        type="button"
        onClick={hello_personal}
        id="wd-onclick-personal"
        className="rounded bg-pink-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        What's Your Name
      </button>
      <hr />
    </div>
  );
}