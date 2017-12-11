(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-18459158-3', 'auto');
ga('send', 'pageview');

$('a[href^=http]').on('click', (ev) => {
    var href = this.href;

    if (!href.match(location.origin)) {
        ga('send', 'event', 'Outbound links', 'Click', href);
    }
});
