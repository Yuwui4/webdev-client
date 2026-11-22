"use client";

import axios from "axios";
import { useState } from "react";

export default function HttpClients() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const [welcomeOnClick, setWelcomeOnClick] = useState("");

  const fetchWelcomeOnClick = async () => {
    const response = await axios.get(`${HTTP_SERVER}/lab5/welcome`);
    setWelcomeOnClick(response.data);
  };

  return(
    <div>
      <h4>Requesting on Click</h4>
      <button type="button" onClick={fetchWelcomeOnClick} className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white">Fetch Welcome</button>
      <p>Response from server: <b>{welcomeOnClick}</b></p>
    </div>
  )
}