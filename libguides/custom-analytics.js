// requires gtag.js (see `npm run libguides-analytics` command)
window.dataLayer = window.dataLayer || []
function gtag(){
    dataLayer.push(arguments)
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
if (location.pathname.match('/az.php')) {
    $('#s-lg-az-content').on('click', '.s-lg-az-result-title a', ev => {
        // 1 = first DB listed, closer to 0 is lowest along the list
        let num_dbs = $('.s-lg-az-result-title a').length
        let ranking =   (num_dbs - $('.s-lg-az-result-title a').index(ev.target)) * 100 / num_dbs
        gae('DB Click', ev.target.href, ranking)
    })

    // alphabet buttons
    $('#s-lg-az-index').on('click', ev => {
        gae('Letter Filter', ev.target.textContent)
    })

    // filters
    $('#s-lg-az-filter-cols').on('blur change', 'select', ev => {
        // use <select> ID to see which filter it is
        let filter = $(ev.target).parent().find('label').text()
        gae('Filter', filter)
    })

    // clear all filters button
    $('#s-lg-az-reset').on('click', () => {
        gae('Filter', 'Clear Filters/Browse All Databases')
    })

    // popular & new/trial DBs
    $('#s-lg-az-popular').on('click', '.s-lg-az-result-title a', ev => {
        gae('Popular DB Click', ev.target.href)
    })
    $('#s-lg-az-trials-div').on('click', '.s-lg-az-result-title a', ev => {
        gae('New / Trial DB Click', ev.target.href)
    })
}
