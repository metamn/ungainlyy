jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){

  
  // Click and double click on portfolio items
  var flag = 1; 
  jQuery(".wide #background-image img").click(function() { 
    var url = jQuery(this).attr('rev');
    setTimeout(function() { 
      if(flag) { 
        window.location.href = url; 
      } 
    }, 500); 
    flag = 1; 
  });  
  jQuery(".wide #background-image img").dblclick(function() { 
    window.location.href = jQuery(this).attr('rel');
    flag = null; 
  });
  
  
  
  // Show the Soros book
  jQuery(".soros").hover (
    function() {
      jQuery("#soros").show('slow');
    },
    function () {
    
    }  
  );

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
    var a = ["bestseller", "latest", "sale", "featured"]
    for (var i = 0; i < a.length; i++) {
      jQuery("#divider .triangle-top").removeClass(a[i]+"-triangle");
    }
  }

});
