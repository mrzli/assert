export function invariant(
  condition: boolean,
  message: string
): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

const x: string | undefined = Math.random() > 0.5 ? 'some value' : undefined;
invariant(x !== undefined, 'x must be defined');
// if we get to this point, x is now strictly a string
let y: string;
