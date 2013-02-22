/*!
 * jQuery Long Polling plugin
 * version: 0.0.1
 * @requires jQuery v1.5 or later
 *
 * Project repository: https://github.com/kibiluzbad/jquery.longpolling
 * Licensed under the GPL license:
 *    https://github.com/kibiluzbad/jquery.longpolling/blob/master/license/gpl-license-v2.txt
 */
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