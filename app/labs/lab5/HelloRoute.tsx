"use client";

import { useState, useEffect } from "react";
import * as client from "./client";


export default function HelloRoute() {
  const [hello, setHello] = useState<{ message?: string }>({});
  // Style1
  // useEffect(() => {
  //   fetch("/api/lab5/hello")
  //     .then((response) => response.json())
  //     .then(setHello);
  // }, []);

  // Style2
  // const fetchHello = () => {
  //   fetch("/api/lab5/hello")
  //     .then((response) => response.json())
  //     .then(setHello);
  // };
  // useEffect(() => {
  //   fetchHello();
  // }, []);

  //Style3
  // const fetchHello = async () => {
  //   const response = await fetch("/api/lab5/hello");
  //   const data = await response.json();
  //   setHello(data);
  // };
  // useEffect(() => {
  //   fetchHello();
  // }, [])

  // Style4 (stuff in client.ts)
  useEffect(() => {
    client.fetchHello().then(setHello);
  }, []);

  return (
    <pre>{JSON.stringify(hello, null, 2)}</pre>
  )

}