module.exports = function(grunt) {
    const sass = require('sass');

    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'styles/main.css': 'styles/main.scss'
                }
            }
        },
        watch: {
            files: ['**styles/*.scss'],
            tasks: ['sass']
        }
    });

    grunt.registerTask('default', ['watch']);
};