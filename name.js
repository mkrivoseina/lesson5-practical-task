import {accessSync, readFileSync, writeFileSync} from 'fs';
import readline from 'readline';

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
})
const filePath = `${process.cwd()}/addname.json`;

const storeData = (nameToAdd) => {
    try {
       accessSync(filePath);
        let jsonObject = readFileSync(filePath, 'utf8');
        const decodeObject = JSON.parse(jsonObject);
        console.log(`The current name is: ${decodeObject.name}`)
        console.log(decodeObject.name);
        decodeObject.name = nameToAdd;
        writeFileSync(filePath, JSON.stringify(decodeObject));
        console.log('The new name is: ',(nameToAdd))
    
    } catch(err) {
        console.log('Something went wrong', err);
    }}
   
    rl.question('Please enter a name: ', (answer) => {
        storeData(answer);
        rl.close();
    })
