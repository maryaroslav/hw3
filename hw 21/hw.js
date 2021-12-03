console.log("First task:") 
const user = { 
    name: 'Mango', 
    age: 20, 
    hobby: 'html', 
    premium: true, 
    mood: 'happy' 
};

user.hobby = "skydiving"; 
user.premium = false; 
user.mood = "happy"; 
const entries = Object.entries(user); 
for (const entry of entries) { 
    const key = entry[0]; 
    const value = entry[1]; 
    console.log(`${key}: ${value}`); 
  }  
 
console.log("Third task:")  
  const findBestEmployee = function (employees) { 
   let arr = Object.values(employees); 
   let max = Math.max(...arr) 
   console.log(max) 
 
   for (let employee in employees) { 
     if(employees[employee] === max) { 
       return { 
         name: employee,  
         value: employees[employee] 
       } 
     } 
   } 
 
   console.log(employee, max) 
  }; 
  console.log( 
    findBestEmployee({ 
      ann: 29, 
      david: 35, 
      helen: 1, 
      lorence: 99, 
    }), 
  ); 
  console.log( 
    findBestEmployee({ 
      poly: 12, 
      mango: 17, 
      ajax: 4, 
    }), 
  ); 
  console.log( 
    findBestEmployee({ 
      lux: 147, 
      david: 21, 
      kiwi: 19, 
      chelsy: 38, 
    }), 
  ); 
 
console.log("Fifty task:")
const products = [ 
  { name: 'Радар', price: 1300, quantity: 4 }, 
  { name: 'Сканер', price: 2700, quantity: 3 }, 
  { name: 'Дроїд', price: 400, quantity: 7 }, 
  { name: 'Захоплення', price: 1200, quantity: 2 }, 
]; 
const getAllPropValues = function (arr, prop) { 
  let mass = [] 
  for (let item of arr) { 
  for (let element in item) { 
 if (element === prop){ 
   mass.push(item[element]) 
 } 
  } 
  } 
  return mass; 
  } 
 
console.log(getAllPropValues(products, 'name')); 
console.log(getAllPropValues(products, 'quantity')); 
console.log(getAllPropValues(products, 'category'));
 
console.log("Sixty task:") 
const productss = [ 
  { name: 'Радар', price: 1300, quantity: 4 }, 
  { name: 'Сканер', price: 2700, quantity: 3 }, 
  { name: 'Дроїд', price: 400, quantity: 7 }, 
  { name: 'Захоплення', price: 1200, quantity: 2 }, 
]; 
 
const calculateTotalPrice = function (allProdcuts, productName) { 
  let total = 0; 
  for (let it of allProdcuts){ 
  if (it["name"] === productName){ 
    total = it["price"] * it["quantity"] 
  } 
  } 
  return total;  
}; 

console.log(calculateTotalPrice(productss, 'Радар'));
console.log(calculateTotalPrice(productss, 'Дроїд'));