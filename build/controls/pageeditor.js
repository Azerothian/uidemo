(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'bluebird', 'jsui/controls/template', 'jsui/util', 'jquery-ui/jquery.ui.droppable'], function($, Promise, Template, Util) {
    var PageEditor;
    PageEditor = (function(_super) {
      __extends(PageEditor, _super);

      function PageEditor() {
        this.OnWindowResize = __bind(this.OnWindowResize, this);
        this.BindDroppable = __bind(this.BindDroppable, this);
        this.OnDropItem = __bind(this.OnDropItem, this);
        this.OnOutItem = __bind(this.OnOutItem, this);
        this.OnOverItem = __bind(this.OnOverItem, this);
        this.SetIframeSettings = __bind(this.SetIframeSettings, this);
        this.OnRender = __bind(this.OnRender, this);
        this.OnInit = __bind(this.OnInit, this);
        PageEditor.__super__.constructor.apply(this, arguments);
        this.elements = Util.jsonToObject("[{        Name: 'framePageEditor',        TagName: 'iframe',        Attributes: { src: '/iframe.html', frameBorder: '0' }      }]");
        this.ele_ondrop = [];
      }

      PageEditor.prototype.OnInit = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return PageEditor.__super__.OnInit.call(_this).then(function() {
            $(window).resize(_this.OnWindowResize);
            return resolve();
          }, reject);
        });
      };

      PageEditor.prototype.OnRender = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return PageEditor.__super__.OnRender.call(_this).then(function() {
            var self;
            _this.OnWindowResize();
            self = _this;
            $(_this.framePageEditor.el).load(function() {
              var iframeContents, iframeElement;
              iframeElement = this;
              iframeContents = $(iframeElement).contents();
              self.SetIframeSettings(iframeElement, iframeContents);
              return self.BindDroppable(iframeContents.find('[nodes-placeholder]'));
            });
            return resolve();
          }, reject);
        });
      };

      PageEditor.prototype.SetIframeSettings = function(iframeElement, iframeContents) {
        this.iframeElement = iframeElement;
        this.iframeContents = iframeContents;
      };

      PageEditor.prototype.OnOverItem = function(target, event, ui) {
        return console.log("ON over", arguments);
      };

      PageEditor.prototype.OnOutItem = function(target, event, ui) {
        return console.log("ON out", arguments);
      };

      PageEditor.prototype.OnDropItem = function(target, event, ui) {
        var content, droppedControl;
        console.log("ON DROP", ui.data.options.data);
        droppedControl = ui.data.options.data;
        content = $(droppedControl.model.get('Content'));
        $(target).append(content);
        if (droppedControl.model.get('IsDroppable')) {
          return this.BindDroppable($(target).find('.control'));
        }
      };

      PageEditor.prototype.BindDroppable = function(target) {
        var self;
        self = this;
        return $(target).droppable({
          iframeFix: true,
          iframe: this.iframeElement,
          greedy: true,
          drop: function(event, ui) {
            return self.OnDropItem(this, event, ui);
          },
          over: function(event, ui) {
            return self.OnOverItem(this, event, ui);
          },
          out: function(event, ui) {
            return self.OnOutItem(this, event, ui);
          }
        });
      };

      PageEditor.prototype.OnWindowResize = function() {
        var height, width;
        console.log("PARENTSSS", this.parent);
        height = $(window).height() - $(this.parent.el).height() - 10;
        width = "100%";
        this.framePageEditor.css("height", height);
        return this.framePageEditor.css("width", width);
      };

      return PageEditor;

    })(Template);
    return PageEditor;
  });

}).call(this);
