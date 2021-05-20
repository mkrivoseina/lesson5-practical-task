import {accessSync, readFileSync, writeFileSync} from 'fs';
import readline from 'readline'; //to be able to communicate with the console

const rl = readline.createInterface ({ // to initialize the readline module (configuration)
    input: process.stdin,
    output: process.stdout,
});
const filePath = `${process.cwd()}/addname.json`;

// const storeData = (nameToAdd) => {
    try {
       accessSync(filePath); //passing the file path
        let jsonObject = readFileSync(filePath, 'utf8');
        const decodeObject = JSON.parse(jsonObject);
        const name = decodeObject.name;
        console.log(`The current name is: ${name}`)
        rl.question('Please enter the new name: ', (answer) => {
            decodeObject.name = answer;
            writeFileSync(filePath, JSON.stringify(decodeObject));
            console.log(`The new name is: ${answer}`);
            rl.close();
        })
    
    } catch(err) {
        console.log('Something went wrong', err);
    }
   
    // rl.question('Please enter a name: ', (answer) => {
    //     storeData(answer);
    //     rl.close();
    // })
