import date from '../src';

test('First day:', () => {
  expect(date(1)).toBe(
    `On the First day of Christmas,
My true love gave to me:
A partridge in a pear tree.`
  );
});

test('Second day:', () => {
  expect(date(2)).toBe(
    `On the Second day of Christmas,
My true love gave to me:
Two turtle doves,
And a partridge in a pear tree.`
  );
});

test('Third day:', () => {
  expect(date(3)).toBe(
    `On the Third day of Christmas,
My true love gave to me:
Three French hens,
Two turtle doves,
And a partridge in a pear tree.`
  );
});

test('Twelfth day:', () => {
  expect(date(12)).toBe(
    `On the Twelfth day of Christmas,
My true love gave to me:
Twelve drummers drumming,
Eleven pipers piping,
Ten lords a-leaping,
Nine ladies dancing,
Eight maids a-milking,
Seven swans a-swimming,
Six geese a-laying,
Five golden rings,
Four calling birds,
Three French hens,
Two turtle doves,
And a partridge in a pear tree.`
  );
});
