import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');
const options = require('./tsconfig.json');

module.exports = {
  input: 'src/build.ts',
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
  external: [
    'react',
    'axios',
    'date-fns',
    'framer-motion',
    'react-tailwindcss-datepicker',
    'slugify',
    'sweetalert2',
    'clsx',
    'tailwind-merge',
  ],
  plugins: [
    typescript({
      compilerOptions: options.compilerOptions,
      exclude: ['index.tsx', 'App.tsx', 'stories'],
    }),
    json(),
    resolve(),
    commonjs(),
    postcss({
      config: { path: './postcss.config.js' },
      extensions: ['.css'],
      minimize: true,
      inject: { insertAt: 'top' },
    }),
  ],
};
