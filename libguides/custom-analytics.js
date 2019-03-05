(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-18459158-3', 'auto')
ga('set', 'anonymizeIp', true)
ga('set', 'forceSSL', true)
ga('send', 'pageview')

let gae = (cat, action, label, value) => {
    // @TODO once this is working remove the logging
    console.log('analytics event', cat, action, label, value)
    ga('send', 'event', cat, action, label, value)
}

$('a[href^=http]').on('click', (ev) => {
    let href = ev.target.href;

    // note: doesn't work all our DB aliases, which are on LibGuides domain
    if (!href.match(location.origin)) {
        gae('Outbound links', 'Click', href);
    }
});

// special event tracking for A-Z list
if (location.pathname.match('/az.php')) {
    $('#s-lg-az-content').on('click', '.s-lg-az-result-title a', (ev) => {
        // 1 = first DB listed, closer to 0 is lowest along the list
        let num_dbs = $('.s-lg-az-result-title a').length
        let ranking =   (num_dbs - $('.s-lg-az-result-title a').index(ev.target)) * 100 / num_dbs
        gae('TEST A-Z List', 'DB Click', ev.target.href, ranking);
    })

    // alphabet buttons
    $('#s-lg-az-index').on('click', (ev) => {
        gae('TEST A-Z List', 'Letter', ev.target.textContent);
    })

    // filters
    $('#s-lg-az-filter-cols').on('blur change', 'select', (ev) => {
        // use <select> ID to see which filter it is
        let filter = $(ev.target).parent().find('label').text()
        gae('TEST A-Z List', 'Filter', filter);
    })

    // clear all filters button
    $('#s-lg-az-reset').on('click', (ev) => {
        gae('TEST A-Z List', 'Filter', 'Clear Filters/Browse All Databases');
    })

    // popular & new/trial DBs
    $('#s-lg-az-popular').on('click', '.s-lg-az-result-title a', (ev) => {
        gae('TEST A-Z List', 'Popular DB Click', ev.target.href);
    })
    $('#s-lg-az-trials-div').on('click', '.s-lg-az-result-title a', (ev) => {
        gae('TEST A-Z List', 'New / Trial DB Click', ev.target.href);
    })

}
