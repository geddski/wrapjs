//wrap the scripts that have dependencies, specify what to return for the AMD module, and remove the script's global
require.config({
  paths:{ 'wrap':'../../wrap', 'text':'lib/text'},
  wrapJS:{
    'donut':{
      deps:['wrap!frosting'],
      attach:function () {
        var donut = this.donut; // this === window (global)
        delete this.donut; //kill the global
        return donut; //tell the module what to return
      },
      path: 'lib/donut'
    }
    ,'frosting': {
        attach: 'frosting',
        path: 'lib/frosting'
    }
  }
});