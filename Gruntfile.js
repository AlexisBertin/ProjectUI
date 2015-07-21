module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
        files: {
          './assets/js/dashboard.min.js': ['./assets/js/dashboard.js'],
          './assets/js/projectData.min.js': ['./assets/js/projectData.js'],
        }
      }
    },
    watch: {
      sass: {
        files: './assets/css/sass/*.scss',
        tasks: ['sass', 'cssmin']
      },
      js: {
        files: './assets/js/main.js',
        tasks: ['uglify']
      }
    },
    sass: require( './assets/custom_modules/sass.js' ).task,
    cssmin: require( './assets/custom_modules/cssmin.js' ).task
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', [
    'uglify',
    'sass',
    'cssmin',
    'watch'
  ]);

};