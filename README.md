<h1 align="center">@compactjs/remap</h1>
<h3 align="center">Map a value from one range to another</h3>
<p align="center">
  <a href="https://www.npmjs.com/package/@compactjs/remap" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@compactjs/remap.svg">
  </a>
  <a href="https://github.com/CompactJS/remap/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/compactjs/remap" />
  </a>
</p>
<p align="center">
  ·
  <a href="https://github.com/CompactJS/remap#readme">Homepage</a>
  ·
  <a href="https://github.com/CompactJS/remap/issues">Report Bug / Request Feature</a>
  ·
</p>

## Table of Contents

- [Installation](#Install)
- [Usage](#usage)
- [Test](#run-tests)
- [Contact](#contact)
- [Contributing](#Contributing)
- [License](#license)

## Install

### NPM:

```sh
npm install @compactjs/remap
```

### CDN:

```html
<script src="https://unpkg.com/@compactjs/remap/dist/index.umd.js"></script>
```

## Usage

```typescript
/**
 * Maps a value from one range to another
 */
function remap(
  value: number,
  min: number,
  max: number,
  targetMin: number,
  targetMax: number
): number;
```

### As module:

```javascript
import { remap } from '@compactjs/remap';
```

### Example:

```javascript
remap(0.5, 0, 1, 180, 360); // => 270
```

## Run tests

```sh
npm run test
```

## Contact

👤 **Timo Bechtel**

- Website: https://timobechtel.com
- Twitter: [@TimoBechtel](https://twitter.com/TimoBechtel)
- GitHub: [@TimoBechtel](https://github.com/TimoBechtel)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />

1. Check [issues](https://github.com/CompactJS/remap/issues)
1. Fork the Project
1. Create your Feature Branch (`git checkout -b feat/AmazingFeature`)
1. Test your changes `npm run test`
1. Commit your Changes (`git commit -m 'feat: add amazingFeature'`)
1. Push to the Branch (`git push origin feat/AmazingFeature`)
1. Open a Pull Request

### Commit messages

This project uses semantic-release for automated release versions. So commits in this project follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) guidelines. I recommend using [commitizen](https://github.com/commitizen/cz-cli) for automated commit messages.

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Distributed under the [MIT](https://github.com/CompactJS/remap/blob/main/LICENSE) License.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
