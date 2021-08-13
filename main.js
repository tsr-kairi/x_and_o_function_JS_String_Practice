// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.

function XO(str) {
  // Setting variable for x and o.
  let x = 0;
  let o = 0;
  //  Looping through 'str'.
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "o") {
      o++;
    } else if (str[i].toLowerCase() === "x") {
      x++;
    }
  }
  return x === o ? true : false;
}

// console.log(XO("ooxx"));
