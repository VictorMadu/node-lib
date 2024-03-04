import type { Options } from 'tsup';

export const tsup: Options = {
  splitting: true,
  clean: true, // Clean up the dist folder
  dts: true, // Generate dts files
  format: ['cjs', 'esm'], // Generate cjs and esm files
  minify: process.env.NODE_ENV === 'production',
  bundle: process.env.NODE_ENV === 'production',
  skipNodeModulesBundle: true,
  entryPoints: [
    'src/time/index.ts', // Entry point for the time folder
    'src/util/index.ts', // Entry point for the util folder
    'src/exception/index.ts', // Entry point for the exception folder
  ],
  watch: process.env.NODE_ENV === 'development',
  target: 'es2020',
  outDir: process.env.NODE_ENV === 'production' ? 'dist' : 'lib',
};
