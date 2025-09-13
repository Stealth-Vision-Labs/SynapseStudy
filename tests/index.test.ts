import { describe, it, expect } from 'vitest';
import { main } from '../src/index';

describe('main', () => {
  it('returns ok', () => {
    expect(main()).toBe('ok');
  });
});

