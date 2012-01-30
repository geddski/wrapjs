({
  appDir:"examples/",
  baseUrl: "../",
  dir:"../examples-build",
  optimize: 'none', //for sake of example don't compress
  paths:{ 'wrap': '../wrap' },
  wrapJS:{
    'pizza':{
      deps:['cheese'],
      attach:function () {
        var pizza = this.pizza; // this === window (global)
        delete this.pizza; //kill the global
        return pizza; //tell the module what to return
      }
    }
  },
  modules:[
    { name:"build-example" }
  ],
  findNestedDependencies:true
})