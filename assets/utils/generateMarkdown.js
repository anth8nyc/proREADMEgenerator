// A function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      response = `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`
      break;
    
    case 'APACHE_2.0':
      response = `![GitHub license](https://img.shields.io/badge/license-APACHE_2.0-blue.svg)`
      break;
      
    case 'GPL_3.0':
      response = `![GitHub license](https://img.shields.io/badge/license-GPL_3.0-blue.svg)`
      break;
    case 'BSD_3':
      response = `![GitHub license](https://img.shields.io/badge/license-BSD_3-blue.svg)`
      break;
    case 'None':
      response = ``
      break;
    default:
      response = ``
      break;
  }
  return response
}
// A function to provide the image link templates for after the title and for the Demo area  
function renderMediaAssist(mediaquest) {
  switch (mediaquest) {
    case 'Yes -- please include after project title':
      response1 = `\n![Change to alt text](changeToImageLink)`
      response2 = ``
      break;
    
    case 'Yes -- please include in usage information area':
      response1 = ``
      response2 = `### Demo\n![Change to alt text](changeToImageLink)`
      break;
      
    case 'Yes -- please include both above.':
      response1 = `\n![Change to alt text](changeToImageLink)`
      response2 = `### Demo\n![Change to alt text](changeToImageLink)`
      break;
    case 'No':
      response1 = ``
      response2 = ``
      break;
    default:
      response1 = ``
      response2 = ``
      break;
  }
  return [response1, response2]
}

// A function that returns the license section of README.
function renderLicenseSection(license) {

  switch (license) {
    case 'MIT':
      response = `## License
      This project is licensed under the MIT license.\n---`
      break;
    
    case 'APACHE_2.0':
      response = `## License
      This project is licensed under the APACHE_2.0 license.\n---`
      break;
      
    case 'GPL_3.0':
      response = `## License
      This project is licensed under the GPL_3.0 license.\n---`
      break;
    case 'BSD_3':
      response = `## License
      This project is licensed under the BSD_3 license.\n---`
      break;
    case 'None':
      response = ``
      break;
    default:
      response = ``
      break;
  }
  return response
}

//A function to generate markdown for README
function generateMarkdown(data) {

  let licBadge = renderLicenseBadge(data.lic);
  let licSection = renderLicenseSection(data.lic);
  let mediaAnswers = renderMediaAssist(data.mediaquest)
  
  titleImgPrv = mediaAnswers[0]
  usgImgPrv = mediaAnswers[1]
  // Includes or removes License from table of contents
  if (licSection === ``){

    tblContentLic = ``

  } else {

    tblContentLic = `\n- [License](#license)`    
  }
  //Indented oddly to preserve string literal indenting in README production 
  return `
# ${data.title} READme
${licBadge}
${titleImgPrv}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)${tblContentLic}
- [Contribute](##contribute)
- [Test](##tests)
- [Contact](##questions?)

## Installation
To install necessary dependencies, run the following command:

    ${data.installinstruct}
## Usage
${data.useinfo}
${usgImgPrv}

---  
${licSection}
## Contribute
${data.contribguide}
## Tests
To run tests, run the following command:

    ${data.testinstruct}
## Questions?
If you come across any issues with the repo, please open an issue, or contact me directly at: ${data.email}. More of my work is avaiable on GitHub at [${data.username}](https://github.com/${data.username}/).

`;

}

module.exports = generateMarkdown;
