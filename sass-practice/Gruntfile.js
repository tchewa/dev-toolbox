module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/sass-carousel.css' : 'scss/sass-carousel.scss',
					'css/sass-article-carousel.css' : 'scss/sass-article-carousel.scss'
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 2 versions']
			},
			multiple_files: {
				src: '**/*.css',
				dest: ''
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'autoprefixer'],
				options: {
					livereload: true
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-livereload');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default',['watch']);
}