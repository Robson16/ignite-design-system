import type { Options } from "tsup";

export default {
  entry: ["src/index.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  external: ["react", "react-dom", "styled-components"],
  clean: true,
} as Options;
