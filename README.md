# load-ts-paths
Read the paths information defined in tsconfig.json and make it usable in babel-plugin-module-resolver.

## install
```js
yarn add babel-plugin-module-resolver load-ts-paths
```

## usage

> babel.config.js

```js
const {loadTsPaths} = require('load-ts-paths')

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src'],
        alias: loadTsPaths('./tsconfig.json'),
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
}
```
