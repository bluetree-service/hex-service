import SystemInfoCollections = require("./SystemInfoCollections.js");

class Process implements SystemInfoCollections
{
  public constructor()
  {

  }

  public getData(): []
  {
    /**
     * collect information about top 5 consuming process
     * monitor some important process
     *
     * use osquery
     */
    return [];
  }
}

export = Process;
