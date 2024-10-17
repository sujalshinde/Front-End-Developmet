// class Person{
//     constructor(name,age)
//     {
//         this.name=name;
//         this.age=age;
//     }

//     getData()
//     {
//         console.log(`Hello my name is ${this.name}, I am ${this.age} years old`);
//     }
// }

// let p1 = new Person("Test Person",30);
// let p2 = new Person("ABC",50);
// p1.getData();
// p2.getData();

// localStorage.setItem("Company", "Revolution IT Solutions");
// let company = localStorage.getItem("Company");
// console.log(company);

// let student = { rollno: 71, standard: 10 };
// localStorage.setItem("s1", JSON.stringify(student));

// let item = JSON.parse(localStorage.getItem("s1"));
// console.log(item);


class Vehicle {
    constructor(company, modelName) {
      this.company = company;
      this.modelName = modelName;
    }
  
    getdata() {
      console.log(`Vehicle Company: ${this.company}, Model Name: ${this.modelName}`);
    }
  }
  
  let car = new Vehicle("Audi", 'AudiQ7');
  car.getdata();  
  

  

  class Vehicles {
    constructor(company, modelName) {
      this.company = company;
      this.modelName = modelName;
    }
  }
  
  
  let cars = new Vehicles('BMW', 'Model S');
  

  console.log(`Company: ${cars.company}`);
  console.log(`Model Name: ${cars.modelName}`);


  let arr=[1,2,3,4,5,6,7,8,9,0];
  localStorage.setItem('arr',JSON.stringify(arr));
  
  let array= JSON.parse(localStorage.getItem('arr'));
  console.log(array);
  
  array.forEach(function(number) {
      console.log(number);
  });