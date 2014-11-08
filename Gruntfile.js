module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'dist/scss',
          src: ['**/*.scss'],
          dest: 'dist/css',
          ext: '.css'
        }, {
          expand: true,
          cwd: 'examples/scss',
          src: ['**/*.scss'],
          dest: 'examples/css',
          ext: '.css'
        }]
      }
    },
    watch: {
      files: ['dist/scss/*.scss', 'examples/scss/*.scss'],
      tasks: ['sass']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);
};
