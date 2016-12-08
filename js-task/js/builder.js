JSON = {
   "menu":[
      {
         "id":"contact",
         "leaf":true,
         "description":"Contact Us",
         "link":"",
         "content":"contactUs.html",
         "cssClass":"static-content",
         "menu":null
      },
      {
         "id":"rules",
         "leaf":false,
         "description":"Sports Betting Rules",
         "link":"",
         "content":"",
         "cssClass":"",
         "menu":[
            {
               "id":"types",
               "leaf":true,
               "description":"Wager Types",
               "link":"",
               "content":"wagerTypes.html",
               "cssClass":"static-content wager-types",
               "menu":null
            },
            {
               "id":"odds",
               "leaf":true,
               "description":"Odds & Lines",
               "link":"",
               "content":"oddsAndLines.html",
               "cssClass":"static-content",
               "menu":null
            },
            {
               "id":"policies",
               "leaf":true,
               "description":"Rules & Policies",
               "link":"",
               "content":"rulesAndPolicies.html",
               "cssClass":"static-content rules-policies",
               "menu":null
            },
            {
               "id":"bonuses",
               "leaf":true,
               "description":"Sports Bonuses",
               "link":"",
               "content":"sportsBonuses.html",
               "cssClass":"static-content",
               "menu":null
            }
         ]
      },
      {
         "id":"conditions",
         "leaf":false,
         "description":"Terms & Conditions",
         "link":"",
         "content":"",
         "cssClass":"",
         "menu":[
            {
               "id":"termsOfService",
               "leaf":true,
               "description":"Terms of Service",
               "link":"",
               "content":"termsOfService.html",
               "cssClass":"static-content",
               "menu":null
            },
            {
               "id":"privacy",
               "leaf":true,
               "description":"Privacy Policy",
               "link":"",
               "content":"privacy.html",
               "cssClass":"static-content",
               "menu":null
            }
         ]
      },
      {
         "id":"view",
         "leaf":true,
         "description":"View in: Mobile | Full Site",
         "link":"",
         "content":"view.html",
         "cssClass":"static-content",
         "menu":null
      }
   ]
}


$(document).ready(function() {

  function buildMenu(ul, menu) {
    for (var i = 0; i < menu.length; i++) {
      var li = $('<li id="' + menu[i].id + '" class="' + menu[i].cssClass + '"><a href="' + menu[i].link + '">' + menu[i].description + '</a></li>');
      $(ul).append(li);
      if (menu[i].leaf !== true) {
        var subul = $('<ul id="submenu-' + menu[i].id + '"></ul>');
        $(li).append(subul);
        buildMenu($(subul), menu[i].menu);
      }
    }
  }
  
  function buildContent(div, menu) {
    for (var i = 0; i < menu.length; i++) {
	    if (menu[i].content) {
	      var content = $('<div id="content-' + menu[i].id + '" class="content">' + menu[i].content + '</div>');
	      $(div).append(content);
      }
      if(menu[i].menu) {
      	//We have submenu
      	for (var j = 0; j < menu[i].menu.length; j++) {
       		//Iterate submenu 
			 		var content = $('<div id="content-' + menu[i].menu[j].id + '" class="content">' + menu[i].menu[j].content + '</div>');        
			 		$(div).append(content); 
       	} 
      }
    }
  }
  

  var menu = $(".menu");
  var contentWrap = $(".content-wrapper");
  buildMenu(menu, JSON.menu);
  buildContent(contentWrap, JSON.menu);

	//Hide submenus and content
	$( ".menu ul" ).hide();
	$( ".content" ).hide();
	
	//Show submenu and content on click
	$(".menu li a").click(function(e) {
		e.preventDefault();
		$( ".content" ).hide();
		contentId = $(this).parent("li").attr("id");
		$(this).siblings("ul").toggle();
		$("#content-" + contentId).show();
	});
	
});