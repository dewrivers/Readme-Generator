const fs = require("fs");


// function to generate markdown for README
function generateMarkdown(data) {
  let filename = "README.md";
  fs.writeFile(
    filename,
    `# ${data.title}\n\n
[![GitHub Badge](https://img.shields.io/badge/GitHub-Profile-blue?style=for-the-badge&logo=appveyor)](${data.profile})\n\n
## Table of Contents\n\n
[Description](#Description)\n
[Installation](#Installation)\n
[Usage](#Usage)\n
[License](#License)\n
[Contributions](#Contributions)\n
[Tests](#Tests)\n
## Description\n
${data.description}\n\n
## Installation\n
${data.installation}\n\n
## Usage\n
${data.usage}\n\n
## License\n
${data.license}\n\n
## Contributions\n
${data.contributions}\n
## Tests\n
${data.tests}\n\n
`,
    function (err) {
      if (err) {
        return console.log(err)
      }
      else {
        console.log("Document complete.")
      }
    }
  );
}

module.exports = generateMarkdown;
