// IIFE
(function() {
    // delay load so LibGuides subjects are in DOM
    setTimeout(function(){
        // shamelessly copied from https://matthew.reidsrow.com/worknotes/184
        // Make sure you are on the homepage
        if($('#s-lg-index-list').length > 0) {

        	// Loop through all the subjects
        	$('#s-lg-index-cols').find('div.panel.panel-default').each(function() {

        		// Get the number of guides in this subject
        		var guides = $(this).find('.badge').text();
        		// console.log('Number of guides: ' + guides);

         		// If there is only one guide, change the link
        		if(guides == 1) {
        			// Get the link to the guide
        			var newLink = $(this).find('.panel-collapse').find('ul.s-lg-guide-list').find('li').find('a').attr('href');

        			// Remove the action elements in the heading
        			$(this).find('.panel-heading').find('a').removeAttr('data-toggle');

        			// Switch out the href
        			$(this).find('.panel-heading').find('a').attr('href', newLink);
        		}
        	});

        }
    }, 500)
})()
