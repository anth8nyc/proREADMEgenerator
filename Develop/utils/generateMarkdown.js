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
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  If your README is long, add a table of contents to make it easy for users to find what they need.
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](##howtocontribute)
  - [Test](##tests)
  - [Contact](##questions?)

  ## Installation
  ${data.installinstruct}
  ## Usage
  ${data.useinfo}  
  ## License
  ${data.llc}
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  ---

  ## How to Contribute
  ${data.contribguide}
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  ## Tests
  ${data.testinstruct}
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.
  ## Questions?
  Please direct any questions to: ${data.email}

  `;
}

module.exports = generateMarkdown;
