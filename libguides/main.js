// run when subjects are loaded
$(document).on('click', '#s-lg-index-subject-btn', () => {
    // wait for subjects to be in DOM
    setTimeout(() => {
        // modified from https://matthew.reidsrow.com/worknotes/184

        // Make sure you are on the homepage
        if ($('#s-lg-index-list').length > 0) {

            // Loop through all the subjects
            $('#s-lg-index-cols').find('div.panel.panel-default').each(function() {
                // cache to decrease DOM lookups
                let panel = $(this)
                // Get the number of guides in this subject
                let guides = parseInt(panel.find('.badge').text())

                // If there is only one guide, change the link
                if (guides === 1) {
                    // Get the link to the guide
                    let newLink = panel.find('.panel-collapse')
                        .find('ul.s-lg-guide-list').find('li a').attr('href')

                    // Remove the action elements in the heading & switch href
                    panel.find('.panel-heading').find('a')
                        .removeAttr('data-toggle').attr('href', newLink)
                }
            })

        }
    }, 500)
})

// add library chat widget if we are available
// use libraryh3lp Presence API https://dev.libraryh3lp.com/presence.html
fetch('https://libraryh3lp.com/presence/jid/cca-libraries-queue/chat.libraryh3lp.com/text')
    .then(resp => resp.text())
    .then(status => {
        // only display if we are signed in
        if (status === 'available' || status === 'chat') {
            $('body').append('<div class="needs-js">')
            let x = document.createElement("script")
            x.type = "text/javascript"
            x.async = true
            x.src = "https://libraryh3lp.com/js/libraryh3lp.js?13843"
            let y = document.getElementsByTagName("script")[0]
            y.parentNode.insertBefore(x, y)
        }
    })
