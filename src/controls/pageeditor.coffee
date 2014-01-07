
define ['jquery','bluebird', 'jsui/controls/template', 'jsui/util', 'jquery-ui/jquery.ui.droppable'], ($, Promise, Template, Util) ->
  class PageEditor extends Template
    constructor: () ->
      super
      @elements = Util.jsonToObject("[{
        Name: 'framePageEditor',
        TagName: 'iframe',
        Attributes: { src: '/iframe.html', frameBorder: '0' }
      }]");
      

    OnInit: () =>
      return new Promise (resolve, reject) =>
        return super().then () =>
          $(window).resize @OnWindowResize
          return resolve();
        , reject
    OnRender: () =>
      return new Promise (resolve, reject) =>
        return super().then () =>
          @OnWindowResize();
          #this is to deal with the function binding to get the proper assocation
          self = @;
          $(@framePageEditor.el).load () ->
            self.iframeContents = $(this).contents();
            return self.BindDroppable(self.iframeContents.find('[nodes-placeholder]'));
          return resolve();
        , reject;

      
    OnDropItem: (target, event, ui) =>
      droppedControl =  ui.data.options.data;
      content = $(droppedControl.model.get('Content'));
      $(target).append(content);
      if droppedControl.model.get('IsDroppable')
        return @BindDroppable($(target).find('.control'));

    BindDroppable: (target) =>
      #this is to deal with the function binding to get the proper assocation
      self = @;
      $(target).droppable {
        iframeFix: true,
        greedy: true,
        drop: (event, ui) ->
          self.OnDropItem(this, event, ui);
      }

      
    OnWindowResize: () =>
      height = $(window).height() - $(@parent.el).height() - 10;
      width = "100%";
      @framePageEditor.css "height", height
      @framePageEditor.css "width", width

  return PageEditor;
