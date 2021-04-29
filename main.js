'use-strict';

import "./modules/config.js";
import { thisIsVar, thisIsLet } from "./modules/blockedScoped.js";
import { theLet, theConst } from "./modules/constant.js";
import { hi, hello } from "./modules/arrowFunction.js";
import { regularStrings, templateStrings } from "./modules/templateLiterals.js";
import { sum, multiply } from "./modules/defaultParameter.js";
import { concatItAll, spreadItAll } from "./modules/spreadOperator.js";
import { useCallback, usePromise } from "./modules/promise.js";
import { convertToObject, convertToArray } from "./modules/es10Extras.js";


const
    blockedScoped = true,
    constant = true,
    arrowFunction = true,
    templateLiteral = true,
    defaultParameter = true,
    spreadOperator = true,
    promise = true,
    es10Extras = true;


console.log('\n\n');
console.log('%cTop level object', config.theme.lightgreen);


/*
    Blocked Scoped - let
    ---------------------------------------------------------
*/

if (blockedScoped) {
    console.log('\n\n');
    console.log('%cBlocked Scope Variable', config.theme.lightgreen);

    console.log('%cvar ↓', config.theme.blue);
    thisIsVar();
    console.log("%clet ↓", config.theme.blue);
    thisIsLet();
}


/*
    Constant
    ---------------------------------------------------------
*/

if(constant) {
    console.log('\n\n');
    console.log('%cConstant', config.theme.lightgreen);

    console.log('%clet ↓', config.theme.blue);
    theLet();
    console.log('%cconst ↓', config.theme.blue);
    theConst();
}


/*
    Arrow Function
    ---------------------------------------------------------
*/

if (arrowFunction) {
    console.log('\n\n');
    console.log('%cArrow Function', config.theme.lightgreen);

    console.log('%cregular function ↓', config.theme.blue);
    hi();
    console.log('%carrow function ↓', config.theme.blue);
    hello();
}


/*
    Template Literals
    ---------------------------------------------------------
*/

if(templateLiteral) {
    console.log('\n\n');
    console.log('%cTemplate Literals', config.theme.lightgreen);

    console.log('%cRegular multiline strings ↓', config.theme.blue);
    regularStrings();

    console.log('%cTemplate literal string ↓', config.theme.blue);
    templateStrings();
}


/*
    Default Parameter
    ---------------------------------------------------------
*/

if(defaultParameter) {
    console.log('\n\n');
    console.log('%cDefault Parameter', config.theme.lightgreen);

    console.log('%cno default parameter ↓', config.theme.blue);
    sum(1,1);
    sum(1);

    console.log('%cdefault parameter ↓', config.theme.blue);
    multiply(1,2);
    multiply(1);
}


/*
    Spread Operator
    ---------------------------------------------------------
*/

if(spreadOperator) {
    console.log('\n\n');
    console.log('%cSpread Operator', config.theme.lightgreen);

    console.log('%cusing concat ↓', config.theme.blue);
    concatItAll();

    console.log('%cusing spread operator ↓', config.theme.blue);
    spreadItAll();
}


/*
    Promise
    ---------------------------------------------------------
*/

if(promise) {

    console.log('\n\n');
    console.log('%cPromise', config.theme.lightgreen);

    console.log('%crely on callback ↓', config.theme.blue);
    useCallback();

    console.log('%cuse promise ↓', config.theme.blue);
    usePromise()
        .then(
            (status) => {
                console.log(status);
                console.log('serve the fried rice');
            }
        ).catch((status) => console.log(status));
}


/*
    ES10 Extras
    ---------------------------------------------------------
*/

if(es10Extras) {
    console.log('\n\n');
    console.log('%cES10 Extras', config.theme.lightgreen);

    console.log('%cconvert array to object ↓', config.theme.blue);
    convertToObject();

    console.log('%cconvert object to array ↓', config.theme.blue);
    convertToArray();
}