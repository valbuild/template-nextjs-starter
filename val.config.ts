import { initVal } from "@valbuild/next";

const { s, c, val, config, nextAppRouter } = initVal({
  defaultTheme: "light",
});

export type { t } from "@valbuild/next";
export { s, c, val, config, nextAppRouter };
