# Custom Panel Sections

These are small content panels that appear in Summons' right-side context column during specified queries, see for instance ["artists books"](https://cca.summon.serialssolutions.com/#!/search?ho=t&l=en&q=artists%20books)

To add or update them, visit the admin console then go to Pages > [Custom Panel Sections](https://customize.summon.serialssolutions.com/pages/custom_sections)

Each panel has a list of "tags" which are the text of the queries for which it will appear. Summon now does basic stemming such that a tag of "hour" will match the query "hours".

To add these HTML files as panels, select _Tools_ > _<> Source Code_ in the WYSIWYG editor, then paste in the entire file. Note that the admin interface has trouble understanding some of our more complicated panels (e.g. with randomly selected or rotating images) and may show some kind of rendering error, but the panels will work in the search interface fine. Changes take several minutes to be reflected in Summon.

There is an (unspoken) 2040 character limit, which can be a problem if you have a lot of long URLs, text, or a complicated script in these panels. There's no great way to work around that other than a series of hacks, such as using URL shorteners/redirects in our Wagtail instance and referencing long scripts or styles as external files.
