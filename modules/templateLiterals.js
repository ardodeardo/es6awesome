function regularStrings() {
    
    let mcdBurger = [
        'Beef Burger', 'Cheese Burger', 'Big Mac'
    ];

    let message = 
        'I would like to order:\n\n' +
        '1 ' + mcdBurger[0] + ' with extra sauce,\n' +
        '2 ' + mcdBurger[1] + 'and 3 ' + mcdBurger[2] + ' please :)';

    console.log(message);
}

function templateStrings() {
    
    let mcdBurger = [
        'Beef Burger', 'Cheese Burger', 'Big Mac'
    ];

    let message = 
`I would like to order:
1 ${ mcdBurger[0] } with extra sauce, 
2 ${ mcdBurger[1] } and 3  ${ mcdBurger[2] } please :)`;

    console.log(message);
}

export { regularStrings, templateStrings };