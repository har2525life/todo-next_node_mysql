import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();
const PORT = 3001;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post('/add', (req: Request, res: Response) => {
  console.log('postメソッドを受け付けました。')
  console.log(req.body.data.todo)
  // const id = 
  return res.status(200).json({message: "POST"})
})

app.put('/update', (req: Request, res: Response) => {
  console.log('putメソッドを受け付けました。')
  console.log(req)
  return res.status(200). json({message: "put"})
})

app.post('/delete', (req: Request, res: Response) => {
  console.log('deleteメソッドを受け付けました。')
  console.log(req)
  return res.status(200). json({message: "delete"})
})

try {
  app.listen(PORT, () => {
    console.log(`server running at://localhost:${PORT}`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
