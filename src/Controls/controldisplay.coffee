
define ['jsui','jquery','bluebird', 'jsui/controls/template', 'jsui/util', 'text!app/json/controllist.json'], (jsui, $, Promise, Template, util, jsonControlList) ->
  class ControlDisplay extends Template
    constructor: () ->
      @elements = util.jsonToObject("[{
        Name: 'itemsList',
        Class: 'list-group itemsList',
        TagName: 'div'
      }]");
      super;

    OnInit: () =>
      return new Promise (resolve, reject) =>
        return super().then () =>
          return resolve();
    OnRender: () =>
      return new Promise (resolve, reject) =>
        return super().then () =>
          obj = util.jsonToObject(jsonControlList);
          return Template.loadControlsFromObject(obj, @, @).then (control) =>
            for c of @children
              child = @children[c]
              console.log child.el
              $(child.el).draggable({
                containment: $('document'),
                appendTo:  $("body"),
                zIndex: 1001,
                helper: "clone",
                data: child,
                iframeFix: true
              });
            return resolve();
           , reject


  return ControlDisplay;
