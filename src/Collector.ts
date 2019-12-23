import {SymfonyStyle} from "symfony-style-console";

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
    console.log("exec\n");
  }
}

export = Collector;
