const path = require("path");
const { copySync } = require("fs-extra");

const prodFolder = path.resolve(process.cwd(), "./prod");
const distFolder = path.resolve(process.cwd(), "./dist");

const CopyOptions = {
  overwrite: true,
};

function copyFile(from, to) {
  try {
    copySync(
      path.resolve(distFolder, from),
      path.resolve(prodFolder, to),
      CopyOptions
    );
  } catch (e) {
    console.log(`Could not copy: ${e}`);
  }
}

function BuildDist() {
  // Main folders

  // Scripts
  copyFile("./scripts/home.js", "./home.js");
  copyFile("./scripts/content_template.js", "./content.js");
  copyFile("./scripts/dev_tools.js", "./dev_tools.js");

  // Styles
  copyFile("./styles/home.css", "./homepage.css");
  copyFile("./styles/content_template.css", "./content.css");
  copyFile("./styles/global.css", "./template.css");

  // Assets
  copyFile("./assets", "./images");
  copyFile("./svgs", "./svgs");
}

BuildDist();
