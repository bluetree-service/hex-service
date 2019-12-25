import {SymfonyStyle} from "symfony-style-console";
import {execSync} from "child_process";

const commands: Array<string> = [
  "uptime -p",
  "uptime -s",
  "cat /proc/loadavg | awk '{print $1,$2,$3}'",
  "free | grep \"Mem\\|Pamięć\" | awk '{print ($2-$3) / $2 * 100.0}'",
  "grep 'cpu ' /proc/stat | awk '{usage=($2+$4)*100/($2+$4+$5)} END {print usage \"%\"}'",
];

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

  public execute(): void
  {
    let ls: Buffer;
    let output: string;

    try {
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
