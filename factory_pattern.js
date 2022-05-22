class IceCreamFactory {
  constructor() {
    this.createIcecream = function(flavor) {
      let iceCream;
      if (flavor === 'chocolate') {
        iceCream = new Chocolate();
      }
    }
  }
}