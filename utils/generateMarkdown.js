const fs = require("fs");


// function to generate markdown for README
function generateMarkdown(data) {
  console.log("data: ", data)
  let _data = {...data};
  _data.licenseName = "GNU AGPLv3";
  _data.licenseUrl = "https://choosealicense.com/licenses/gpl-3.0/";
  let filename = "README.md";

  let str =`# ${data.title}\n\n
  [GitHub Profile](https://github.com/dewrivers)\n\n
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
  `;

  console.log("str: ", str);

  fs.writeFile(
    filename,
    str,
    function (err) {
      if (err) {
        return console.log(err)
      }
      else {
        console.log("Done!!")
      }
    }
  );
  console.log("_data: ", _data);
  return _data;
}

module.exports = generateMarkdown;
