//see config.js for the wrapJS config being used here
require(['require', 'config'], function(require){
  // requiring donut will now make sure frosting is loaded first
  require(['wrap!donut'], function (donut) {
    console.log("donut: ", donut);
    // notice that the scripts are available as parameters to this callback, as if it were an AMD module
    console.log('mmm', donut.name);
    console.log('mmm', donut.ingredients[0].name);

    // also notice the donut variable is no longer available as a global
    console.log('look no more global: ', window.donut);
  });
});