import SysInfo = require("systeminformation");
import SystemInfoCollections = require("./SystemInfoCollections.js");

class Cpu implements SystemInfoCollections
{
  public constructor()
  {

  }

  public getData(): []
  {
    return this.cpuLoad();
  }

  public cpuLoad(): []
  {
    let cpuData;

    SysInfo.currentLoad()
      .then(data => {
        cpuData = [];
        cpuData["average"] = data.avgload;
        cpuData["current"] = data.currentload;
        cpuData["cpus"] = data.cpus;
        cpuData["user_load"] = data.currentload_user;
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        return cpuData
      });


    setTimeout(() => console.log(cpuData), 1000);
    return cpuData;
  }
}

export = Cpu;
