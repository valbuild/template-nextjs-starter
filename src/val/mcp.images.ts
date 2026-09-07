import "server-only";
import { createValImageTools } from "@valbuild/mcp";
import { sharpImageProcessor } from "@valbuild/mcp/sharp";
import sharp from "sharp";

/**
 * Letting an agent upload images.
 *
 * In its own file because it is the one part of the MCP endpoint with a
 * dependency of its own: reading the dimensions out of a JPEG and converting it
 * to WebP needs an image library, and `sharp` ships a compiled binary per
 * platform. Val does not bundle one, so a project decides for itself — which is
 * also what `npm create @valbuild` is asking when it offers image uploads.
 *
 * To turn this off: replace the body of this file with
 *
 * ```ts
 * import type { ValToolImpl } from "@valbuild/mcp";
 * export const valImageTools: ValToolImpl[] = [];
 * ```
 *
 * and remove `sharp` from package.json. Everything else keeps working — an
 * agent can still read, validate and edit content, it just cannot add an image.
 */
export const valImageTools = createValImageTools(sharpImageProcessor(sharp));
