function printSquare(lines) {
  // Ваш код здесь
  let square = "";
  for (let i = 0; i < lines; i++) {
    square = "#";
    for (let j = 1; j < lines; j++) {
      if (i === 0 || i === lines - 1) {
        square += " #";
      } else {
        if (j === lines - 1) {
          square += " #";
        } else {
          square += "  ";
        }
      }
    }
    console.log(square);
  }
}

/*
# # # # #
#       #
#       #
#       #
# # # # #
*/
printSquare(4);
