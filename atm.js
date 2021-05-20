// import {accessSync, readFileSync, writeFileSync} from 'fs';
// import readline from 'readline'; //to be able to communicate with the console

// const rl = readline.createInterface ({ // to initialize the readline module (configuration)
//     input: process.stdin,
//     output: process.stdout,
// });
// const filePath = `${process.cwd()}/addition.json`;
// rl.question('What do you want to do ', (answer) => {
//     if (answer !== '+' && answer !== '-') {
//         console.log('Not a valid action!')
//         rl.close();
//         return;
// }
// rl.question('How much? ', (answer2) => {
//     const answerAsNumber = parseFloat(answer2);
//     if (isNaN(answerAsNumber)) {
//         console.log('Not a number entered');
//         rl.close();
//         return;
//     }
//     try {
//         accessSync(filePath);
//         const jsonObject = readFileSync(filePath, 'utf8');
//         const decodeObject = JSON.parse(jsonObject);
//         if (answer === '+') {
//             decodeObject.balance += answerAsNumber;
//         }
//         else {
//             decodeObject.balance -+ answerAsNumber;
//         }
//         console.log(`The current balance is ${decodeObject.balance}`)
//         writeFileSync(filePath, JSON.stringify(decodeObject));
//         rl.close();
//     }
//     catch(err) {
//         console.error('Something went fron', err);
//         rl.close();
//     }
// });
// })

//FOR TRANSACTIONS:
import readline from 'readline';
import { accessSync, readFileSync, writeFileSync } from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const filePath = `${process.cwd()}/addition.json`;

rl.question('What do you want to do? ', (answer) => {
    if (answer !== '+' && answer !== '-') {
        console.log('Not a valid action, please go home!');
        rl.close();
        return;
    } 

    rl.question('How much? ', (answer2) => {
        const answerAsNumber = parseFloat(answer2);
        if (isNaN(answerAsNumber)) {
            console.log('Not a number enterd');
            rl.close();
            return;
        }
        try {
            accessSync(filePath);
            const jsonObject = readFileSync(filePath, 'utf8');
            const tansactions = JSON.parse(jsonObject);
            const newLogEntry = {
                action: answer,
                amount: answerAsNumber
            }
            tansactions.push(newLogEntry);
            writeFileSync(filePath, JSON.stringify(tansactions));
            let balance = 0;
            for (let tansaction of tansactions) {
                if (tansaction.action === '+') {
                    balance += tansaction.amount;
                } else {
                    balance -= tansaction.amount;
                }
            }

            console.log(`The current balance is: ${balance}`);
            rl.close();
        } catch(err) {
            console.error('Something went wrong', err);
            rl.close();
        }
    });
})

//MY VERSION OF HOMEWORK

// const storeData = (balanceToAdd) => {
//     try {
//        accessSync(filePath);
//         let jsonObject = readFileSync(filePath, 'utf8');
//         const decodeObject = JSON.parse(jsonObject);
//         console.log(`The current balance is: ${decodeObject.balance}`)
//         console.log(decodeObject.balance);
//         decodeObject.balance + balanceToAdd;
//         writeFileSync(filePath, JSON.stringify(decodeObject));
//         console.log('The new balance is: ',(decodeObject.balance + balanceToAdd))
    
//     } catch(err) {
//         console.log('Something went wrong', err);
//     }}
   
//     rl.question('Please tell me what to do: ', (answer) => {
//         storeData(answer);
//         rl.close();
//     })

   