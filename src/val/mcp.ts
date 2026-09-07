import "server-only";
import { initValMcp } from "@valbuild/next/server";
import prettier from "prettier";
import { config } from "../../val.config";
import valModules from "../../val.modules";
import prettierOptions from "../../.prettierrc.json";
import { valImageTools } from "./mcp.images";

/**
 * Val's content tools, ready to mount on an MCP transport.
 *
 * Separate from `val.server.ts` because the two share nothing but the modules:
 * the API router serves the Studio in a browser, and this serves an agent that
 * has none. The formatter is passed to both for the same reason — a patch
 * written to disk in local dev should come out formatted the way this repo
 * formats everything else, whichever path wrote it.
 *
 * The transport itself is in `src/app/api/mcp/route.ts`. Everything
 * security-relevant is here and in `@valbuild/mcp`: which requests may reach
 * the tools at all, and whose credential they carry.
 */
const { valMcpAuthorize, valMcpTools, valMcpMetadata } = initValMcp(
  valModules,
  config,
  {
    extraTools: valImageTools,
    formatter: (code: string, filePath: string) => {
      return prettier.format(code, {
        filepath: filePath,
        ...prettierOptions,
      } satisfies prettier.Options);
    },
    /**
     * Where to authorize, when this app is configured for it.
     *
     * Read from the environment rather than hardcoded, and absent by default,
     * because the two are genuinely different deployments: local development
     * has no authorization server to talk to and wants the endpoint to work
     * without one, while a deployed app must not serve MCP to whoever asks.
     * Set both and every call needs a verified access token.
     */
    ...(process.env.VAL_OAUTH_ISSUER && process.env.VAL_MCP_RESOURCE
      ? {
          oauth: {
            issuer: process.env.VAL_OAUTH_ISSUER,
            resource: process.env.VAL_MCP_RESOURCE,
          },
        }
      : {}),
  },
);

export { valMcpAuthorize, valMcpTools, valMcpMetadata };
