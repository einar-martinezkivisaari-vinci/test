// src/index.ts
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello TypeScript + Express!');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

//test
app.get("/hello5", (_req, res) => {
  res.send("hello5");
})

app.get("/hello", (_req, res) => {
  res.send("hello");
})

export default app;