module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: [],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};