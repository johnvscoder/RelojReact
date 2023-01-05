// const object = {
//     name: "John",
//     saludar: function() {alert(this.name);}
// };

// object.saludar();

// const funcion = object.saludar;

// funcion();

// const funcion2 = funcion.bind(object);

// funcion2();

// const module = {
//     x: 42,
//     getX: function() {
//       return this.x;
//     }
//   };
  
//   const unboundGetX = module.getX;
//   console.log(unboundGetX()); // The function gets invoked at the global scope
//   expected output: undefined
  
//   const boundGetX = unboundGetX.bind(module);
//   console.log(boundGetX());
//   expected output: 42
  

"use strict"; // prevent `this` from being boxed into the wrapper object

function log(...args) {
  console.log(this, ...args);
}

log("hoLA MUNDO", 2);

const boundLog = log.bind("this value", 1, 2);

boundLog("Hola mundo" ,3);

const boundLog2 = boundLog.bind("new this value", 3, 4);

boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6