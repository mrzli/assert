# Assert Util

Some assertion utility functions.

## Installation

```sh
npm install --save @gmjs/assert
```

## API

#### `invariant`

Throws an error if the given condition is not truthy.

It will also narrow the type of any variable used in the condition.

```ts
import { invariant } from '@gmjs/assert';

const x: string | undefined = Math.random() > 0.5 ? 'some value' : undefined;
invariant(x !== undefined, 'x must be defined');
// from here on, x is narrowed to string
```
