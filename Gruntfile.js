module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		//sass
		sass: {
			dist: {
				options: {
					style: 'expanded',
					sourcemap: 'auto'
				},
				files: {
					'css/style.css': 'scss/style.scss'
				}
			}
		},

		//imagemin
		imagemin: {
			dynamic: {
				files: {
					expand: true,
					cwd: 'images',
					src: ['**/*.{png, jpg, gif}', '!build/**/*.{png, jpg, gif}'],
					dest: 'images/build'
				}
			}
		},

		//browser-sync {
		browserSync: {
			bsFile: {
				src: ['css/*.css', '*.html']
			},
			options: {
				server: './',
				watchTask: true
			}
		},

		//jshint
		jshint: {
			all: ['js/**/*.js'],
			options: {
				reporter: require('jshint-stylish')
			}
		},

		//watch
		watch: {
			scss: {
				files: ['scss/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true,
					spawn: false,
					"curly": true,
					"eqnull": true,
					"eqeqeq": true,
					"undef": true,
					"globals": {
						"jQuery": true
					}
				}
			},
			browser: {
				files: ['css/*.css', '*.html'],
				tasks: ['browserSync']
			},

			jshint: {
				files: ['js/**/*.js'],
				tasks: ['jshint']
			}
		}

	});

	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'browserSync', 'jshint', 'watch']);

	grunt.registerTask('img', ['imagemin']);
	grunt.registerTask('jsh', ['jshint', 'watch']);
};
