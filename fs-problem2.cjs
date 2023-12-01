const fs = require("fs").promises;
function read(path) {
  return fs.readFile(path, "utf-8");
}
function write(path, data1) {
  return fs
    .writeFile(path, data1, "utf-8")
    .then(() => {
      console.log(`written ${path} file`);
    })
    .catch((err) => {
      console.log("error");
    });
}
function upload(path, data2) {
  return fs.appendFile(path, data2);
}
function delet(path) {
  return fs.unlink(`../${path}`);
}

function fsProblem2() {
  read("/home/vikas/Desktop/callbacks-fs-promises/lipsum.txt")
    .then((data) => {
      let data1 = data.toUpperCase();
      return write("../upperData.txt", data1);
    })
    .then(() => {
      return write("../filenames.txt", "upperData.txt");
    })
    .then(() => {
      return read("../upperData.txt");
    })
    .then((data2) => {
      let lowerData = data2.toLowerCase().replaceAll(". ", ".\n");
      return write("../lowerData.txt", lowerData);
    })
    .then(() => {
      return upload("../filenames.txt", "\nlowerData.txt");
    })
    .then(() => {
      return read("../lowerData.txt");
    })
    .then((lowerData) => {
      let sortData = lowerData.split(" ").sort().join(" ");
      return write("../sortedData.txt", sortData);
    })
    .then((sortData) => {
      upload("../filenames.txt", "\nsortedData.txt");
    })
    .then(() => {
      return read("../filenames.txt");
    })
    .then((data4) => {
      return (arr = data4.split("\n"));
    })
    .then((arr) => {
      for (let index in arr) {
        delet(arr[index]);
      }
    });
}
module.exports = fsProblem2;
