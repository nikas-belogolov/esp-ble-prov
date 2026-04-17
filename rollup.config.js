import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import eslint from '@rollup/plugin-eslint';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({ extensions: ['.js', '.ts'] }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        sourceMap: true,
        exclude: ['**/proto.js'],
        declaration: true,
        declarationDir: 'dist/types',
      }),
      eslint({
        fix: true,
        throwOnError: true,
        exclude: ['node_modules/**', 'dist/**'],
        overrideConfigFile: './eslint.config.js',
      }),
    ],
    external: [],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
