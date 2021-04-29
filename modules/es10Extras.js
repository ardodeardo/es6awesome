function convertToObject() {

    const id = new Map([
        ['name', 'ardodeardo'],
        ['function', 'Front End Web Dev']
    ]);
    console.log(id);

    const obj = Object.fromEntries(id);

    console.log(obj); // Object { name: "ardodeardo", function: "Front End Web Dev" }
}

function convertToArray() {
    const id = {
        name: "ardodeardo", 
        function: "Front End Web Dev"
    }
    console.log(id);

    const arr = Object.entries(id);

    console.log(arr); // Array [ ["name", "ardodeardo"], ["function", "Front End Web Dev"] ]
}

export { convertToObject, convertToArray };