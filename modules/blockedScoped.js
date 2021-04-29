

function thisIsVar() {
    // scoping
    var x = 1; {
        var x = 2; // same variable!
        console.log(x); // 2
    }
    console.log(x); // 2

    // redeclaration
    if (x) {
        var y;
        var y; // won't be an error
    }

    // hoisting
    console.log(`%c${z}`, config.theme.red); // undefined
    var z = 3;
    console.log(z); // 3
}

// global object property
var varExistInGlobal = "exist!";
console.log(window.varExistInGlobal); // exist!

function thisIsLet() {
    // scoping
    let x = 1; {
        let x = 2; // different variable
        console.log(x); // 2
    }
    console.log(x); // 1

    // redeclaration (uncomment to show the result)
    // if (x) {
    //     let y;
    //     let y; // SyntaxError
    // }

    // hoisting (uncomment to show the result)
    // console.log(z); //ReferenceError
    // let z = 3;
    // console.log(z); // 3
    
}

// global object property
let letExistInGlobal = "not exist!";
console.log(window.letExistInGlobal); // undefined

export { thisIsVar, thisIsLet };