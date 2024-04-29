const { writeFile } = require("fs");
const { join } = require("path");

let filePath = join(__dirname, "chirps.json");

let chirps = [
  {
    author: "dennis papadatos",
    content: "my first chirp",
  },
  {
    author: "dennis papadatos",
    content: "my first chirp",
  },
  {
    author: "dennis papadatos",
    content: "my first chirp",
  },
  {
    author: "dennis papadatos",
    content: "my first chirp",
  },
  {
    author: "dennis papadatos",
    content: "my first chirp",
  },
];

writeFile(filePath, JSON.stringify(chirps), (err) => {
  if (err) return console.error(err);

  console.log("wrote chirps");
});
