({
  appDir:"examples/",
  baseUrl: "js/",
  dir:"examples-build/",
  optimize: 'none', //for sake of example don't compress
  mainConfigFile:'examples/js/build-example.js',
  modules:[
    { name:"build-example",
      exclude: ['text', 'wrap']
    }
  ],
  findNestedDependencies:true
})