"use client";

// import axios from "axios";
import { useState, useEffect } from "react";
import * as client from "./client";

export default function HttpClients() {
  // const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  // const fetchWelcomeOnClick = async () => {
  //   const response = await axios.get(`${HTTP_SERVER}/lab5/welcome`);
  //   setWelcomeOnClick(response.data);
  // };

  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

  const fetchWelcomeOnClick = async () => {
  const message = await client.fetchWelcomeMessage();
  setWelcomeOnClick(message);
  };
  const fetchWelcomeOnLoad = async () => {
    const welcome = await client.fetchWelcomeMessage();
    setWelcomeOnLoad(welcome);
  };

  useEffect(() => {
    fetchWelcomeOnLoad();
  }, []);

  return(
    <div>
      <h3>HTTP Client</h3>
      <h4>Requesting on Click</h4>
      <button type="button" onClick={fetchWelcomeOnClick} className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white">
        Fetch Welcome
      </button>
      <p>
        Response from server: <b>{welcomeOnClick}</b>
      </p>

      <h4>Requesting on Load</h4>
      <p>
        Response from server: <b>{welcomeOnLoad}</b>
      </p>
    </div>
  )
}