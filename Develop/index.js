// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const { generateMarkdown } = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input


const promptProject = () => {
  
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
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
            name: 'projectDescription',
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
        // {
        //     type: 'list',
        //     name: 'projectLanguages',
        //     message: 'What languages did you use to create this application? Select all that apply.',
        //     choices: ['Javascript', 'CSS', 'HTML', 'Node', 'Other']
        // },
        // {
        //     type: 'input',
        //     name: 'installation',
        //     message: 'What steps are needed to install the application?',
        // },
        // {
        //     type: 'input',
        //     name: 'usage',
        //     message: 'What will this application be used for?'
        // },
        // {
        //     type: 'input',
        //     name: 'credits',
        //     message: 'Who were contributors on this project?'
        // },
        // {
        //     type: 'list',
        //     name: 'license',
        //     message: 'Select the appropriate license for this project',
        //     choices: [
        //         'Apache',
        //         'GNU',
        //         'GPL',
        //         'ISC',
        //         'MIT',
        //         'Open'
        //     ]
        // },
        // // {
        // //     // badges
        // // },
        // {
        //     type: 'input',
        //     name: 'tests',
        //     message: 'Are there any tests included? Please describe.'
        // },
        // {
        //     type: 'input',
        //     name: 'contactInfo',
        //     message: 'Please enter your Github username'
        // },
        // {
        //     type: 'input',
        //     name: 'email',
        //     message: 'Please enter your email:'
        // }


    ])
    // .then(projectData => {
    //     portfolioData.projects.push(projectData);
    //     if (projectData.confirmAddProject) {
    //       return promptProject(portfolioData);
    //     } else {
    //       return portfolioData;
    //     }
    //   });
       
};

   // TODO: Create a function to write README file
   const writeFile = (fileName ,data) => {

    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your file has been created!');

    });
};

// TODO: Create a function to initialize app
function init() { 
    promptProject()
    .then(input => {
        return generateMarkdown(input);
      })
        .then(markdown => {
            writeFile('newReadMe.md', markdown);
        })
        .catch(err => {
            console.log(err);
        })
}

// Function call to initialize app
init();



