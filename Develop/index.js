// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genmd = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please describe your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please describe any necessary installation instructions:',
        name: 'installinstruct',
    },
    {
        type: 'input',
        message: 'Please describe any necessary usage information:',
        name: 'useinfo',
    },
    {
        type: 'input',
        message: 'Please describe the contribution guidelines:',
        name: 'contribguide',
    },
    {
        type: 'input',
        message: 'Please describe project test instructions:',
        name: 'testinstruct',
    },
    {
        type: 'list',
        message: 'Select your licensing:',
        name: 'llc',
        choices: ['choice a', 'choice b', 'choice c'],
    },
    {
        type: 'input',
        message: 'Please provide a good contact email for questions about your project:',
        name: 'email',
    },
    
];



// TODO: Create a function to write README file
function writeToFile(filename, data) {

    fs.writeFile(filename, genmd(data), (err) =>
        err ? console.error(err) : console.log('Success!')
    );

}



// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt([...questions])

    .then((data) => {
        
        const filename = `${data.title.toLowerCase().split(' ').join('')}README.md`;
        writeToFile(filename, data);

    });

}

// Function call to initialize app
init();
