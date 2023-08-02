"use client";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("get");
    axios
      .get("http://localhost:3001")
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return <div></div>;
}
