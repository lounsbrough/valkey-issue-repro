### Reproduction Steps for [Issue 2812](https://github.com/valkey-io/valkey-glide/issues/2812)

- Use Node 22
- Run
  ```sh
  pnpm i
  pnpm dev
  ```

### Result I see when I run this
```
node:internal/modules/cjs/loader:1145
  const err = new Error(message);
              ^

Error: Cannot find module 'protobufjs'
Require stack:
- /Users/david/repos/valkey-issue-repro/node_modules/.pnpm/@valkey+valkey-glide-darwin-arm64@1.2.0/node_modules/@valkey/valkey-glide-darwin-arm64/build-ts/src/BaseClient.js
- /Users/david/repos/valkey-issue-repro/node_modules/.pnpm/@valkey+valkey-glide-darwin-arm64@1.2.0/node_modules/@valkey/valkey-glide-darwin-arm64/build-ts/index.js
- /Users/david/repos/valkey-issue-repro/node_modules/.pnpm/@valkey+valkey-glide@1.2.0/node_modules/@valkey/valkey-glide/build-ts/index.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1145:15)
    at Module._load (node:internal/modules/cjs/loader:986:27)
    at Module.require (node:internal/modules/cjs/loader:1233:19)
    at require (node:internal/modules/helpers:179:18)
    at Object.<anonymous> (/Users/david/repos/valkey-issue-repro/node_modules/.pnpm/@valkey+valkey-glide-darwin-arm64@1.2.0/node_modules/@valkey/valkey-glide-darwin-arm64/build-ts/src/BaseClient.js:55:22)
    at Module._compile (node:internal/modules/cjs/loader:1358:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
    at Module.load (node:internal/modules/cjs/loader:1208:32)
    at Module._load (node:internal/modules/cjs/loader:1024:12)
    at Module.require (node:internal/modules/cjs/loader:1233:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/Users/david/repos/valkey-issue-repro/node_modules/.pnpm/@valkey+valkey-glide-darwin-arm64@1.2.0/node_modules/@valkey/valkey-glide-darwin-arm64/build-ts/src/BaseClient.js',
    '/Users/david/repos/valkey-issue-repro/node_modules/.pnpm/@valkey+valkey-glide-darwin-arm64@1.2.0/node_modules/@valkey/valkey-glide-darwin-arm64/build-ts/index.js',
    '/Users/david/repos/valkey-issue-repro/node_modules/.pnpm/@valkey+valkey-glide@1.2.0/node_modules/@valkey/valkey-glide/build-ts/index.js'
  ]
}
```
