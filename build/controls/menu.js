(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'bluebird', 'jsui/controls/template', 'jsui/util'], function($, Promise, Template, util) {
    var Menu;
    Menu = (function(_super) {
      __extends(Menu, _super);

      function Menu() {
        this.OnInit = __bind(this.OnInit, this);
        this.elements = util.jsonToObject("      [{        Name: 'navBar',        Class: 'navbar navbar-default',        TagName: 'nav',		    Children: [{			    Name: 'navBarHeader',			    Class: 'navbar-header',          Children: [{            Name: 'btnNavbarToggle',            Class: 'navbar-toggle',            Attributes: { type: 'button', 'data-toggle': 'collapse' },            TagName: 'button',            Html: \"<span class='sr-only'>Toggle navigation</span>              <span class='icon-bar'></span>              <span class='icon-bar'></span>              <span class='icon-bar'></span>\"          }, {            Class: 'navbar-brand',            Attributes: { href: '#' },            Text: 'Brand',            TagName: 'a'          }]		    },{			    Name: 'navBarCollapse',			    Class: 'collapse navbar-collapse',          Children: [{            Name: 'ulNavBar',            Class: 'nav navbar-nav',            TagName: 'ul',            Children: [              { Name: 'liMenuItem', Class: 'active', TagName: 'li', Html: \"<a href='#'>Home</a> \" }            ]          }]		    }]      }]");
        Menu.__super__.constructor.apply(this, arguments);
      }

      Menu.prototype.OnInit = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return Menu.__super__.OnInit.call(_this).then(function() {
            _this.btnNavbarToggle.attr('data-target', _this.navBarCollapse.id);
            return resolve();
          });
        });
      };

      return Menu;

    })(Template);
    return Menu;
  });

}).call(this);
