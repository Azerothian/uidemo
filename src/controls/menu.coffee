define ['jquery','bluebird', 'jsui/controls/template', 'jsui/util'], ($, Promise, Template, util) ->
  class Menu extends Template
    constructor: () ->
      @elements = util.jsonToObject("
      [{
        Name: 'navBar',
        Class: 'navbar navbar-default',
        TagName: 'nav',
		    Children: [{
			    Name: 'navBarHeader',
			    Class: 'navbar-header',
          Children: [{
            Name: 'btnNavbarToggle',
            Class: 'navbar-toggle',
            Attributes: { type: 'button', 'data-toggle': 'collapse' },
            TagName: 'button',
            Html: \"<span class='sr-only'>Toggle navigation</span>
              <span class='icon-bar'></span>
              <span class='icon-bar'></span>
              <span class='icon-bar'></span>\"
          }, {
            Class: 'navbar-brand',
            Attributes: { href: '#' },
            Text: 'Brand',
            TagName: 'a'
          }]
		    },{
			    Name: 'navBarCollapse',
			    Class: 'collapse navbar-collapse',
          Children: [{
            Name: 'ulNavBar',
            Class: 'nav navbar-nav',
            TagName: 'ul',
            Children: [
              { Name: 'liMenuItem', Class: 'active', TagName: 'li', Html: \"<a href='#'>Home</a> \" }
            ]
          }]
		    }]
      }]");

      super;

    OnInit: () =>
      return new Promise (resolve, reject) =>
        return super().then () =>
          @btnNavbarToggle.attr('data-target', @navBarCollapse.id);
          return resolve();

  return Menu;
