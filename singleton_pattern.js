let instance = null;
class Printer {
  constructor(pages) {
    this.display = function() {
      console.log(`connected to printer.. printing ${pages}`)
    }
  }

  static getInstance(numOfpages) {
    if (!instance) {
      instance = new Printer(numOfpages);
    }
    return instance;
  }
}

const obj1 = Printer.getInstance(2)
const obj2 = Printer.getInstance(3)


let configure = null;
class ConfigureVals{
  constructor(initvalues){
      this.xpoint = initvalues.xpoint || 0;
      this.ypoint = initvalues.ypoint || 0;
      this.shape = initvalues.shape || null;
  }
  static getConfiguration(initvalues){
      if (!configure) {
          configure = new ConfigureVals(initvalues)
          }
          return configure;
  }
}