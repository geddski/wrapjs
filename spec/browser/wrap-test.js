buster.spec.expose();

describe("Regular Require", function () {
  require(['spec/mod1'], function (mod1) {
    buster.run(function(){
      it("should work", function () {
        expect(true).toEqual(true);
      });
    });
  });
});