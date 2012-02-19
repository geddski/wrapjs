var config = module.exports;

config["Browser Tests"] = {
	environment:"browser",
	rootPath:"../",
	sources:["examples/js/lib/require.js"],
	tests:[
		"spec/browser/*.js"
	],
	resources:["**/*.js"],
	// autoRun: false
};

