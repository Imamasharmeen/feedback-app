import { Hono } from "jsr:@hono/hono@4.6.5";
import { cors } from "jsr:@hono/hono@4.6.5/cors";
import * as feedbackRepository from "./feedbackRepository.js";

const app = new Hono();
app.use("/*", cors());

app.get("/feedbacks/:value", async (c) => {
  const value = c.req.param("value");
  const count = await feedbackRepository.getFeedbackCount(value);
  return c.json({ count });
});

app.post("/feedbacks/:value", async (c) => {
  const value = c.req.param("value");
  const count = await feedbackRepository.incrementFeedbackCount(value);
  return c.json({ count });
});

export default app;