// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.title}

  ## Description

  ${data.description}

  ## Table Of Contents
  - [Installation](#installation)
  - [Usage](#installation)
  - [License](#installation)
  - [Contributions](#installation)
  - [Tests](#installation)

  ## Installation

  You need to run the following command to install the project: ${data.installation}

  ## Usage

  The way to use this project ${data.usage}

  ## License 

  The protected license for this project is ${data.license}

  ## Contributions

  These are the people who contributed to the project ${data.contributions}

  ## Tests

  You need to run the following command to run tests ${data.test}

  ## Questions

  If you have any questions email me at ${data.email} or message me at my GitHub page ${data.username}

`;
}

module.exports = generateMarkdown;
