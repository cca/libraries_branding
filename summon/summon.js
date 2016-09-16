// adjust main logo size/spacing on large screens
$('div[size="large"] .logo')
    .attr('src', 'https://s3.amazonaws.com/libapps/accounts/21563/images/orange-logo-620w.jpg')
    .css('margin-top', '10em')

// links menu background color is too light for white font
$('#linksMenu').css('background', '#777')

// course reserves suggestion
// course code pattern: five capital letters preceded either by nothing or whitespace
// followed either by nothing, whitespace, or a hyphen (e.g. PHOTO-101)
var courseRegex = /(^|\s)[A-Z]{5}(\s|-|$)/
if (angular.element($('#searchBox_00V')).scope().search.query.match(courseRegex)) {
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
