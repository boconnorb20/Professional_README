// this requires/calls inquirer
const inquirer = require('inquirer');
// this requires the generateMarkdown in ifle
const generateMarkdown = require('./utils/generateMarkdown.js')
// this requires/calls file system
const fs = require('fs')

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Please provide the title of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please provide a description of your project?',
    },
    {
        type: 'checkbox',
        name: 'Contents',
        choices: ['Title', 'Description', 'Table of Contents', 'Installations', 'Usage', 'License', 'Contributors', 'Testing', 'GitHub Repo', 'Email for question inquiries'],
        message: 'Please select the bullet points you would like to include in the Table of Contents?',

    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Please provide required installations for this application?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide the usage instructions?',
    },
    {
        type: 'list',
        name: 'License',
        choices: ['Apache License 2.0', ' MIT License', 'Eclipse Public License 2.0'],
        message: 'Select the type of licese.',
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'Please provide the application contributing members.'
    },
    {
        type: 'input',
        name: 'Test',
        message: 'Please provide testing instructions for this application.'
    },
    {
        type: 'input',
        name: 'Github',
        message: 'Please provide your GitHub username.',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Please provide your email for inquiries regarding your application.',
    }
];

// This function is to write the README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// the function will start up the program 

function init() {
        // begins questions 
        inquirer.prompt(questions)
        // writes file READMEGenerated.md using data from generateMarkdown
        .then((data) => writeToFile('READMEGenerated.md', generateMarkdown(data)))
        // once printed with no erros a succesful command is displayed
        .then(() => console.log("README successfully written."))
        .catch((err) => console.log(err))
}

// Function call to initialize app
init();