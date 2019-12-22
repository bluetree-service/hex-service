import {SymfonyStyle} from "symfony-style-console";

class Process
{
  protected style: SymfonyStyle;
  protected worker;
  protected configuration: any;

  public constructor(configuration: object, style: SymfonyStyle)
  {
    this.style = style;
    this.configuration = configuration;
  }

  public run(app: any): void
  {
    this.worker = setInterval(app.execute, this.configuration.workerTime);
    console.log("process running");
  }

  public stop(): void
  {
    clearInterval(this.worker);
  }
}

export = Process;
