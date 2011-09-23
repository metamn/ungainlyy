jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){

  // Single click on portfolio
  function singleClick(e) {
    var url = jQuery(".wide #posts li").first().html();
    jQuery(".wide #posts li").each(function(index) {
      if (jQuery(this).attr('class') == jQuery("#background-image").attr('rel')) {
        if (jQuery(this).next().html()) {
          url = jQuery(this).next().html();
        }        
      };
    });
    window.location.href = url;
  }
  
  // Click and double click on portfolio items
  jQuery(".wide #background-image img").click(function(e) {
    var that = this;
    setTimeout(function() {
        var dblclick = parseInt(jQuery(that).data('double'), 10);
        if (dblclick > 0) {
            jQuery(that).data('double', dblclick-1);
        } else {
          singleClick.call(that, e);
        }
    }, 300);
  }).dblclick(function(e) {
      jQuery(this).data('double', 2);      
      window.location.href = jQuery(".wide #background-image").attr('rel');
  });
  

  // Change colors on menu navigation
  jQuery("#collections a").hover (
    function () {
      removeColors();
      
      var color = jQuery(this).attr('class');
      var klass = color + "-triangle";
      jQuery("#divider .triangle-top").addClass(klass);
    },
    function () {
      var color = jQuery(this).attr('class');
      var klass = color + "-triangle";
      jQuery("#divider .triangle-top").removeClass(klass);
      // Restore original klass, if any
      jQuery("#divider .triangle-top").addClass(jQuery("#divider .triangle-top").attr("id"));
    }
  );
  
  // Remove all color classes which might be set previously
  function removeColors() {
    var a = ["services", "portfolio", "sale", "feedback"]
    for (var i = 0; i < a.length; i++) {
      jQuery("#divider .triangle-top").removeClass(a[i]+"-triangle");
    }
  }  
});
