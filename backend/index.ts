import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();
const PORT = 3001;

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req: Request, res: Response) => {
  console.log("getリクエストを受け付けました。");
  const todos = [
      {id: "id1", todo: "test1"},
      {id: "id2", todo: "test2"},
      {id: "id3", todo: "test3"},
      {id: "id4", todo: "test4"},
    ]
    
  return res.status(200).json({ todos });
});

try {
  app.listen(PORT, () => {
    console.log(`server running at://localhost:${PORT}`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
