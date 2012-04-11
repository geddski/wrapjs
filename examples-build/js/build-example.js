
/* script wrapped by the wrap! plugin */
define("wrap!frosting", [], function(){ 
frosting = {
  name:"frosting"
};
return (function () {
var attach = frosting;
// console.log(window.frosting);
return (typeof attach === 'function') ? attach.apply(this) : attach; 
}());
});

/* script wrapped by the wrap! plugin */
define("wrap!donut", ["wrap!frosting"], function(){ 
donut = {
  name: "donut",
  ingredients: [frosting] //depends on the global sugar.js being available
};
return (function () {
var attach = function (){var donut=this.donut;delete this.donut;return donut}; 
return (typeof attach === 'function') ? attach.apply(this) : attach; 
}());
});

// //see config.js for the wrapJS config being used here
// require(['require', 'config'], function(require){
//   // requiring donut will now make sure frosting is loaded first
//   require(['wrap!donut'], function (donut) {
//     console.log("donut: ", donut);
//     // notice that the scripts are available as parameters to this callback, as if it were an AMD module
//     console.log('mmm', donut.name);
//     console.log('mmm', donut.ingredients[0].name);

//     // also notice the donut variable is no longer available as a global
//     console.log('look no more global: ', window.donut);
//   });
// });
// define("build-example", function(){});
