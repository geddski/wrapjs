buster.spec.expose();
require.config({
  baseUrl: 'examples/js/',
  paths: { 'wrap': '../../wrap', 'text': 'lib/text', 'candy': 'lib/candy' },
  wrapJS: {
    'pizza': {
      deps: ['cheese'],
      attach: 'pizza'
    },
    'candy': {
      deps: ['lib/sugar'],
      attach: function(){
        var candy = this.candy; // this === window (global)
        delete this.candy; //kill the global
        return candy; //tell the module what to return
      }
    },
    'rolls': {
      deps: ['lib/wheat'],
      attach: 'rolls',
      path: 'lib/rolls'
    }
  }
});

describe("simple attach", function (run) {
  require(['wrap!pizza'], function (pza) {
    run(function(){

      it("should be available as a global", function () {
        expect(window.pizza.name).toEqual('pizza');
        expect(window.pizza.ingredients[0].name).toEqual('cheese');
      });
      
      it('should be available as a module', function(){
        expect(pza.name).toEqual('pizza');
        expect(pza.ingredients[0].name).toEqual('cheese');
      });
    });
  });
});

describe('removing the global variable', function(run){
  require(['wrap!candy'], function (candy) {
    run(function(){
      it('should be available as a module', function(){
        expect(candy.name).toEqual('candy');
        expect(candy.ingredients[0].name).toEqual('sugar');
      });

      it('but not as a global', function(){
        expect(window.candy).not().toBeDefined();
      });
    });
  });
});

describe('using the path option', function(run){
  require(['wrap!rolls'], function (rolls) {
    run(function(){
      it('should find the right lib based on the path', function(){
        expect(rolls.name).toEqual('rolls');
        expect(rolls.ingredients[0].name).toEqual('wheat');
      });
    });
  });
});

// describe('post-build', function(){
//   it('//should wrap the script in an AMD module', function(){
    
//   });
// });

// describe('multiple globals exposed', function(){
//   it('//should expose all of the ones specified', function(){
//     //TODO brainstorm on this more.
//   });
// });
