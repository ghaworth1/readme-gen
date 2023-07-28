
const fs = require('fs');
const inquirer = require('inquirer')

// Function to generate the README content based on answers
function generateMarkdown(answers) {
  // template literal to inject answers into the markdown
  // gets data from {answers}
  return `    
# ${answers.title}

## Description
${answers.description}

## Table of Contents
-[Description](#Description)
  -[Installation] (#Installation)
  -[Usage] (#Usage)
  -[License] (#License)
  -[Contributing] (#Contributing)
  -[Tests] (#Tests)
  -[Questions] (#Questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, feel free to reach out to me at ${answers.email}.
  `;
}

// Prompt the user for input using inquirer
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a brief project description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage instructions:',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Enter the project license:',
      choices: ['MIT', "None"],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ])
  //then take the answers and generateMarkdown
  .then((answers) => {
    const readmeContent = generateMarkdown(answers);
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error('Error writing README file:', err);
      } else {
        console.log('README.md file generated.');
      }
    });
  })
  //if there's an error let me know
  .catch((error) => {
    console.error('Error:', error);
  });

