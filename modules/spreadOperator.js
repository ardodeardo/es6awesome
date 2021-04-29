function concatItAll() {

    let burgers = ['Beef Burger', 'Cheese Burger', 'Big Mac'];
    let personalCombo = ['PaNas 1', 'PaNas 2', 'PaNas Spesial'];
    let familyCombo = ['PaMer 5', 'PaMer 7']

    // concatenated array
    let combos = personalCombo.concat(familyCombo);
    
    let mcdMenu = {
        burgers: burgers,
        combo:  combos
    }

    let restaurant = {
        name: "McDonald's",
        address: "Lippo St Mark Square Karawaci",
        menu: mcdMenu // putting the object, not the values
    }

    console.log({ burgers, personalCombo, familyCombo, combos, mcdMenu });
    console.table(restaurant);
}

function spreadItAll() {

    let burgers = ['Beef Burger', 'Cheese Burger', 'Big Mac'];
    let personalCombo = ['PaNas 1', 'PaNas 2', 'PaNas Spesial'];
    let familyCombo = ['PaMer 5', 'PaMer 7']

    // spread the combo menu (array literals)
    let combos = [...personalCombo, ...familyCombo];
    
    let mcdMenu = {
        burgers: burgers,
        combo:  combos
    }

    let restaurant = {
        name: "McDonald's",
        address: "Lippo St Mark Square Karawaci",
        menu: { ...mcdMenu } // spread the mcdMenu values (object literals) 
    }

    console.log({ burgers, personalCombo, familyCombo, combos, mcdMenu });
    console.table(restaurant);

}

export { concatItAll, spreadItAll };