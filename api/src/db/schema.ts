import { sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const messages = sqliteTable("messages", {
	id: int().primaryKey({ autoIncrement: true }),
	name: text().notNull(),
	message: text().notNull(),
	createdAt: text()
		.notNull()
		.$defaultFn(() => new Date().toISOString()),
	updatedAt: text()
		.notNull()
		.$defaultFn(() => new Date().toISOString()),
});
