import { convert } from '../src/index';

describe('FizzBuzz:', () => {
  test('convert 0 to "0"', () => {
    expect(convert(0)).toBe('0');
  })

  test('convert 1 to "1"', () => {
      expect(convert(1)).toBe('1');
  })

  test('convert 2 to "2"', () => {
      expect(convert(2)).toBe('2');
  })

  test('convert 3 to "Fizz"', () => {
      expect(convert(3)).toBe('Fizz');
  })

  test('convert 4 to "4"', () => {
      expect(convert(4)).toBe('4');
  })

  test('convert 5 to "Buzz"', () => {
      expect(convert(5)).toBe('Buzz');
  })

  test('convert 6 to "Fizz"', () => {
      expect(convert(6)).toBe('Fizz');
  })

  test('convert 10 to "Buzz"', () => {
      expect(convert(10)).toBe('Buzz');
  })

  test('convert 15 to "FizzBuzz"', () => {
      expect(convert(15)).toBe('FizzBuzz');
  })
})