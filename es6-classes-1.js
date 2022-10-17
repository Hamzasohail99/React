
class Person{
    constructor(name = 'anonymous', age = 0){
        this.name = name ;
        this.age = age;
    }
    getgreeting(){
        //return 'hi, I am ' + this.name + '!';
        return `hi, I am ${this.name}!`;
    }
    getdescription(){
         return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasmajor(){
        return !!this.major;
    }
    getdescription(){
        let description = super.getdescription();
        
        if (this.hasmajor()){
            description += `their major is ${this.major}`;
        }
        
        return description;
    }
}
// const me = new Student('andrew', 26, 'computer science');
// console.log(me.getdescription());

// const other = new Student();
// console.log(other.getdescription());

class traveler extends Person{
    constructor(name, age, homelocation){
        super(name, age);
        this.homelocation = homelocation;
    }
    getgreeting(){
        let greeting = super.getgreeting();

        if (this.homelocation){
            greeting += `i am visiting from ${this.homelocation}`;
        }

        return greeting;
    }
}

const me = new traveler('andrew', 26, 'philodophia');
console.log(me.getgreeting());

const other = new traveler(undefined, undefined, 'nowhere');
console.log(other.getgreeting());