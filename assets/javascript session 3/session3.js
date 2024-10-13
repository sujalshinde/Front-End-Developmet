let ab= 70.90;
console.log(ab);
console.log(ab.toString());

let number = 89.90909090;
console.log(number.toFixed(2));

let number1="898989";
console.log(Number(number1));
console.log(parseFloat(number1));

console.log(Number("jAKJSHHS"));

let age = 13;
if(age > 18)
{
console.log("You are eligible..!");
}
else
{
console.log("You can not apply..!");
}

let marks = 62;

if(marks>61)
{
    console.log("You are passed with First Class..!");
}
else if(marks >= 40)
{
    console.log("You are just passed..!");
}
else
{
    console.log("You are failed..!");
}

console.log(new Date().getDay());
//Switch case
switch (new Date().getDay()) 
{
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
      case 4:
        text="Today is Thursday";
        break;
    default:
      text = "Looking forward to the Weekend";
      
  }
console.log(text);


for(j=1;j<=20;j++)
{
 console.log(j);
}

let Student = {name: "Shree", language: "JavaScript", age: 28,city:"Mumbai"};
for(var s in Student)
{
    console.log(s + "=" + Student[s]);
}

let evenno = [2,4,6,8,10];

function showNumbers(item,index)
{
console.log(item);
}

evenno.forEach(showNumbers);

let x = 1, y = 6;
while (x <= y) 
{
console.log(x);
x += 1;

}

let a = 10;
let b =3;
do {
console.log(a);
a++;
} while(a <= b);

// Create a Map
const fruits = new Map();
                        
// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

fruits.get("apples");    // Returns 500
fruits.size; //result - 3
console.log(fruits.get("apples"));

  // Creating a shopping cart as a Map
let shoppingCart = new Map();
shoppingCart.set('apple', 3);  // 3 apples
shoppingCart.set('banana', 2); // 2 bananas
shoppingCart.set('orange', 5); // 5 oranges
// Checking if an item is in the cart
console.log(shoppingCart.has('apple'));  // Output: true
// Getting the quantity of a specific item
console.log(shoppingCart.get('banana')); // Output: 2

// Updating the quantity of an item
shoppingCart.set('apple', 5);            // Now 5 apples

    // Deleting an item from the cart
shoppingCart.delete('orange');           // Removes oranges

console.log(shoppingCart);

//1.login
//2.products
//3.addtoCart
//4.Checkout


