//length property
let str1 = "Revolution IT Solutions";
let length = str1.length;
console.log(length);


//string slice()
let str2 = "Kolhapur, Mumbai, Pune";
let tex = str2.slice(10, 15);
console.log(tex);

//string substring()
let str3 = "Kolhapur, Mumbai, Pune";
let part3 = str3.substring(10, 15);
console.log(part3);


//String substr()
let str4 = "Kolhapur, Mumbai, Pune";
let part4 = str4.substr(10, 5);
console.log(part4);


//Replacing String Content
let text = "Please visit company!";
let newText = text.replace("company", "Revolution IT Solutions");
console.log(newText);


//Lowecase and Uppercase
let txt = "revolution";
let tex2 = txt.toUpperCase();
console.log(tex2);


let text3 = "REVOLUTION";
let text4 = text3.toLowerCase();
console.log(text4);


//JavaScript String trim()
let text1 = "      Revolution      ";
let text2 = text1.trim();
console.log("text2");

//There are two ways to declare Object
let car = new Object();
let car2 = {};
car = { 
    name: "A7",
    brand: "Audi",
    capacity: 5
    };
//How to access properties of an Object
console.log(car['name'])
console.log(car['brand'])

//There are two ways to declare Array
let cities = new Array();
let cities1 = [];
cities =['Kolhapur', 'Pune', 'Mumbai']
//How to access array elements
console.log(cities[0])
console.log(cities[1])

//Adding element to array
const cities4 = ["Kolhapur", "Pune", "Mumbai", "Nashik"];
cities4.push("Nagpur");
console.log(cities4)

//Length property
const cities3 = ["Kolhapur", "Pune", "Mumbai", "Nashik"];
let Length = cities3.length;
console.log(length)

//Remove last element of an array
const cities5 = ["Kolhapur", "Pune", "Mumbai", "Nashik"];
cities5.pop();
console.log(cities5)

//concatenating array
const cities8 = ["Kolhapur", "Satara"];
const cities2 = ["Pune", "Mumbai"];
const cities6 = cities1.concat(cities2);
console.log(cities6)

//Removing elements using splice() method
const cities7 = ["Kolhapur", "Pune", "Mumbai", "Nashik"];
cities7.splice(0, 1);
console.log(cities7)

//sorting an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits)

