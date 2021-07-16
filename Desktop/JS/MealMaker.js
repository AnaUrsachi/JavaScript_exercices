const menu = {
    _courses: {
      _appetizers: [],
      _mains: [],
      _desserts: [],
      
      get appetizers() {
        return this._appetizers;
      },
      set appetizers(appetizersIn) {
        this._appetizers = appetizersIn;
      },
      get mains() {
        return this._mains;
      },
      set mains(mainsIn) {
        this._mains = mainsIn;
      },
      get desserts() {
        return this._desserts;
      },
      set desserts(dessertsIn) {
        this._desserts = dessertsIn;
      },
    },
    
    get courses() {
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts,
      };
  },
 
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      
      this._courses[courseName].push(dish);
    },
    
    getRandomDishFromCourse (courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      
      return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
    },
  };
  
  menu.addDishToCourse('appetizers', 'Hot Corn and Cheese Dip', 6.30);
  menu.addDishToCourse('appetizers', 'Slow Cooker Spicy Beef Queso Dip', 5);
  menu.addDishToCourse('appetizers', 'Slow Cooker Spicy Beef Queso Dip', 5.50);
  
  menu.addDishToCourse('mains', 'Fried Pork Chops with Peas and Potatoes', 16);
  menu.addDishToCourse('mains', 'Italian Sausage Spaghetti', 12.50);
  menu.addDishToCourse('mains', 'Lemon Pork Chops with Quinoa Salad', 17);
  
  menu.addDishToCourse('desserts', 'Apple Pie', 6);
  menu.addDishToCourse('desserts', 'Fudgy Chewy Brownies', 5.50);
  menu.addDishToCourse('desserts', 'Tiramisu', 6);
  
  let meal = menu.generateRandomMeal();
  
  console.log(meal);