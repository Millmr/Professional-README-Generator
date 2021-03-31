// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(results) {
  const licenseType = `${results.license}`;
  let licenseString = " "
  if (licenseType === "MIT") {
    licenseString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
  if (licenseType === "GNU") {
    licenseString = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  };
  if (licenseType === "Apache") {
    licenseString = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  };
  if (licenseType === "ISC") {
    licenseString = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  };
  return licenseString
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(results) {
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
    * ${renderLicenseBadge(results)}
    
    ## Questions
    * Emails me at ${results.email}
    * Find me on GitHub [${results.github}](http://github.com/${results.github})`;
}

module.exports = generateMarkdown;
