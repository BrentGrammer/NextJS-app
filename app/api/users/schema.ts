import { z } from "zod";

// define the shape of the objects to validate
const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  // age: z.number()
});

export default schema;
