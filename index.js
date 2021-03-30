// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);


function userPrompt() {
// TODO: Create an array of questions for user input
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please give a description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Add any installation requirements.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'describe how to use the application.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Add any contributions.',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'Provide any test intructions.',
            name: 'test',
        },
        {
            type: 'checkbox',
            choices: [
                "MIT", new inquirer.Separator(),
                "GNU", new inquirer.Separator(),
                "Apache", new inquirer.Separator(),
                "ISC", new inquirer.Separator(),
            ],
            message: 'License?',
            name: 'license',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        }
    ]);
}

// TODO: Create a function to write README file
function createReadme(results) {
    return `# ${results.title}
    
    #### Table of contents
    1. [Project Description](#project-description)
    2. [Installation Instructions](#installation-instructions)
    3. [Usage Information](#usage-information)
    4. [Contributor Guidelines](#contributor-guidelines)
    5. [Test Instructions](#test-instructions)
    6. [License](#license)
    7. [Questions](#questions)

    ## Project Description
    * ${results.description}
    
    ## Installation Instructions
    * ${results.installation}
    
    ## Usage Information
    * ${results.usage}
    
    ##Contributor Guidlines
    * ${results.contributions}
    
    ## Test Instructions
    * ${results.test}
    
    ## License
    * ${results.license}
    
    ## Questions
    * Emails me at ${results.email}
    * Find me on GitHub [${results.github}](http://github.com/${results.github})`;
};
// TODO: Create a function to initialize app
userPrompt()
.then(function(results) {
    const readMe = createReadme(results);

    return writeFile("README.md", readMe);
})
.then(function(){
    console.log("Your professional README has been created!")
})
.catch(function(err) {
    console.log(err);
});



// Function call to initialize app
//init();
