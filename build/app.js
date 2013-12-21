(function() {
  requirejs.config({
    baseUrl: 'lib',
    paths: {
      app: '../build',
      'jquery': 'jquery/jquery.min',
      'jquery-ui': 'jquery-ui/ui',
      'underscore': 'underscore-amd/underscore.min',
      'bootstrap': 'bootstrap/dist/js/bootstrap.min',
      'bluebird': 'bluebird/js/browser/bluebird',
      'backbone': 'backbone-amd/backbone-min',
      'css': 'require-css/css',
      'json5': 'json5/lib/json5',
      'eventEmitter': 'eventEmitter/EventEmitter'
    },
    shim: {
      'jquery': {
        exports: '$'
      },
      'json5': {
        exports: 'JSON5'
      },
      'jquery-ui/jquery.ui.draggable': {
        deps: ['jquery-ui/jquery.ui.mouse', 'jquery-ui/jquery.ui.core']
      },
      'jquery-ui/jquery.ui.mouse': {
        deps: ['jquery-ui/jquery.ui.core', 'jquery-ui/jquery.ui.widget']
      },
      'jquery-ui/jquery.ui.droppable': {
        deps: ['jquery-ui/jquery.ui.core', 'jquery-ui/jquery.ui.widget']
      },
      'jquery-ui/jquery.ui.widget': {
        deps: ['jquery-ui/jquery.ui.core']
      },
      'jquery-ui/jquery.ui.core': {
        deps: ['rcss!jquery-ui/../dist/jquery-ui', 'jquery']
      },
      'underscore': {
        exports: '_'
      },
      'bootstrap': {
        deps: ['jquery', 'rcss!../lib/bootstrap/dist/css/bootstrap.min']
      },
      'backbone': {
        deps: ['underscore']
      }
    },
    map: {
      '*': {
        'rcss': 'require-css/css',
        'text': 'requirejs-text/text'
      }
    },
    packages: [
      {
        name: 'jsui',
        location: 'jsui/build',
        main: 'jsui'
      }
    ]
  });

  requirejs(['jquery', 'jsui', 'text!app/json/mainscreen.json', 'bluebird', 'bootstrap'], function($, jsui, MainScreen, Promise) {
    var j,
      _this = this;
    Promise.longStackTraces();
    console.log('App Starting up...');
    j = new jsui();
    return j.initialise("body").then(function() {
      $('.loadingPanel').fadeOut(1000, function() {
        return $('.loadingPanel').remove();
      });
      return jsui.loadControlsFromString(MainScreen, j.root).then(function(control) {
        return console.log("finished!!!");
      });
    });
  });

}).call(this);
