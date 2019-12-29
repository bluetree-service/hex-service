import {SymfonyStyle} from "symfony-style-console";
import {execSync} from "child_process";
import Cpu = require("./SystemInfoCollections/Cpu.js");

class Collector
{
  protected style: SymfonyStyle;
  protected collection: [];

  /**
   * @param {SymfonyStyle} style
   */
  public constructor(style: SymfonyStyle)
  {
    this.style = style;
  }

  public execute(): void
  {
    let ls: Buffer;
    let output: string;

    try {
      let cpu = new Cpu();
      console.log(cpu.getData())
      ls = execSync("pwd");
    } catch (exception) {
      ls = exception.stderr
    } finally {
      const out = Buffer.from(ls);
      output = out.toString().replace("\n", "");
    }

    console.log(output);
  }
}

export = Collector;
