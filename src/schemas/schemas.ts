import { z } from 'zod'

// Schemas
const userSchema = z.object({
    name: z.string(),
    age: z.number()
})


// Types
export type User = z.infer<typeof userSchema>