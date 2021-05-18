import {nodeResolve} from "@rollup/plugin-node-resolve"
export default {
  input: "./src/index.js",
  output: {
    name: 'programmable',
    file: "./index.js",
    format: "iife"
  },
  plugins: [nodeResolve()]
}
