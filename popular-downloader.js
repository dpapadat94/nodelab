const { writeFile, mkdirSync, existsSync } = require("fs");
const { join, extname } = require("path");
const fetch = require("isomorphic-fetch");

let filePath = join(__dirname, "popular-articles.json");

fetch("https://reddit.com/r/programmingHumor.json")
  .then((res) => res.json())
  .then(({ data: { children } }) => {
    console.log(children);
    let imageExts = [".png", ".jpeg", ".jpg", ".gif", ".svg"];

    for (let article of children) {
      if (imageExts.includes(extname(article.data.url))) {
        fetch(article.data.url)
          .then((res) => res.arrayBuffer())
          .then((data) => {
            if (!existsSync("./images")) {
              mkdirSync("./images");
            }

            writeFile(
              join(
                __dirname,
                "images",
                article.data.id + extname(article.data.url)
              ),
              Buffer.from(data),
              (err) => {
                if (err) return console.error(err);

                console.log("Downloaded Image for" + article.data.title);
              }
            );
          });
      }
    }
  })
  .catch((err) => console.error(err));
