import * as z from 'zod';

export const userQueryParamsSchema = z.object({
    name : z.string(),
    company : z.string(),
    age : z.number().int().positive(),
    salary : z.number().int().positive(),
    designation : z.string()
});