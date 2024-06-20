const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck){
    if(typeof mealToCheck ==='string'){
      this._meal = mealToCheck;
    } else {
      console.log(`That's not a string.`);
    }
  },
  set price(priceToCheck){
    if(typeof priceToCheck ==='number'){
      this._price = priceToCheck;
    } else {
      console.log(`That's not a number.`);
    }
  },
  get todaysSpecial() {
    if( this._meal && this._price) {
      return `Today's special is ${this._meal} for $${this._price}`;
    } else {
      `Meal or price was not set correctly.`
    }
  }
}

menu.meal = 'Mac Salad';
menu.price = 5;
console.log(menu.todaysSpecial)