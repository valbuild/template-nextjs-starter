import { s, t } from "../../../val.config";

export const variantsSchema = s.union(
  s.literal("accent"),
  s.literal("primary"),
  s.literal("secondary"),
);

export type Variants = t.inferSchema<typeof variantsSchema>;
