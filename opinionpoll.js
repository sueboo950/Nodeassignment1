import { hello, displayadLib } from './functions.js';
import { checkbox, input } from '@inquirer/prompts';

// Ask for the user's name
const userName = await input({ message: 'Enter your name:' });
console.log(`Hello ${userName}, welcome to the poll!`);

// Call the hello function from functions.js
hello(userName);

// Salty snacks prompt
const saltySnacks = await checkbox({
    message: 'Select your favorite salty snacks:',
    choices: [
        { name: 'fries', value: 'fries' },
        { name: 'peanuts', value: 'peanuts' },
        { name: 'chips', value: 'chips' },
        { name: 'popcorn', value: 'popcorn' }
    ]
});

// Sweet snacks prompt
const sweetSnacks = await checkbox({
    message: 'Select your favorite sweet snacks:',
    choices: [
        { name: 'Candy', value: 'candy' },
        { name: 'chocolate', value: 'chocolate' },
        { name: 'taffy', value: 'taffy' },
        { name: 'honey', value: 'honey' }
    ]
});

// Savory snacks prompt
const savorySnacks = await checkbox({
    message: 'Select your favorite savory snacks:',
    choices: [
        { name: 'Chili chips', value: 'chili chips' },
        { name: 'cheese', value: 'cheese' },
        { name: 'pizza bites', value: 'pizza bites' },
        { name: 'pretzel', value: 'pretzel' }
    ]
});

// Log all answers
console.log(`Salty Snacks: ${saltySnacks}`);
console.log(`Sweet Snacks: ${sweetSnacks}`);
console.log(`Savory Snacks: ${savorySnacks}`);

// Call the displayadLib function from functions.js if needed
displayadLib();