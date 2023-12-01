const fs = require("fs").promises;
function createdir(path) {
  return fs
    .mkdir(path)
    .then(() => {
      console.log("dir is created");
    })
    .catch((err) => {
      console.log("error");
    });
}
function createFile(path, start, end) {
  if (start > end) return Promise.resolve();
  else {
    const dir = `${path}/file${start}.txt`;
    return fs
      .writeFile(dir, "file")
      .then(() => {
        console.log(`${start} file is created`);
      })
      .catch((err) => {
        console.log("error");
      });
  }
}
function deleteFile(path, start) {
  const dir = `${path}/file${start}.txt`;
  return fs
    .unlink(dir)
    .then(() => {
      console.log(`${start}file is deleted`);
    })
    .catch((err) => {
      console.log("error");
    });
}
function recursive(path, start, end) {
  createFile(path, start, end)
    .then(() => {
      return deleteFile(path, start);
    })
    .then(() => {
      if (start < end) {
        recursive(path, start + 1, end);
      }
    });
}
function fsProblem1(path, Files) {
  createdir(path).then(() => {
    recursive(path, 1, Files);
  });
}
module.exports = fsProblem1;
