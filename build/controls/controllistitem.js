(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'bluebird', 'jsui/controls/template', 'jsui/util', 'jquery-ui/jquery.ui.draggable'], function($, Promise, Template, util) {
    var ControlListItem;
    ControlListItem = (function(_super) {
      __extends(ControlListItem, _super);

      function ControlListItem() {
        ControlListItem.__super__.constructor.apply(this, arguments);
      }

      return ControlListItem;

    })(Template);
    return ControlListItem;
  });

}).call(this);
