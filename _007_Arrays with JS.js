var characters = ['Luke', 'Leia', 'Han', 'Chewie'];
//array = numbered list of items
//I can put anything inside it

console.log(characters);
console.log(characters.length);

//it's indexed from 0
console.log(characters[0]); //first element
//score brackets refers to the index
//index of the last element is always -1 of the length
console.log(characters[characters.length-1]);

//adding element
characters.push('Anakin'); //added to the end of the array
characters.push('Obi-van');
console.log(characters);

characters.pop(); //removes the last element
characters.pop();

console.log(characters);

//adding element to the beggining shift - unshift
characters.unshift("C3PO"); //adds to the beginning
characters.unshift("R2D2");
console.log(characters);

characters.shift(); //it removes the first item
characters.shift();

console.log(characters);
//calling removing method gives back removed element
var rem = characters.shift(); //it stores the first element in var when removing
console.log(rem);

