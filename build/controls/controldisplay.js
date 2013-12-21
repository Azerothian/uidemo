(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jsui', 'jquery', 'bluebird', 'jsui/controls/template', 'jsui/util', 'text!app/json/controllist.json'], function(jsui, $, Promise, Template, util, jsonControlList) {
    var ControlDisplay;
    ControlDisplay = (function(_super) {
      __extends(ControlDisplay, _super);

      function ControlDisplay() {
        this.OnRender = __bind(this.OnRender, this);
        this.OnInit = __bind(this.OnInit, this);
        this.elements = util.jsonToObject("[{        Name: 'itemsList',        Class: 'list-group itemsList',        TagName: 'div'      }]");
        ControlDisplay.__super__.constructor.apply(this, arguments);
      }

      ControlDisplay.prototype.OnInit = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return ControlDisplay.__super__.OnInit.call(_this).then(function() {
            return resolve();
          });
        });
      };

      ControlDisplay.prototype.OnRender = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return ControlDisplay.__super__.OnRender.call(_this).then(function() {
            var obj;
            obj = util.jsonToObject(jsonControlList);
            return Template.loadControlsFromObject(obj, _this, _this).then(function(control) {
              var c, child;
              for (c in _this.children) {
                child = _this.children[c];
                console.log(child.el);
                $(child.el).draggable({
                  containment: $('document'),
                  appendTo: $("body"),
                  zIndex: 1001,
                  helper: "clone",
                  data: child,
                  iframeFix: true
                });
              }
              return resolve();
            }, reject);
          });
        });
      };

      return ControlDisplay;

    })(Template);
    return ControlDisplay;
  });

}).call(this);
