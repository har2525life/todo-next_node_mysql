"use client";
import axios from "axios";
import { useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit } = useForm<{ todo: string }>();

  const addTodo = (event: { todo: string }) => {
    const { todo } = event;
    console.log(todo);
    axios.post("http://localhost:3001/add", {
      body: todo,
    });
  };

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

  return (
    <div>
      <form onSubmit={handleSubmit(addTodo)}>
        <TextField {...register("todo")} type="text" size="small" />
        <Button type="submit" sx={{ ml: 2 }} variant="contained">
          add
        </Button>
      </form>
    </div>
  );
}
