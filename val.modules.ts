import { modules } from "@valbuild/next";
import { config } from "./val.config";

export default modules(config, [
  // Add your modules here
  { def: () => import("./src/app/(main)/page.val") },
  { def: () => import("./src/app/(main)/products/[sku]/page.val") },
]);
