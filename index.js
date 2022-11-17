// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatorMark = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the steps to install your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How do you use your project? Provide examples',
        name: 'usage'
    },
    {
        type: 'checkbox',
        message: 'What are the license to your project?',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU General Public v3.0', 'MIT', 'BSD 2-Clause "Simplified', 'Boost Software 1.0', 'Creative Commons Zero v1.0 Universal',
    'Eclipse Publice 2.0', 'GNU Affero General v3.0', 'GNU General v2.0', 'GNU Lesser General v2.1', 'Mozilla 2.0', 'The Unlicense']
    },
    {
        type: 'input',
        message: 'What contributions are there to your project?',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'What tests have you done to the project?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('README.md',generatorMark(data));
        });
}

// Function call to initialize app
init();

