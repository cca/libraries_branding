(function(d) {
    setTimeout(() => {
        let css = d.createElement('link')
        css.setAttribute('rel', 'stylesheet')
        css.setAttribute('type', 'text/css')
        css.href = 'https://libraries.cca.edu/static/summon/summon.min.css'
        // load CSS adjustments
        d.querySelector('head').append(css)

        // adjust main logo size/spacing on large screens
        d.querySelector('div[size="large"] .logo')
            .setAttribute('src', 'https://libapps.s3.amazonaws.com/sites/2210/banner/libguide-logo-fa17.png')

        // event tracking for bX recommender
        let query = new URLSearchParams(location.hash).get('q')
        // track every click on results area but only send events for bx links
        d.querySelector('#results').addEventListener('click', (ev) => {
            if (ev.target.parentNode.classList.contains('bxRecommenderLink')) {
                _gaq.push(['_trackEvent', 'bX Recommender', 'click', query])
            }
        })
    }, 500)
})(document)
