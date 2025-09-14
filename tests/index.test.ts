import { describe, it, expect } from 'vitest';

import { main } from '../src/index';

describe('main', () => {
  it('should be defined', () => {
    expect(main).toBeDefined();
    expect(typeof main).toBe('function');
  });
});
