

// fs is a Node standard library package for reading and writing files
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');


//function to write README file
const generateReadme = (data) =>
`<h1>
              MY PROJECT 

## Project Licence

${data.licence}

## Table of Contents :

*  [installation](#installation)

*  [Usages](#Usages)

*  [License](#License)

*  [Contribution](#Contribution)

*  [Tests](#Tests)

*  [Questions](#Questions)

## User-information

${data.username}

----------------------------------------------------------
## User E-Mail

${data.emailadress}

---------------------------------------------------------

## Project Name

${data.project}

---------------------------------------------------------

## Project Licence

${data.licence}

---------------------------------------------------------
## Dependencies

${data.Dependencies}

--------------------------------------------------------

## Test Required Command

${data.runtest}

--------------------------------------------------------

## Information About Repository

${data.repo}

--------------------------------------------------------

## Contribution On Project Repository

${data.contribute}

--------------------------------------------------------------
</h1>
`
//Array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your Github Username?',
      name: 'username',
    },
    {
        type: 'input',
        message: 'What is your E-mail adress?',
        name: 'emailadress',
      },
      {
        type: 'input',
        message: 'What is your project Name?',
        name: 'project',
      },
      {
        type: 'checkbox',
        message: 'What kind of licences your Project have ?',
        name: 'licence',
        choices: [{
                      
          name:'The MIT License',
          value:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)    The MIT License'


        },
           
        {
                      
          name:'GNU GPL v2',
          value:'[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)    GNU GPL v2'


        },
        
        {
                      
          name:'Apache 2.0 License',
          value:'[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)    Apache 2.0 License'


        },

        {
                      
          name:'GNU GPL v2',
          value:'[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)    GNU GPL v2'


        },

        {
                      
          name:'BSD 3-Clause License',
          value:'[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)    BSD 3-Clause License'


        },
        
        {
                      
          name:'BSD 2-Clause License',
          value:'[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)    BSD 2-Clause License'


        },
        
        {
                      
          name:'GNU LGPL v3',
          value:'[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)    GNU LGPL v3'


        },
        
        {
                      
          name:'GNU AGPL v3',
          value:'[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)    GNU AGPL v3'


        },

              ]  
      },

      {
        type: 'input',
        message: 'What command should be run to install Dependencies?',
        name: 'Dependencies',
      },
      {
        type: 'input',
        message: 'What command should be run to run test?',
        name: 'runtest',
      },
      {
        type: 'input',
        message: 'What does user need to know about using Repository ?',
        name: 'repo',
      },
      {
        type: 'input',
        message: 'What does the user need to know about contributing to the Repository ?',
        name: 'contribute',
      },
            
])
//function for data
.then((data) => {
  const readmePageContent = generateReadme(data);

  //function to write README file

  fs.writeFile('generateReadme.md', readmePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created readme file!')
  );
});














































































