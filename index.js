const inquirer = require("inquirer");
const FileIO = require("./utils/fileIO");
const GenerateMarkdown = require("./utils/generateMarkdown");
const filename = "readme.md";

// array of questions for user
const questions = [
    // Repository URL
    {
        type: "input",
        name: "repository",
        message: "What is the URL of your repository?",
        validate: (name) => name !== ""
    },
    // Local folder location
    {
        type: "input",
        name: "folder",
        message: "What is the folder path where you want to save the readme.md file?",
        validate: (name) => name !== ""
    },
    // 1) Project Title
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
        validate: (name) => name !== ""
    },
    // 2) Project Description
    {
        type: "input",
        name: "description",
        message: "What is the description for your project?",
        validate: (name) => name !== ""
    },
    // 3) Installation
    {
        type: "editor",
        name: "installation",
        message: "What are the steps required to install your project?",
        validate: (name) => name !== ""
    },
    // 4) Usage
    {
        type: "editor",
        name: "usage",
        message: "What are the usage instructions for your project?",
        validate: (name) => name !== ""
    },
    // 5) License
    {   type: "list",
        name: "license",
        message: "Choose your license:",
        choices: [
            "Apache License 2.0",
            "Boost Software License 1.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU General Public License v3.0",
            "ISC License",
            "MIT License",
            "Mozilla Public License 2.0",
            "Unlicense"],
        default: "Unlicense"
    },
    // 6) Contributors
    {
        type: "editor",
        name: "contributors",
        message: "What are the github usernames for the contributors?",
        validate: (name) => name !== ""
    },
    // 7) Tests
    {
        type: "editor",
        name: "tests",
        message: "What are the test steps for your project?",
        validate: (name) => name !== ""
    },
    // 8) Questions
    // Name
    {
        type: "input",
        name: "author_name",
        message: "What is your name?",
        validate: (name) => name !== ""
    },
    // Github username
    {
        type: "input",
        name: "github",
        message: "What is your github username?",
        validate: (name) => name !== ""
    },
    // email
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: (name) => name !== ""
    }
];






// function to write README file
const writeToFile = (data) => {

    const generateMarkdown = new GenerateMarkdown(data);  

    const fileIO = new FileIO();
    // Check folder location if the last character is a Backslash
    if (data.folder[data.folder.length - 1] != "\\") {
        data.folder = `${data.folder}\\`
    }
    fileIO.write(`${data.folder}${filename}`, generateMarkdown.readme).then(console.log("Success, the file was created!")).catch(error => console.log(`Sorry, the file was unable to be created. See error:\n${error}`));

}

// sends questions by CLI to the user
inquirer.prompt(questions).then(response => writeToFile(response));

