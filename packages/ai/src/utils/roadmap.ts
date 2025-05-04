import { z } from "zod";

export const RoadmapSchema = z.object({
  backend: z.string(),
  frontend: z.string(),
  qa: z.string(),
});
export type Roadmap = z.infer<typeof RoadmapSchema>;
