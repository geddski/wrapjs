
//wrap the scripts that have dependencies, specify what to return for the AMD module, and remove the script's global
require.config({
  paths:{ 'wrap':'../../wrap', 'text':'lib/text', 'nachos': 'lib/nachos' },
  wrapJS:{
    'nachos':{
      deps:['cheese'],
      attach: 'nachos'
    }
  }
});

// requiring pizza will now make sure cheese is loaded first
// require(['wrap!nachos'], function (nachos) {
require([], function () {
  // notice that the scripts are available as parameters to this callback, as if it were an AMD module
  // console.log('mmm', nachos.name);
  // console.log('mmm', nachos.ingredients[0].name);
});
define("build-example-w-path", function(){});
