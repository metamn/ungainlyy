jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){

  // Single click on portfolio
  function singleClick(e) {
    var url = jQuery(".wide #posts li").first().html();
    jQuery(".wide #posts li").each(function(index) {
      if (jQuery(this).attr('class') == jQuery("#background-image img").attr('rel')) {
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
      window.location.href = jQuery(this).attr('rel');
  });
  
  
  
  // Change colors on menu navigation
  jQuery("#collections a").hover (    
    function () {      
      removeColors();
      
      var color = jQuery(this).attr('class');
      var klass = color + "-triangle";
      jQuery("#divider .triangle-top").addClass(klass);
      
      showItems("type-" + color);
    },
    function () {
      var color = jQuery(this).attr('class');
      var klass = color + "-triangle";
      jQuery("#divider .triangle-top").removeClass(klass);
      // Restore original klass, if any
      jQuery("#divider .triangle-top").addClass(jQuery("#divider .triangle-top").attr("id"));
      
      showItems('');
    }
  );
  
  // Showing only those items which belong to a cetgory
  function showItems(category) {
    if (category == '') {
      var originalCategory = jQuery("#content > section").attr("id");  
      jQuery("#content #item").each(function(index) {
        if (!(originalCategory)) {
          jQuery(this).show('slow');
        } else {
          var currentCategory = 'type-' + originalCategory;
          if (jQuery(this).hasClass(currentCategory)) {
            jQuery(this).show('slow');
          } else {
            jQuery(this).hide('slow');
          }
        }
      });
    } else {
      jQuery("#content #item").each(function(index) {
        if (!(jQuery(this).hasClass(category))) {
          jQuery(this).hide('slow');
        } else {
          jQuery(this).show('slow');
        }
      });  
    }
  }
  
  // Hide other content and show just the item which belong to the category
  function removeItems(category) {
    
  }
  
  // Show all items hidden by category hover
  // - if on a category page only category items will be shown
  function showItems2() {
    var category = jQuery("#content > section").attr("id");
    
    jQuery("#content #item").each(function(index) {
      if (!(category)) {
        jQuery(this).show();
      } else {
        var currentCategory = 'type-' + category;
        if (jQuery(this).hasClass(currentCategory)) {
          jQuery(this).show();
        }
      }
    });
  }
  
  // Remove all color classes which might be set previously
  function removeColors() {
    var a = ["services", "portfolio", "sale", "feedback"]
    for (var i = 0; i < a.length; i++) {
      jQuery("#divider .triangle-top").removeClass(a[i]+"-triangle");
    }
  }

});
