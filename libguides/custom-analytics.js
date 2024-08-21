// requires gtag.js (see `npm run libguides-analytics` command)
window.dataLayer = window.dataLayer || []
function gtag(){
    window.dataLayer.push(arguments)
}
gtag('js', new Date())
gtag('config', 'UA-18459158-3', {
    'allow_ad_personalization_signals': false,
    'allow_google_signals': false,
    'anonymize_ip': true,
    'forceSSL': true
})

// record an analytics event
let gae = (category, label, value) => {
    gtag('event', category, {
        'cca_label': label,
        'cca_value': value
    })
}

// special event tracking for A-Z list
if (location.pathname.match('/az/databases')) {
    $('#s-lg-az-content').on('click', '.az-item h4 a', ev => {
        // 1 = first DB listed, higher is further from top
        let ranking = $('.az-item h4 a').index(ev.target) + 1
        gae('DB Click', ev.target.href, ranking)
    })

    // alphabet buttons
    $('#s-lg-az-index').on('click', ev => {
        gae('Letter Filter', ev.target.textContent)
    })

    // filters
    $('#s-lg-az-filter-cols').on('blur change', 'select, input', ev => {
        // use label to determine filter
        let filter = $(ev.target).attr('aria-label')
        if ($(ev.target).hasClass('s-lg-az-search')) filter = 'Search'
        if (filter) gae('Filter', filter)
    })

    $('.s-lg-az-reset').on('click', () => {
        gae('Filter', 'Clear Filter')
    })

    // clear all filters button
    // this doesn't seem to be visible anymore but still exists in the DOM
    $('#s-lg-az-reset').on('click', () => {
        gae('Filter', 'Clear Filters/Browse All Databases')
    })

    // popular & new/trial DBs
    $('#s-lg-az-popular').on('click', 'h5 a', ev => {
        gae('Popular DB Click', ev.target.href)
    })
    $('#s-lg-az-trials').on('click', 'h5 a', ev => {
        gae('New / Trial DB Click', ev.target.href)
    })
}
