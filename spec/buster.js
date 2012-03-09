var config = module.exports;

config["Browser Tests"] = {
	environment:"browser",
	rootPath:"../",
  libs:["examples/js/lib/require.js"],
	tests:[
		"spec/browser/*.js"
	], 
  resources:["spec/*.js"]
};

