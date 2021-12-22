# load-ts-paths
tsconfig.json에 정의된 paths 정보를 읽어와 metro, webpack에서 사용할 수 있게 한다.

## usage

> metro.config.js

```js
const { loadTsPaths } = require('load-ts-paths')

module.exports = {
  ...
  resolver: {
    extraNodeModules: loadTsPaths('./tsconfig.json'),
  },
}
```

> webpack.config.js

```js
const { loadTsPaths } = require('load-ts-paths')

module.exports = {
  ...
  resolve: {
    ...
    alias: loadTsPaths('./tsconfig.json')
  }
}
```

> next.config.js

```js
const { loadTsPaths } = require('load-ts-paths')


webpack(config, options) {
  loadTsPaths('./tsconfig.json', config)
}
```

