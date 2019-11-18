// analytics tracking for 360 Link "1-click with sidebar"
(function(jQuery) {
    'use strict';
    // "Click this link..." just go directly to the link, bypass sidebar frame
    // Poll to see if 360 Link scripts have finished & we have href on the DOM
    let interval = setInterval(() => {
        console.log('interval')
        // when the applySelectedOption function of
        // *.search.serialssolutions.com/alEJPStatic/js/newUI-sidebar.js
        // has run it will .show() one of these containers & .hide() the other two
        // we test to see if they all have style attributes
        let styleAttrs = jQuery('#iframeContainer, #insecureContentContainer, #oneClickExcludeContainer')
            .map((i, el) => el.getAttribute('style')).get()
        if (styleAttrs.every(s => s !== null)) {
            clearInterval(interval)
            // redirect to "Click this link..." href if there is one
            jQuery('#insecureContent, #oneClickExclude')
                .each((i, el) => {
                    let href = el.getAttribute('href')
                    if (href) {
                        el.textContent = 'Please wait a moment while we redirect you...'
                        location = href
                    }
                })
        }
    }, 200)

    // load analytics if we don't have them yet
    // jshint ignore:start
    if (!window.ga) {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-18459158-4', 'auto');
        ga('send', 'pageview');
    }
    // jshint ignore:end
    console.log('analytics initialized')
    let article = `"${$('.sidebar .title').text().trim()}". ${$('.sidebar .citation-data').text().trim()}`
        .replace(/\n/g, '').replace(/\s{2,}/g, ' ')
    function track (action) {
        ga('send', 'event', 'sidebar', action, article)
    }
    // array selector-label pairs to track interaction
    [
        ['.breakout', 'close sidebar'],
        ['.hide-sidebar', 'collapse sidebar'],
        ['.sidebar-collapsed-clickable', 'expand sidebar'],
        ['#ulrichs-control', 'journal details'],
        ['#source-control', 'database source list'],
        ['#browse-link', 'browse journal'],
        ['#link-to-book-text', 'link to book'],
        ['#link-not-working', 'report a problem'],
        ['.email-action', 'email'],
        ['.export-action', 'export'],
        ['#go-back', 'additional options'],
        ['#open-in-new-tab', 'open content in a new tab'],
    ].forEach((item)=>$('.sidebar').on('click', item[0], () => track(item[1])))
})($)
