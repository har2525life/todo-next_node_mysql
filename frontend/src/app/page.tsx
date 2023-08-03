"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

type TodoTypes = {
  id: string;
  todo: string;
};

export default function Home() {
  const { register, handleSubmit } = useForm<{ todo: string }>();
  const [todos, setTodos] = useState<TodoTypes[]>([]);

  const addTodo = async (event: { todo: string }) => {
    const { todo } = event;
    console.log(todo);
    await axios.post("http://localhost:3001/add", {
      data: {
        todo,
      },
    });
  };

  useEffect(() => {
    console.log("get");
    axios
      .get("http://localhost:3001")
      .then((response) => {
        console.log(response);
        const { todos } = response.data;
        setTodos(todos);
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
      <div>
        {todos.map((todo) => (
          <Box sx={{ display: "flex" }}>
            <p>{todo.todo}</p>
            <Button size="small" variant="contained" color="success">
              edit
            </Button>
            <Button size="small" variant="contained" color="error">
              delete
            </Button>
          </Box>
        ))}
      </div>
    </div>
  );
}