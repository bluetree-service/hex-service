import {SymfonyStyle} from "symfony-style-console";
import {execSync} from "child_process";

class Collector
{
  protected style: SymfonyStyle;

  /**
   * @param {SymfonyStyle} style
   */
  public constructor(style: SymfonyStyle)
  {
    this.style = style;
  }

  public execute()
  {
    let ls;
    let output;

    try {
      ls = execSync("pwd");
    } catch (exception) {
      ls = exception.stderr
    } finally {
      const out = Buffer.from(ls);
      output = out.toString().replace("\n", '');
    }

    console.log(output);
  }
}

export = Collector;
