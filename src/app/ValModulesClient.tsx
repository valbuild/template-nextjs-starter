"use client";

import { ValModulesClient as Base } from "@valbuild/next";
import valModules from "../../val.modules";

/**
 * Registers `val.modules` on the client so Val Studio can read your schemas and
 * content.
 *
 * The `def` entries in `val.modules` are function closures, so the registry
 * cannot cross the Server -> Client Component boundary as a prop: it has to be
 * imported into the client bundle, which is what this wrapper is for.
 *
 * Render it inside BOTH `<ValProvider>` (the app layout) and `<ValApp>` (the
 * /val page). Without it the Studio loads but never gets any content.
 */
export function ValModulesClient() {
  return <Base modules={valModules} />;
}
