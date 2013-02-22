How to use
==========

    $(document).longPolling({
			url: 'http://localhost:4567/test', //url to call
			dataType: 'text',
			success: function( data, textStatus, jqXHR ){
				if(data) setTimeout(function(){$("#area").text(data);},1000); // Function called when resquest succeed
			},
			ifModified: true
		});