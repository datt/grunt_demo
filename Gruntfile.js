module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
            js: {
                src: [
                    'src/js/1_jquery-2.1.0.min.js',
                    'src/js/2_jquery.nouislider.min.js',  // This specific file
                    'src/js/3_active.js'  // This specific file
                ],
                dest: 'src/all.js'
            },
            css: {
                src: [
                    'src/css/1_jquery.nouislider.css',
                    'src/css/2_style.css'
                ],
                dest: 'src/all.css'
            }
        },
        uglify: {
            build: {
                src: 'src/all.js',
                dest: 'tmp/all.min.js'
            }
        },
        cssmin: {
          add_banner: {
            options: {
              banner: '/*This is minified css file, don\'t modify this file. */'
            },
            files: {
              'tmp/all.min.css': ['src/all.css']
            }
          }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/images'
                }]
            }
        },
        tags: {
            build: {
                options: {
                    scriptTemplate: '<script type="text/javascript" src="{{ path }}?__inline=true"></script>',
                    linkTemplate: '<link rel="stylesheet" type="text/css" href="{{ path }}?__inline=true"/>',
                    openTag: '<!-- start template tags -->',
                    closeTag: '<!-- end template tags -->'
                },
                src: [
                    'src/all.js',
                    'src/all.css'
                ],
                dest: 'src/source.html'
            }
        },
        inline: {
            dist: {
                src: ['src/source.html'],
                dest: ['build/final.html']
            }
        },
        remove: {
            options: {
              trace: true
            },
            dirList: ['tmp']
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-script-link-tags');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-remove');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat','uglify','cssmin','tags','imagemin','inline','remove']);
};