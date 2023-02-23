'use strict'

const container = document.getElementById('container');

 for (let i = 1; i <= 100; i++) {

    let variable;
    const inside = document.createElement('div');
    
    if ( i % 3 === 0 && i % 5 === 0) {
        variable = 'FizzBuzz';

    } else if ( i % 3 === 0) {
        variable = 'Fizz';

    } else if ( i % 5 === 0) {
        variable ='Buzz';

    } else {
        variable = i;
    }

    console.log(variable);
    inside.append(variable);
    container.append(inside);

} 

