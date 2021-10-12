import babel from '@rollup/plugin-babel'
import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss-modules'
import del from 'rollup-plugin-delete'
import pkg from './package.json'

import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

console.log('Expected Externals', [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  './src',
])

const extensions = ['.js', '.jsx', '.ts', '.tsx']

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: {
    index: 'src/index.tsx',
    button: 'src/components/Button/index.tsx',
  },
  external: [
    './src'
  ],
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'named'
    },
    {
      dir: 'dist/esm',
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'named'
    }
  ],
  plugin: [
    external(),
    typescript(),
    nodeResolve({
      ignoreGlobal: false,
      include: ['node_modules/**'],
      // eslint-disable-next-line no-undef
      extensions,
      // skip: keys(EXTERNALS), // <<-- skip: ['react', 'react-dom']
    }),
    commonjs({
      ignoreGlobal: false,
      include: 'node_modules/**',
    }),
    postcss({
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
      // modules: true,
      minimize: true,
      sourceMap: false,
      // extract: false,
      // eslint-disable-next-line no-dupe-keys
      minimize: true,
      modules: {
        // see generateScopedName options here
        // https://github.com/css-modules/postcss-modules
        generateScopedName: '[local]',
      },
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions,
    }),
    del({ targets: ['dist/*'] }),
  ]
}
