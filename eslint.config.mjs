import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import valbuild from "@valbuild/eslint-plugin";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  // @valbuild/eslint-plugin only ships a legacy (eslintrc) `recommended`
  // config, so register the plugin and its rules directly for flat config.
  {
    plugins: { "@valbuild": valbuild },
    rules: valbuild.configs.recommended.rules,
  },
];

export default eslintConfig;
