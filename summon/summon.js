function init() {
    $(document).ready(() => {
        // load CSS adjustments
        $('head').append('<link rel="stylesheet" type="text/css" href="https://libraries.cca.edu/static/summon/summon.min.css">')

        // adjust main logo size/spacing on large screens
        $('div[size="large"] .logo')
            .attr('src', 'https://libapps.s3.amazonaws.com/sites/2210/banner/libguide-logo-fa17.png')
    })
}

// our scripts often load before jQuery unfortunately & we need that
// @TODO is code actually less complex as vanilla JS without jQuery?
(function initWhenjQueryReady() {
    if (jQuery) {
        console.log('jQuery found, running init()')
        init()
    } else {
        console.log('no jQuery yet...');
        setTimeout(initWhenjQueryReady, 300)
    }
})()
