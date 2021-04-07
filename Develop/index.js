// Packages needed for this application, inquirer is installed by running 'npm i'
const inquirer = require('inquirer');
const fs = require('fs');
const genmd = require('./utils/generateMarkdown');

// Array of questions for user input
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
        message: 'Please list any necessary installation commands:',
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
        message: 'Please list any commands to test the project:',
        name: 'testinstruct',
    },
    {
        type: 'list',
        message: 'Select your licensing:',
        name: 'lic',
        choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'None'],
    },
    {
        type: 'input',
        message: 'Please provide a good contact email for questions about your project:',
        name: 'email',
    },
    {
        type: 'list',
        message: 'Will you be providing an image file for previewing or demoing your project? \n(An area and empty image link template will generate for assistance if so.)',
        name: 'mediaquest',
        choices: ['Yes -- please include after project title', 'Yes -- please include in usage information area', 'Yes -- please include both above.', 'No', ]
    },
];

// A function to write README file
function writeToFile(filename, data) {

    fs.writeFile(filename, genmd(data), (err) =>
        err ? console.error(err) : console.log('Success! \nNote: The file created uses your project title to name the new file in case of generating multiple READmes. \nDo not forget to remove this prepend after moving your READme to its respective repo folder. \nThis is especially important if using GitHub, as GitHub searches for a file named "README.md" to display.')
    );
}

// A function to initialize app
function init() { 
    inquirer.prompt([...questions])
    .then((data) => {
        
        const filename = `${data.title.toLowerCase().split(' ').join('')}README.md`;
        writeToFile(filename, data);

    });
}

// A function call to initialize function
init();