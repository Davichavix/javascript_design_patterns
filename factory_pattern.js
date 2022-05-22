class IceCreamFactory {
  constructor() {
    this.createIcecream = function(flavor) {
      let iceCream;
      if (flavor === 'chocolate') {
        iceCream = new Chocolate();
      }
      else if (flavor === 'mint') {
        iceCream = new Mint()
      }
      else if (flavor === 'strawberry') {
        iceCream = new Strawberry()
      }
      return iceCream;
    }
  }
}

class Chocolate {
  constructor() {
    this.icecreamFlavor = "chocolate";
    this.message = function() {
      return `You chose the ${this.icecreamFlavor} flavor.`
    }
  }
}

const iceCreamFactory = new IceCreamFactory();

const chocolate = iceCreamFactory.createIcecream('chocolate');

console.log(chocolate.message())