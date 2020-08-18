const CreateLicense = require("./license");

// function to generate markdown for README
class GenerateMarkdown {
  constructor (data) {

    const License = new CreateLicense(data.license, data.author_name);

    // Check URL if the last character is a Forwardslash
    if (data.repository[data.repository.length - 1] != "/") {
        data.repository = `${data.repository}/`
    }

    // Make contributors a link to their profile
    let contributor_string = "";
    data.contributors.split("\r\n").forEach(person => {
        contributor_string += `* [${person}](https://github.com/${person})\n`;
    });

    this.readme =
`# ${data.title}
${License.shield}

## Description
${data.description}

## Table of Contents

1. [Installation](#1-installation)
2. [Usage](#2-usage)
3. [License](#3-license)
4. [Contributing](#4-contributing)
5. [Tests](#5-tests)
6. [Questions](#6-questions)

## 1 Installation
${data.installation}

## 2 Usage
${data.usage}

## 3 License
${License.summary}

## 4 Contributing
${contributor_string}

## 5 Tests
${data.tests}

## 6 Questions
* [Github Profile for ${data.github}](https://github.com/${data.github})
* [Send email to ${data.email}](mailto:${data.email})
* [File an issue](${data.repository}issues)
`;
  }
}

module.exports = GenerateMarkdown;
