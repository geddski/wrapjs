# wrap.js

version 0.2.0

A RequireJS plugin for wrapping regular scripts as AMD modules.
This is useful for cases where regular scripts have dependencies, like jQuery plugins and Backbone.
Inpired by Tim Branyen's [use.js plugin](http://tbranyen.com/post/amdrequirejs-shim-plugin-for-loading-incompatible-javascript)

wrap.js depends on the [text plugin](http://requirejs.org/docs/api.html#text)

## Usage
In your require.config use the wrapJS object to specify which scripts you want to wrap.
Use the `deps` attribute to specify all the script's dependencies. 
Use the `attach` attribute to specify the global name of the library (think $, _, Backbone, etc)
The following example wraps underscore and backbone:


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

Now use the wrap plugin to load the files like so:

```js
require('wrap!backbone', function(Backbone){
  console.log(Backbone); //now returns Backbone, just as if Backbone were an AMD module
}
```

NOTE: As of RequireJS 1.0.5 you can reuse your app's main.js config as part of your build config, by using the new mainConfigFile setting: `mainConfigFile:'path/to/main.js'` So you only have to specify the wrapJS stuff once.

## How It Works

During development, wrap.js basically does a nested `require()` for you, so that the script's dependencies are sure to load first. Then when you run the r.js build, an actual AMD module is generated based on your config. So say you were trying to wrap Backbone.js, and the Backbone.js script looks like this:

```js
(function(){
  //stuff
}).call(this);
``` 

Now after the r.js build backbone looks like this:

```js
define('wrap!backbone', ['jquery', 'underscore'], function(){
  (function(){
    //backbone stuff
  }).call(this);
  return (function () {
    var attach = Backbone;
    return (typeof attach === 'function') ? attach.apply(this) : attach;
  }());
});
```

NOTE: the generated AMD module contains an immediate function that resolves to and returns "Backbone" in the example above. Pure JS magic.

So there you have it. The wrap.js plugin turns any old script into an AMD module with just a little config.

## Examples
I've included several examples in the `examples` directory. Will post more info shortly.

