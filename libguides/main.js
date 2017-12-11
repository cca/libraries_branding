// run when subjects are loaded
$(document).on('click', '#s-lg-index-subject-btn', function(){
    // wait for subjects to be in DOM
    setTimeout(function(){
        // modified from https://matthew.reidsrow.com/worknotes/184

        // Make sure you are on the homepage
        if ($('#s-lg-index-list').length > 0) {

        	// Loop through all the subjects
        	$('#s-lg-index-cols').find('div.panel.panel-default').each(function() {
                // cache to decrease DOM lookups
                var panel = $(this)

        		// Get the number of guides in this subject
        		var guides = parseInt(panel.find('.badge').text());

         		// If there is only one guide, change the link
        		if (guides === 1) {
        			// Get the link to the guide
        			var newLink = panel.find('.panel-collapse')
                        .find('ul.s-lg-guide-list').find('li a').attr('href');

        			// Remove the action elements in the heading & switch href
        			panel.find('.panel-heading').find('a')
                        .removeAttr('data-toggle').attr('href', newLink);
        		}
        	});

        }
    }, 500)
})
