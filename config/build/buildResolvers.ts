import webpack, { ResolveOptions } from "webpack"; //to access built-in plugins

export function buildResolves(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
