({
  appDir:"examples/",
  baseUrl: "js/",
  dir:"examples-build/",
  optimize: 'none', //for sake of example don't compress
  mainConfigFile:'examples/js/config.js',
  modules:[
    { name:"build-example",
      //exluding config for the sake of testing. 
      exclude: ['text', 'wrap', 'config']
    }
  ],
  findNestedDependencies:true
})