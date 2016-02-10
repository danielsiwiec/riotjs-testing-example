// Karma configuration
// Generated on Fri Jan 29 2016 12:56:31 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    frameworks: ['jasmine'],

    files: [
      'node_modules/riot/riot+compiler.js',
      'src/**/*.js',
      'src/**/*.tag',
      'spec/**/*.js'
    ],

    preprocessors: {
      'spec/**/*.js': ['babel'],
      '**/*.tag': ['riot']
    },

    reporters: ['progress'],

    browsers: ['PhantomJS'],

    singleRun: true,

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    }

  })
}
