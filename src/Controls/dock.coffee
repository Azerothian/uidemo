
define ['jquery','bluebird', 'jsui/controls/template', 'jsui/util'], ($, Promise, Template, util) ->
  class Dock extends Template
    constructor: () ->
      @elements = util.jsonToObject("
      [{
        Name: 'menuRow',
        Class: 'row',
        Control: 'app/controls/menu'
      }, {
        Class:'row',
        Children: [{
          Class: 'col-xs-12',
          Children: [{
            Class: 'panel panel-default',
            Children: [{
              Class: 'panel-heading',
              Text: 'Page Editor'
             }, {
              Name: 'pnlPageEditorBody',
              Class: 'panel-body',
              Children: [
                { Class: 'col-xs-3', Control: 'app/controls/controldisplay' },
                { Class: 'col-xs-9', Control: 'app/controls/pageeditor' }
              ]
            }]
          }]
        }]
      }]");

      super;

    OnInit: () =>
      return new Promise (resolve, reject) =>
        return super().then () =>
          return resolve();

  return Dock;
