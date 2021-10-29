# Summon Customizations

Customizations for the libraries' Summon discovery layer.

We've also set a few [options](https://customize.summon.serialssolutions.com/settings) for custom colors:

- CCA teal `#00bfb3` for "Authentication Banner Background Color"
- light gray `#e4e8eb` for "Header Background Color"
- darker gray `#555` for the header link styles

## Notes

See Matthew Reidsma's [Summon work at GVSU](https://github.com/gvsulib/Summon-2.0-Scripts) for ideas.

Included `npm` scripts:

- `summon-css` compiles SASS to minified CSS
- `summon-js` compiles ES6 to minified JavaScript
- `summon-build` does both of the above

Running the `./sync` scripts syncs the minified files (for all branding folders) to the libraries' web server. It relies on Eric's `k8` kubectl wrapper and syncs to dev/prod based on what `NS` namespace env var you use.

**Custom panels have a 2040 character limit.** So if the code is getting particularly lengthy or complex, you'll need to work around that by abstracting out a section or rewriting it.
