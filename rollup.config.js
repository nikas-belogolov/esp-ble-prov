import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [{
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
      }
    ],
    plugins: [
      resolve({ extensions: ['.js', '.ts'] }),
      commonjs(),
      typescript({ 
        tsconfig: './tsconfig.json',
        sourceMap: true,
        declaration: true,
        declarationDir: "dist/types" // Let TypeScript handle declaration generation separately
      })
    ],
    external: [] // Add external dependencies here if needed
  }, {
    input: "dist/types/index.d.ts", // Entry point for declarations
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  }]