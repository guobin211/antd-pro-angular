const fs = require("fs");
const path = require("path");

const out = path.resolve(__dirname, "data");

function buildImages() {
  const files = fs.readdirSync("./images");
  const img = {
    code: 200,
    msg: "",
    data: [],
  };
  for (const file of files) {
    console.log(file);
    if (file.includes("avatar")) {
      img.data.push({
        type: "avatar",
        url: `/assets/images/${file}`,
      });
    } else if (file.includes("nature")) {
      img.data.push({
        type: "nature",
        url: `/assets/images/${file}`,
      });
    } else if (file.includes("camera")) {
      img.data.push({
        type: "camera",
        url: `/assets/images/${file}`,
      });
    } else {
      img.data.push({
        type: "mini",
        url: `/assets/images/${file}`,
      });
    }
  }

  fs.writeFileSync(`${out}/img.json`, JSON.stringify(img));
}

buildImages();
