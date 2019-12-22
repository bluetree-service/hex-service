import * as fs from "fs";
import {SymfonyStyle} from "symfony-style-console";

const style = new SymfonyStyle();
const mainConfig = "/etc/hex-service/config.json";
const defaultConfig = "./etc/config.json";

let files;

try {
  files = require (mainConfig);
} catch (Exception) {
  style.warning("Unable to find main config in " + mainConfig + ", use default one");
  files = require (defaultConfig);
}

console.log(files);
