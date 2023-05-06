import { describe, expect, it } from '@jest/globals';
import { invariant } from './assert';

describe('assert', () => {
  describe('invariant()', () => {
    it('throws an error if the condition is false', () => {
      expect(() => invariant(false, 'message')).toThrowError('message');
    });

    it('does not throw an error if the condition is true', () => {
      expect(() => invariant(true, 'message')).not.toThrow();
    });
  });
});
