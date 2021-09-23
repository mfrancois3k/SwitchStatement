let favMovie = "star wars";
let moviePhrase;

switch (favMovie) {
  case "jaws":
    moviePhrase = "You're gonna need a bigger boat."
    return console.log(moviePhrase);
  case "the shinning":
    moviePhrase = "All work no play makes Jack a dull boy."
    return console.log(moviePhrase);
  case "star wars":
    moviePhrase = "Do. Or do not. There is no try."
    return console.log(moviePhrase);
  case "forrest gump":
    moviePhrase = "Life was like a box of chocolates."
    return console.log(moviePhrase);
  case "back to the future":
    moviePhrase = "Where we're going, we don't need roads"
    return console.log(moviePhrase);
  default:
    moviePhrase = "Great movie choice"
    return console.log(moviePhrase);
}

let max = 50;
let result;
for (let i = 1; i <= max; i++){
  if (i % 3 == 0 && i % 5 == 0) {
    result = "fizzbuzz";
  }
  else if (i % 3 == 0) {
    result = "fizz";
  }
  else if (i % 5 == 0) {
    result = "buzz";
  }
  else if (i % 3 != 0 || i % 5 != 0) {
    result = i;
  }
  console.log(result);
}