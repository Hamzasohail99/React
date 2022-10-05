//arguments object no longer bound with arrow function

// const add = function(a, b){
//     console.log(arguments);
//     return a + b;
// };

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1000));

//this keyword no longer bound
const user = {
    name: 'andrew',
    cities: ['lahore', 'new york'],
    printplaceslived()  {
        // console.log(this.name);
        // console.log(this.cities);
        // const that = this;
        // const citymessages = this.cities.map((city) =>
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        //{
            //return this.name + ' has lived in ' + city;
            //map method will return array
        //});
        //return citymessages;
        // this.cities.forEach((city) => {
        //     console.log(this.name + 'has lived' + city)
            //for each will not return array
        // });
    }
};
console.log(user.printplaceslived());

const multiplier = {
    numbers: [10, 20, 30],
    multiplyby:3,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyby);
    }
};
console.log(multiplier.multiply());