// provide "best bet" like functionality for any query that matches
// a course code such as "ARCHT-101"
function courseBestBet() {
    // course reserves suggestion
    // course code pattern: five capital letters preceded either by nothing or whitespace
    // followed either by nothing, whitespace, or a hyphen (e.g. PHOTO-101)
    var courseRegex = /(^|\s)[A-Z]{5}(\s|-|$)/

    $('form input[name="q"]').ready(() => {
        console.log('form ready')
        // @TODO doesn't work, val() isn't ready ever
        if ($(this).text().match(courseRegex)) {
            console.log('query matches course regex')
            // copied from actual best bet HTML
            // uses ES6 template string so we have to compile with babel before minifying
            var html = `<div class="details">
            <span class="bg-img site-green_arrow"></span>
            <!-- ngIf: !item.bet.link -->
            <!-- ngIf: !!item.bet.link --><h3 ng-if="!!item.bet.link" class="ng-scope">
              <a ng-href="https://libraries.cca.edu/content/course-reserves-request" target="_blank" class="customPrimaryLink ng-binding" ng-bind="item.bet.title" href="https://libraries.cca.edu/content/course-reserves-request">Course Reserves</a>
            </h3><!-- end ngIf: !!item.bet.link -->
            <div>
              <span ng-bind-html="item.bet.description" class="ng-binding"><p>Look in the library catalog for your course reserves.</p></span>
            </div>
          </div>`
            $('.bestBet').html(html)
        }
    })
}

function init() {
    $(document).ready(() => {
        // load CSS adjustments
        $('head').append('<link rel="stylesheet" type="text/css" href="https://libraries.cca.edu/summon/summon.min.css">')

        // adjust main logo size/spacing on large screens
        $('div[size="large"] .logo')
            .attr('src', 'https://s3.amazonaws.com/libapps/accounts/21563/images/orange-logo-620w.jpg')

        // course reserve "best bet" for course-like queries
        courseBestBet()
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
