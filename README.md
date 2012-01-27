# wrap.js
version 0.1.0
A RequireJS plugin for wrapping regular scripts as AMD modules.
This is useful for cases where regular scripts have dependencies, like jQuery plugins and Backbone.
Inpired by Tim Branyen's (use.js plugin)[http://tbranyen.com/post/amdrequirejs-shim-plugin-for-loading-incompatible-javascript]

Only dependency is the (text plugin)[http://requirejs.org/docs/api.html#text]

## Usage
In the require.config, use the wrapJS object to specify which scripts you want to wrap.
Use the `deps` attribute to specify all the script's dependencies. 
Use the `attach` attribute to specify the global name of the library (think $, _, Backbone, etc)


```js
require.config({
  wrapJS: {

    "underscore": {
      attach: "_"
    },

    "backbone": {
      deps: ["wrap!underscore", "jquery"], //an array of the script's dependencies
      attach: function(_, $) {  //this would be if you wanted to make Backbone JUST AMD, not global also
        return this.Backbone.noConflict();
      }
    }
  }
});

```
