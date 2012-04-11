buster.spec.expose();
describe('another way to test AMD', function(){
	require(['lib/mymodule'], function(run){
		run(function(){
			console.log('loaded the thingy to test: ', module);
			it('should work', function () {
				expect(true).toEqual(true);
			});
		});
	});
});