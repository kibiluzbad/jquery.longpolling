(function( $ ){

  $.fn.longPolling = (function( options ) {  
  
    var settings = $.extend( {      
      'timeout' : 30000,
	  'complete': function(){ $.fn.longPolling(options) },
	  'dataType': 'html',
	  'type'	: 'get'
    },options);    
	
	  $.ajax(settings);
    });
})( jQuery );