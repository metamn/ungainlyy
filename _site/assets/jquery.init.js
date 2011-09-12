jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){

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
      var color = jQuery(this).attr('class');
      var klass = color + "-triangle";
      jQuery("#divider .triangle-top").addClass(klass);
    },
    function () {
      var color = jQuery(this).attr('class');
      var klass = color + "-triangle";
      jQuery("#divider .triangle-top").removeClass(klass);
    }
  );

});
