require(['lib/mymodule'], function(module){
	buster.spec.expose(); //todo where to put this?
	describe("Another AMD", function () {
		window.it("should work", function () {
		expect(module.name).toEqual("A Module");
		expect(true).toEqual(true);
		});
	});
});


