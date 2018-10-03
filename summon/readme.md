# Summon Customizations

Customizations for the libraries' Summon discovery layer.

The included `upcat` script helps with FTP-ing catalog updates to ProQuest. Afterwards, `cleanup` trashes downloaded CSVs (using npm's trash-cli) and archives data in the "marc" folder.

We've also set a few [options](https://customize.summon.serialssolutions.com/settings) for custom colors:

- CCA teal `#00bfb3` for "Authentication Banner Background Color"
- light gray `#e4e8eb` for "Header Background Color"
- darker gray `#555` for the header link styles

## Notes

See Matthew Reidsma's [Summon work at GVSU](https://github.com/gvsulib/Summon-2.0-Scripts) for ideas.

Included `make` tasks:

- `css` compiles SASS to minified CSS
- `js` compiles ES6 to minified JavaScript
- `build` does both of the above
- `push` syncs the minified files to the libraries' web server

**Custom panels have a 2040 character limit.** So if the code is getting particularly lengthy or complex, you'll need to work around that by abstracting out a section or rewriting it.
