
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
          ondrop = @OnDropItem;
          setIframe = @SetIframeSettings;

          $(@framePageEditor.el).load () ->
            iframeElement = this;
            iframeContents = $(iframeElement).contents();
            setIframe(iframeElement, iframeContents);
            iframeContents.find('[nodes-placeholder]').droppable {
              iframeFix: true,
              iframe: iframeElement, 
              drop: (event, ui) ->
                ondrop(this, event, ui);
            }
          return resolve();
        , reject;
    SetIframeSettings: (@iframeElement, @iframeContents) =>

      
      
    OnDropItem: (target, event, ui) =>
      console.log("ON DROP", ui.data.options.data);
      droppedControl =  ui.data.options.data;
      content = $(droppedControl.model.get('Content'));
      $(target).append(content);
      if droppedControl.model.get('IsDroppable')
        ondrop = @OnDropItem;
        $(target).find('.control').droppable {
          iframeFix: true,
          iframe: @iframeElement, 
          drop: (event, ui) ->
            ondrop(@, event, ui);
        }
      

    OnWindowResize: () =>
      console.log "PARENTSSS", @parent
      height = $(window).height() - $(@parent.el).height() - 10;
      width = "100%";
      @framePageEditor.css "height", height
      @framePageEditor.css "width", width

  return PageEditor;
