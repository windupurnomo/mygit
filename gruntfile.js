module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: {
                    './tmp/js/built.js': ['./tmp/js/built.js']
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    './dist/js/built.min.js': ['./tmp/js/built.js']
                }
            }
        },
        concat: {
            options: {
                banner: "'use strict';\n",
                process: function(src, filepath) {
                    return '// Source: ' + filepath + '\n' +
                        src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                }
            },
            dist: {
                src: [
                    './js/**/*.js',
                    '!./js/**/ui/**'
                ],
                dest: './tmp/js/built.js',
            },
        },
        copy: {
            main: {
                files: [
                    { src: 'index.html', dest: './dist/index.html' },
                    { expand: true, src: ['app.js'], dest: './dist/' },
                    { expand: true, src: ['favicon.ico'], dest: './dist/' },
                    { expand: true, src: ['./tpl/**'], dest: './dist/' },
                    { expand: true, src: ['./img/**'], dest: './dist/' },
                    { expand: true, src: ['./css/**'], dest: './dist/' },
                    { expand: true, src: ['./fonts/**'], dest: './dist/' },
                    { expand: true, src: ['./lib/**'], dest: './dist/' },
                    { expand: true, src: ['./localizations/**'], dest: './dist/' }
                ],
            },
        }
    });

    //load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');

    //register grunt default task
    grunt.registerTask('default', ['concat', 'ngAnnotate', 'uglify', 'copy']);
}
