

function theLet() {
    // reassign value
    let PHI = 3.14;
    PHI = 22/7;
    console.log(PHI);

    // declaration
    let GRAVITY_MASS; 
    console.log(GRAVITY_MASS);
}

function theConst() {
    // reassign value (uncomment to show the result)
    // const PHI = 3.14;
    // PHI = 22/7; // TypeError, can't reassign value

    // declaration (uncomment to show the result)
    // const GRAVITY_MASS; // can't declare without assign any value;
}



export { theLet, theConst };