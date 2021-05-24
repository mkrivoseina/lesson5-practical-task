import {accessSync, readFileSync, writeFileSync} from 'fs';
import readline from 'readline'; //to be able to communicate with the console

const rl = readline.createInterface ({ // to initialize the readline module (configuration)
    input: process.stdin,
    output: process.stdout,
});


// rl.question('Enter your first name', (firstName) => {
//     rl.question('Enter your last name', (lastName) => {
//         rl.question('Enter your email ', (email) => {
//             console.log(`Your data is: ${firstName} ${lastName} ${email}`);
//             rl.close();
//         });
//     });
// });
new Promise((fulfil, reject) => {
    rl.question('Enter your first name: ', (firstName) => {
        if (firstName === 'Janis') {
            reject();
            return;
        }
        fulfil(firstName);
    })
}).then((output) => {
    return new Promise((fulfil) => {
        rl.question('Enter your last name: ', (lastName) => {
            fulfil(`${output} ${lastName}`);
        })
    })
}).then((output) => {
    return new Promise((fulfil) => {
        rl.question('Enter your email: ', (email) => {
            fulfil(`${output} ${email}`);
        })
    })
}).then((output) => {
    console.log(`Your data is ${output}`);
    
}).catch(() => {
    console.log('Sorry, your name is invalid')
   
}).finally(() => {
    rl.close();
})

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Enter your first name:
// Enter your last name:
// Enter your email:
// Your data is: ${name} ${lastName} ${email}

// rl.question('Enter your first name: ', (firstName) => {
//     rl.question('Enter your last name: ', (lastName) => {
//         rl.question('Enter your email: ', (email) => {
//             console.log(`Your data is: ${firstName} ${lastName} ${email}`);
//             rl.close();
//         });
//     });
// });

new Promise((fulfil, reject) => {
    rl.question('Enter your first name: ', (firstName) => {
        if (firstName === '') {
            reject('First name was empty.');
            return;
        }

        fulfil(firstName);
    });
}).then((output) => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your last name: ', (lastName) => {
            if (lastName === '') {
                reject('Last name was empty.');
                return;
            }
            fulfil(`${output} ${lastName}`);
        });
    });
}).then((output) => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your email: ', (email) => {
            if (email === '') {
                reject('Email was empty.');
                return;
            }
            fulfil(`${output} ${email}`);
        });
    });
}).then((output) => {
    console.log(`Your data is ${output}`);
}).catch((errorMessage) => {
    console.log(errorMessage);
}).finally(() => {
    rl.close();
});


import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Enter your first name:
// Enter your last name:
// Enter your email:
// Your data is: ${name} ${lastName} ${email}

// rl.question('Enter your first name: ', (firstName) => {
//     rl.question('Enter your last name: ', (lastName) => {
//         rl.question('Enter your email: ', (email) => {
//             console.log(`Your data is: ${firstName} ${lastName} ${email}`);
//             rl.close();
//         });
//     });
// });

new Promise((fulfil, reject) => {
    rl.question('Enter your first name: ', (firstName) => {
        if (firstName === '') {
            reject('First name was empty.');
            return;
        }

        fulfil(firstName);
    });
}).then((output) => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your last name: ', (lastName) => {
            if (lastName === '') {
                reject('Last name was empty.');
                return;
            }
            fulfil(`${output} ${lastName}`);
        });
    });
}).then((output) => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your email: ', (email) => {
            if (email === '') {
                reject('Email was empty.');
                return;
            }
            fulfil(`${output} ${email}`);
        });
    });
}).then((output) => {
    console.log(`Your data is ${output}`);
}).catch((errorMessage) => {
    console.log(errorMessage);
}).finally(() => {
    rl.close();
});

