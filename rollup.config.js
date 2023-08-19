import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const packageJson = require('./package.json');
const options = require('./tsconfig.json');

module.exports = {
  input: 'lib/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      exports: 'auto',
      sourcemap: true,
      inlineDynamicImports: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      exports: 'auto',
      sourcemap: true,
      inlineDynamicImports: true,
    },
  ],
  external: ['react'],
  plugins: [typescript(options.compilerOptions), json(), resolve(), commonjs()],
};
