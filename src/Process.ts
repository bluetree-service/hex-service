import {SymfonyStyle} from "symfony-style-console";
import Collector = require("./Collector");

class Process
{
  protected style: SymfonyStyle;
  protected worker;
  protected configuration: any;

  /**
   * @param {object} configuration json configuration
   * @param {SymfonyStyle} style
   */
  public constructor(configuration: object, style: SymfonyStyle)
  {
    this.style = style;
    this.configuration = configuration;
  }

  /**
   * @param app
   */
  public run(app: Collector): void
  {
    this.style.success("process running")

    app.execute();
    this.worker = setInterval(app.execute, this.configuration.workerTime);
  }

  public stop(): void
  {
    clearInterval(this.worker);
  }
}

export = Process;
