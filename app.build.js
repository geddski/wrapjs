({
  appDir:"examples/",
  baseUrl: "js/",
  dir:"../examples-build",
  optimize: 'none', //for sake of example don't compress
//  mainConfigFile:'js/build-example.js',
  mainConfigFile:'examples/js/build-example.js',
  modules:[
    { name:"build-example" }
  ],
  findNestedDependencies:true
})