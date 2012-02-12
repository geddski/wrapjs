//wrap the scripts that have dependencies, specify what to return for the AMD module, and remove the script's global
require.config({
  paths:{ 'wrap':'../../wrap', 'text':'lib/text'},
  wrapJS:{
    'pizza':{
      deps:['cheese'],
//      attach: 'pizza'
      attach:function () {
        var pizza = this.pizza; // this === window (global)
        delete this.pizza; //kill the global
        return pizza; //tell the module what to return
      }
    },
    'cheese': {
      attach: 'cheese'
    },
    'nachos': {
      attach: 'nachos',
      path: 'lib/nachos'
    }
  }
});

// requiring pizza will now make sure cheese is loaded first
require(['wrap!pizza'], function (pizza) {
  console.log("pizza: ", pizza);
  // notice that the scripts are available as parameters to this callback, as if it were an AMD module
  console.log('mmm', pizza.name);
  console.log('mmm', pizza.ingredients[0].name);

  // also notice the pizza variable is no longer available as a global
  console.log('look no more global: ', window.pizza);
});

// another example, using the path attribute
require(['wrap!nachos'], function (nachos) {
  console.log('nachos', nachos);
  // notice that the scripts are available as parameters to this callback, as if it were an AMD module
  console.log('mmm', nachos.name);
  console.log('mmm', nachos.ingredients[0].name);
});