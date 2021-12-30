/****
0 - Luke
1 - Leia
2 - Han
3 - Chewie
***/

var characters = ['Luke', 'Leia', 'Han', 'Chewie'];
console.log(characters);

characters.splice(0, 1, 'Rey'); //two param - startin pos, how many to remove (3. optional -> change value) in this example we change the first element to Rey
console.log(characters);

//remove 2 and replace with one
characters.splice(1, 2, 'Kylo');
console.log(characters);
//reverse -> replace 1 with two
characters.splice(1, 1, 'C3PO', 'R2D2');
console.log(characters);
//just remove items - the middle 2
characters.splice(1, 2);
console.log(characters);

//SORTINGS
characters.push('BB8');
characters.push('Obi-van');
console.log(characters);

//reverse - it reverses the indexes first becomes last and so on
characters.reverse();
console.log(characters);
//sort - ascending sorting
characters.sort();
console.log(characters);
//for reverse alphabetical -> first sort and then reverse - right now just reverse, it's already in order
characters.reverse();
console.log(characters);

//INDEXOF AND LASTINDEXOF
var position = characters.indexOf("Leia"); 
console.log(position); //not in the list so it returns -1
position = characters.indexOf("Rey");
console.log(position); // it's in the array, so return the value

//lastIndexOf does the same, but it start from the end - it the are more of the same value, it matters
var myList = ['Blöki', "Kutya", "Blöki"];
position = myList.lastIndexOf("Blöki"); //return 2
console.log(position);
position = myList.indexOf("Blöki"); //return 0
console.log(position);



