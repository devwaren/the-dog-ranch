import z from "zod"

const inputSchema = z
    .string()
    .min(2, { message: "Message cannot be empty" })
    .max(1000, { message: "Message is too long (max 1000 chars)" })

// Regex to allow plain text + <button ...> ... </button>
const safeHtmlRegex =
    /^(?:[^<>]|<button(?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:="[^"]*")?)*>(.*?)<\/button>)*$/

const messageSchema = z.object({
    id: z.string(),
    role: z.enum(["user", "bot"]),
    text: z
        .string()
        .min(1)
        .max(1000)
        .regex(safeHtmlRegex, {
            message: "Only <button> elements are allowed in messages",
        }),
    ts: z.number(),
})

export { inputSchema, messageSchema }
