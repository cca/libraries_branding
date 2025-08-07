# Summon Customizations

Customizations for the libraries' Summon discovery layer.

We've also set a few [options](https://customize.summon.serialssolutions.com/settings) for custom colors:

- CCA teal `#00bfb3` for "Authentication Banner Background Color"
- light gray `#e4e8eb` for "Header Background Color"
- darker gray `#555` for the header link styles

## Custom JavaScript

Summon lets us load custom JavaScript and CSS under the "[Summon 2.0 External Script](https://customize.summon.serialssolutions.com/settings#Summon20ExternalScript)" settings. We used to have to host a JS file which did all this on libraries.cca.edu but now we can paste our code directly into the admin site. Our JS provides our "broken link" reporting which goes to the [Summon Broken Links](https://docs.google.com/spreadsheets/d/1BwLD3ERky-FkSAdwGpRrvZ3MwD6uV0kKpPlJERgLSA0/edit?gid=879487924#gid=879487924) spreadsheet.

## NPM Scripts

There are npm scripts available to build and copy-paste our custom CSS/JS. The `pre` tasks open [the preview environment settings URL](./preview-url.txt) whereas the others open [the production URL](./url.txt).

- `npm run sum-css`
- `npm run sum-pre-css`
- `npm run sum-js`
- `npm run sum-pre-js`

## Notes

See Matthew Reidsma's [Summon work at GVSU](https://github.com/gvsulib/Summon-2.0-Scripts) for ideas.

**Custom panels have a 2040 character limit.** So if the code is getting particularly lengthy or complex, you'll need to work around that by abstracting out a section or rewriting it.
