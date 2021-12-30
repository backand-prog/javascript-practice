//binary logical operators
//and &&
//or ||
//creating compoung if statements


let ingredients = ['ham', 'cheddar', 'tomato'];

let sandwichHas = function (ingredient) {
    for(let i of ingredients) {
        if ( i == ingredient) {
            return true
        }
    }
    return false;
}

if( sandwichHas('ha')  || sandwichHas('chicken') || sandwichHas('beef') ) {
    console.log ('Sandwich has meat')
} else {
    console.log ('No CHESE')
}

if (sandwichHas('lettuce') && sandwichHas('ham')){
    console.log('it has both')
} else {
    console.log('it has not both but maybe one of them')
}

if ( sandwichHas('cheddar') && sandwichHas('dd') || sandwichHas('tomato') && sandwichHas('cheddar')){
    console.log('cheese and lettuce .. OR onion');
} else {
    console.log("failed final test");
}
