const date = (day: number) => {

  const text: string[] = [
    'And a partridge in a pear tree.',
    'Two turtle doves,',
    'Three French hens,',
    'Four calling birds,',
    'Five golden rings,',
    'Six geese a-laying,',
    'Seven swans a-swimming,',
    'Eight maids a-milking,',
    'Nine ladies dancing,',
    'Ten lords a-leaping,',
    'Eleven pipers piping,',
    'Twelve drummers drumming,'
  ];
  
  const order: string[] = [
    'First', 
    'Second', 
    'Third', 
    'Fourth', 
    'Fifth', 
    'Sixth', 
    'Seventh', 
    'Eighth', 
    'Ninth', 
    'Tenth', 
    'Eleventh', 
    'Twelfth'
  ];
  
  let verse:string = `On the ${order[day - 1]} day of Christmas,\nMy true love gave to me:\n`;

  for (let i = day - 1; i >= 0; i--) {
    if(day > 1 && i === 0){
      verse += `${text[i]}`;
    } else if (day > 1) {
      verse += `${text[i]}\n`;
    } else {
      verse += `A partridge in a pear tree.`;
    }
  }

  return verse;
}

export default date;
