buster.spec.expose();

describe("Regular Require", function (run) {
  // console.log('this', this);
  console.log('require', require);
  // console.log('spammy', spammy);
  require(['spec/mod1'], function (mod1) {
    run(function(){
      it("should work", function () {
        expect(mod1.name).toEqual("howdy");
      });
    });
  });
});