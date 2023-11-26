class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.topping = [];
    }

    static get SIZE_SMALL() {
        return {
            name: 'SIZE_SMALL',
            price: 50,
            calories: 20
        };
    }

    static get SIZE_BIG() {
        return {
            name: 'SIZE_HUGE',
            price: 100,
            calories: 40
        }
    }

    static get STUFFING_CHEESE() {
        return {
            name: 'STUFFING_CHEESE',
            price: 10,
            calories: 20
        }
    }

    static get STUFFING_SALAD() {
        return {
            name: 'STUFFING_SALAD',
            price: 20,
            calories: 5
        }
    }

    static get STUFFING_POTATO() {
        return {
            name: 'STUFFING_POTATO',
            price: 15,
            calories: 10
        }
    }

    static get TOPPING_SPICES() {
        return {
            name: 'TOPPING_SPICES',
            price: 15,
            calories: 0
        }
    }

    static get TOPPING_MAYO() {
        return {
            name: 'TOPPING_MAYO',
            price: 20,
            calories: 5
        }
    }

    addTopping(topping) {
        this.topping.push(topping);
        return this;
    }

    calculateCalories() {
        const toppingCalories = this.topping.reduce((total, topping) => total + topping.calories, 0);
        return this.size.calories + this.stuffing.calories + toppingCalories;
    }

    calculatePrice() {
        const toppingPrice = this.topping.reduce((total, topping) => total + topping.calories, 0);
        return this.size.price + this.stuffing.price + toppingPrice;
    }
}

const hamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_POTATO);

hamburger.addTopping(Hamburger.TOPPING_SPICES);
console.log('Calories: ', hamburger.calculateCalories());
console.log('Price: ', hamburger.calculatePrice());


hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log('Calories with mayo: ', hamburger.calculateCalories());
console.log('Price with mayo: ', hamburger.calculatePrice());
