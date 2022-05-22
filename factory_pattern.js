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



class ToyFactory {
  constructor() {
    this.toy = ToyDuck;
    this.createToy = function(toyChosen) {
      if (toyChosen.toyType == "duck") {
        this.toy = ToyDuck;
      }
      else if (toyChosen.toyType == "car") {
        this.toy = ToyCar;
      }
      return new this.toy(toyChosen)
    }
  }
}

function ToyDuck(toyObj) {
  this.color = toyObj.color;
  this.price = toyObj.price;
}

function ToyCar(toyObj) {
  this.color = toyObj.color;
  this.price = toyObj.price;
  this.name = toyObj.name;
}

const toyFactory = new ToyFactory()
const car = toyFactory.createToy({
  toyType: "car",
  color: "blue",
  price : 12,
  name : "honda",
})

console.log(car)