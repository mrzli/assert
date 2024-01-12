# Assert Util

Some assertion utility functions.

## Installation

```sh
npm install --save @gmjs/assert
```

## Usage

All functions are exported as named exports.

```ts
import { invariant } from '@gmjs/assert';

const x: string | undefined = 'some value';
invariant(x !== undefined, 'x must be defined');
```

## API

#### `ensureNever`

Used for compile time check to make sure that the value provided to the function is of type `never`.

This can be used to make sure, at compile time, that all cases for a type are handled.

If you have the following:

```ts
type Operation = 'add' | 'subtract';

function compute(operation: Operation, op1: number, op2: number): number {
  switch (operation) {
    case 'add': {
      return op1 + op2;
    }
    case 'subtract': {
      return op1 - op2;
    }
    default: {
      return ensureNever(operation);
    }
  }
}
```

And then you decide to change `Operation`:

```ts
type Operation = 'add' | 'subtract' | 'multiply' | 'divide';
```

`compute` function will now complain at compile time until you add cases handling the new `'multiply'` and `'divide'` options, and so exhaustive handling will be ensured at compile time.

After we add the new cases, everything works again:

```ts
type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

function compute(operation: Operation, op1: number, op2: number): number {
  switch (operation) {
    case 'add': {
      return op1 + op2;
    }
    case 'subtract': {
      return op1 - op2;
    }
    case 'multiply': {
      return op1 * op2;
    }
    case 'divide': {
      return op1 / op2;
    }
    default: {
      return ensureNever(operation);
    }
  }
}
```

#### `ensureNotNull`

Throws an error if the given value is `null`, otherwise returns the given value, with the type narrowed to exclude `null`.

```ts
const x: string | null = 'some value';
const y = ensureNotNull(x);
// y is equal to 'some value', and has type string
```

```ts
const x: string | null = null;
const y = ensureNotNull(x); // this line will throw
```

#### `ensureNotNullish`

Throws an error if the given value is `null` or `undefined`, otherwise returns the given value, with the type narrowed to exclude `null` and `undefined`.

```ts
const x: string | null | undefined = 'some value';
const y = ensureNotNullish(x);
// y is equal to 'some value', and has type string
```

```ts
const x: string | null | undefined = null;
const y = ensureNotNullish(x); // this line will throw
```

```ts
const x: string | null | undefined = undefined;
const y = ensureNotNullish(x); // this line will throw
```

#### `ensureNotUndefined`

Throws an error if the given value is `undefined`, otherwise returns the given value, with the type narrowed to exclude `undefined`.

```ts
const x: string | undefined = 'some value';
const y = ensureNotUndefined(x);
// y is equal to 'some value', and has type string
```

```ts
const x: string | undefined = undefined;
const y = ensureNotUndefined(x); // this line will throw
```

#### `invariant`

Throws an error if the given condition is not truthy.

It will also narrow the type of any variable used in the condition.

```ts
const x: string | undefined = 'some value';
invariant(x !== undefined, 'x must be defined');
// from here on, x is narrowed to string type
```

```ts
const x: string | undefined = undefined;
invariant(x !== undefined, 'x must be defined'); // this line will throw
```
