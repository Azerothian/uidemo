(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'bluebird', 'jsui/controls/template', 'jsui/util'], function($, Promise, Template, util) {
    var Dock;
    Dock = (function(_super) {
      __extends(Dock, _super);

      function Dock() {
        this.OnInit = __bind(this.OnInit, this);
        this.elements = util.jsonToObject("      [{        Name: 'menuRow',        Class: 'row',        Control: 'app/controls/menu'      }, {        Class:'row',        Children: [{          Class: 'col-xs-12',          Children: [{            Class: 'panel panel-default',            Children: [{              Class: 'panel-heading',              Text: 'Page Editor'             }, {              Name: 'pnlPageEditorBody',              Class: 'panel-body',              Children: [                { Class: 'col-xs-3', Control: 'app/controls/controldisplay' },                { Class: 'col-xs-9', Control: 'app/controls/pageeditor' }              ]            }]          }]        }]      }]");
        Dock.__super__.constructor.apply(this, arguments);
      }

      Dock.prototype.OnInit = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return Dock.__super__.OnInit.call(_this).then(function() {
            return resolve();
          });
        });
      };

      return Dock;

    })(Template);
    return Dock;
  });

}).call(this);
