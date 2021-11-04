// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const generatePage = require('.utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Github name',
            message: 'What is your github username? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your github username!');
                    return false;
                }
            }
        },
     ])
}

const promptProject = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project-Title',
            message: 'What is your project name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'project-description',
            message: 'Write something about your project. Such as description, motivation, or why you made it. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project-description');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'project-languages',
            message: 'What languages did you use to create this application? Select all that apply.',
            choices: ['Javascript', 'CSS', 'HTML', 'Node', 'Other']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What steps are needed to install the application?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What will this application be used for?'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Who were contributors on this project?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select the appropriate license for this project',
            choices: [
                'Apache',
                'GNU',
                'GPL',
                'ISC',
                'MIT',
                'Open'
            ]
        },
        {
            // badges
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Are there any tests included? Please describe.'
        },
        {
            type: 'input',
            name: 'contact-info',
            message: 'Please enter your Github username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email:'
        }


    ])
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

promptUser()
    .then(promptProject)
    .then(writeToFile => {
        
    });