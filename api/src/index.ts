import { Hono } from "hono";
import { drizzle } from "drizzle-orm/d1";
import { type } from 'arktype'
import { arktypeValidator } from '@hono/arktype-validator'


const app = new Hono<{ Bindings: Env }>();

app.post("/add-message", arktypeValidator('json', type({ name: 'string', message: 'string' })), (c) => {
	const db = drizzle(c.env.DB);
	return c.text("Hello Hono!");
});

export default app;
