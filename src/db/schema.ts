import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

/**
 * Inbound leads from the public contact / inquiry forms.
 * PRD: data tersimpan ke database ketika formulir kontak dikirim.
 */
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 160 }).notNull(),
  company: varchar("company", { length: 200 }),
  email: varchar("email", { length: 200 }).notNull(),
  whatsapp: varchar("whatsapp", { length: 40 }).notNull(),
  subject: varchar("subject", { length: 120 }).notNull(),
  message: text("message").notNull(),
  source: varchar("source", { length: 60 }).notNull().default("kontak"),
  status: varchar("status", { length: 30 }).notNull().default("baru"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type Inquiry = typeof inquiries.$inferSelect;
export type NewInquiry = typeof inquiries.$inferInsert;
