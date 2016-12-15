// load CSS adjustments
$('head').append('<link rel="stylesheet" type="text/css" href="https://libraries.cca.edu/summon/summon.min.css">')

// adjust main logo size/spacing on large screens
$('div[size="large"] .logo')
    .attr('src', 'https://s3.amazonaws.com/libapps/accounts/21563/images/orange-logo-620w.jpg')

// highlight the "did you mean" box more, combines with styles in custom CSS
$('.didYouMean').addClass('alert alert-warning')

// course reserves suggestion
// course code pattern: five capital letters preceded either by nothing or whitespace
// followed either by nothing, whitespace, or a hyphen (e.g. PHOTO-101)
var courseRegex = /(^|\s)[A-Z]{5}(\s|-|$)/
// run inside recursive function so we can execute once jQuery is available
function courseBestBet() {
    if ($ && $('form[role="search"]').scope()) {
        // using Angular to find query
		console.log('jQuery found');
        if ($('form[role="search"]').scope().search.query.match(courseRegex)) {
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
    } else {
        console.log('no jQuery yet...');
        setTimeout(courseBestBet, 300)
    }
}
courseBestBet()
