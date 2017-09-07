function init() {
    $(document).ready(() => {
        // load CSS adjustments
        $('head').append('<link rel="stylesheet" type="text/css" href="https://libraries.cca.edu/summon/summon.min.css">')

        // adjust main logo size/spacing on large screens
        $('div[size="large"] .logo')
            .attr('src', 'https://s3.amazonaws.com/libapps/accounts/21563/images/orange-logo-620w.jpg')
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
