import "server-only";
import { initValServer } from "@valbuild/next/server";
import { config } from "../../val.config";
import { draftMode } from "next/headers";
import valModules from "../../val.modules";
import prettier from "prettier";
import prettierOptions from "../../.prettierrc.json";

const { valNextAppRouter } = initValServer(
  valModules,
  { ...config },
  {
    draftMode,
    formatter: (code: string, filePath: string) => {
      return prettier.format(code, {
        filepath: filePath,
        ...prettierOptions,
      } satisfies prettier.Options);
    },
  },
);

export { valNextAppRouter };
