## Installation
```bash
npm i tslint@latest -g
npm i typescript@latest -g
npm list -g --depth 0
```

## Initialization
```bash
tslint --init
tsc --init
```

### Tests
```bash
npm i -D @types/jasmine jasmine jasmine-ts
```
```json
  "scripts": {
    "test:ah:1": "jasmine-ts --config=lesson-1/AntonHryshchanka/jasmine.json"
  },
```