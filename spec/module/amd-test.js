
//IDEAL, but doesn't currently work because buster ends before it can finish
require(['lib/test!http://raw.github.com/gist/3eb65c2883af6b6f2b8d/41b6fbfaf24b8106268dd3c770ad22a976afcf3e/mymodule'], function (module) {
	describe("AMD", function (done) {
		it("should work", function () {
			console.log('YAY');
			expect(module.name).toEqual("A Module");
			expect(true).toEqual(false);
			done();
		});
	});
});

//works most of the time, but only because it happens before buster thinks things are done
require(['lib/test!lib/mymodule'], function(module){
	buster.spec.expose(); //todo where to put this?
	describe("AMD", function () {
		it("should work", function () {
		expect(module.name).toEqual("A Module");
		expect(module.dependsOn).toEqual("a dependency");
		expect(true).toEqual(true);
		});
	});
});



