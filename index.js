const data = require('./data.json')
const fs = require('fs')

// console.log(data);
// let dataObj = JSON.stringify(data, null, 3);
// console.log(dataObj);

const stringparts = data.map((e) => {
    return e.id + ' - ' + e.title + '\n' + e.description
})

console.log(stringparts.join('\n\n'));

const outputString = stringparts.join('\n\n')

fs.writeFile('string.txt', outputString, () => {
    return
})