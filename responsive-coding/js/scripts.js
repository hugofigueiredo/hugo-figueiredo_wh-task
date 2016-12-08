/** Mobile Menu **/
menuTrigger = function(){
  $("#menuTrigger1").click(function(e) {
    e.preventDefault();
    $(this).toggleClass("open");
    $("#primary-nav").toggleClass("open", 300);
  });
  $("#menuTrigger2").click(function(e) {
    e.preventDefault();
    $(this).toggleClass("open");
    $("#secondary-nav").toggleClass("open");
  });
}

/** Load masonry for image grid **/
masonry = function(){
	$('.grid').masonry({
	  columnWidth: '.grid-sizer',
		gutter: '.gutter-sizer',
		itemSelector: '.grid-item',
		percentPosition: true
	})
}

$(window).load(function() {
  menuTrigger(); 
  masonry(); 
});