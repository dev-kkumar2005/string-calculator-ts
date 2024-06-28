
import { add } from '../src/stringCalculator';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  it('should return the number itself for a single number', () => {
    expect(add('1')).toBe(1);
    expect(add('2')).toBe(2);
  });

  it('should return the sum of two numbers', () => {
    expect(add('1,2')).toBe(3);
  });

  it('should return the sum of multiple numbers', () => {
    expect(add('1,2,3')).toBe(6);
    expect(add('4,5,6,7')).toBe(22);
  });
});
