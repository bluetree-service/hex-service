import SysInfo = require("systeminformation");
import SystemInfoCollections = require("./SystemInfoCollections.js");

class Cpu implements SystemInfoCollections
{
  public constructor()
  {

  }

  public getData(): []
  {
    return [];
  }

  public cpuLoad(): void
  {
    SysInfo.currentLoad()
      .then(data => {
        console.log(data.avgload);
        console.log(data.currentload);
        console.log(data.cpus);
        console.log(data.currentload_user);
      })
      .catch(error => {
        console.log(error)
      });
  }
}

export = Cpu;
