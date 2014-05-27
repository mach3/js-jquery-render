
module.exports = function(grunt){

	var banner = grunt.template.process(
		grunt.file.read("./src/banner.js"),
		{data: grunt.file.readJSON("./package.json")}
	);

	grunt.initConfig({
		concat: {
			dist: {
				options: {
					banner: banner
				},
				files: {
					"./jquery.render.js": ["./src/jquery.render.js"]
				}
			}
		},
		uglify: {
			dist: {
				options: {
					banner: banner
				},
				files: {
					"./jquery.render.min.js": ["./src/jquery.render.js"]
				}
			}
		}

	});

	grunt.registerTask("build", ["concat:dist", "uglify:dist"]);

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");

};