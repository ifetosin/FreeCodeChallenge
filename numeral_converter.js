let num_array = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let sym = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

function convertToRoman(num)
{
let result = "";
  for (let counter = 0; counter < num_array.length; counter++) {
    while (num_array[counter] <= num) {
      result = result.concat(sym[counter]);
      num -= num_array[counter];
    }
   }
      //console.log('\"' + result + '\"');
        return result; 
}

// test here
convertToRoman(36);