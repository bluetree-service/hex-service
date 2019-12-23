import * as fs from "fs";
import {SymfonyStyle} from "symfony-style-console";
import Process = require("./src/Process");
import Collector = require("./src/Collector");

const style = new SymfonyStyle();
const mainConfig = "/etc/hex-service/config.json";
const defaultConfig = "./etc/config.json";

let config;

try {
  config = require (mainConfig);
} catch (Exception) {
  style.warning("Unable to find main config in " + mainConfig + ", use default one");
  config = require (defaultConfig);
}

try {
  let process = new Process(config, style);
  let collector = new Collector(style);

  process.run(collector);
} catch (Exception) {
  style.error(Exception.message);
  process.exit(1);
}
