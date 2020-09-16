const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');


// ARRAY OF QUESTIONS FOR USER 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Proyect Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the Proyect?',
    },
    {
        type: "input",
        name: "install",
        message: "How to install this app?",
    },
    {
        type: "input",
        name: "usage",
        message: "How do I use this app?",
    },
    {
        type: "link",
        name: "GitHub",
        message: "What is your GitHub Project URL?",
    },
    {
        type: "checkbox",
        name: "contents",
        message: "Options of Content?",
        choices: [
            "Getting Started",
            "About the Project",
            "Description",
            "Usage",
            "Licence",
            "Tech Stack",
            "End Result",
            "Contribution guidelines",
            "Tests"
        ]
    },
    {
        type: "checkbox",
        name: "techStack",
        message: "What languages the Project used?",
        choices: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        type: "checkbox",
        name: "license",
        message: "What License used?",
        choices: [
            "GNU AGPLv3",
            "Boost",
            "None",
            "Other"
        ]
    },
    {
        type: "input",
        name: "tests",
        message: "What tests were used?",
    },


];




// Function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log("response: ", response)
        const markDown = generateMarkdown(response)
        console.log("markDown: ", markDown)
        writeToFile("Readme.md", markDown)
    })
}

// Function call to initialize program
init();
