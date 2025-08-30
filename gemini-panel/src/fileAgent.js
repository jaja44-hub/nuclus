import fs from "fs-extra";

export function readFile(path) {
  return fs.readFileSync(path, "utf8");
}

export function writeFile(path, content) {
  fs.writeFileSync(path, content);
}
