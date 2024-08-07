import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// routes
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Camper shop server is running!");
});

// Global error handler
app.use(globalErrorHandler);

// Not found (404) route

export default app;
