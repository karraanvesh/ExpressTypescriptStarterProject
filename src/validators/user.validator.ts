import * as z from 'zod';

export const userSchema = z.object({
    user_id : z.string()
});