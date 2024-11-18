import generateTree from '../src/';

test('display height is 3', () => {
  expect(generateTree(3)).toBe(
    `  *
 ***
*****
  |`
  );
});


test('display height is 2', () => {
  expect(generateTree(2)).toBe(
    ` *
***
 |`
  );
});

test('display height is 1', () => {
  expect(generateTree(1)).toBe(
    `*
|`
  );
});
