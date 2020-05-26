const path = require('path');

module.exports = {
  "plugin": 'typedoc-plugin-markdown',
  "exclude": "(bin|**)/*+(index|.test).ts",
  "emitDecoratorMetadata": true,
  "excludeExternals": true,
  "excludeNotExported": true,
  "excludePrivate": true,
  "experimentalDecorators": true,
  "hideGenerator": true,
  "ignoreCompilerErrors": true,
  "includeDeclarations": false,
  "mode": "modules",
  "readme": "none",
  "gitRevision": "master",
  "skipSidebar": true,
  "theme": path.join(__dirname, './jss-docs-theme'),
  "tsconfig": path.join(__dirname, './tsconfig.json')
};