# Summon Customizations

Customizations for the libraries' Summon discovery layer.

We've also set a few [options](https://customize.summon.serialssolutions.com/settings) for custom colors:

- CCA teal `#00bfb3` for "Authentication Banner Background Color"
- light gray `#e4e8eb` for "Header Background Color"
- darker gray `#555` for the header link styles

## Monthly Summon Deletions

**NEW** (2021-03): we use a Python 3 script "sd.py" to automate notifying Summon of deleted catalog records. It could run on a schedule via cron. It uses pipenv, requests, and pysftp. Example usage:

```sh
$ pipenv install # create environment & add dependencies, only the first time
$ pipenv shell
$ python sd.py
14 records were deleted since 2021/04/16
Successfully uploaded deleted records to Summon FTP server.
```

The old method was the "summon-deletes.sh" script which is included as an artifact.

## Notes

See Matthew Reidsma's [Summon work at GVSU](https://github.com/gvsulib/Summon-2.0-Scripts) for ideas.

Included `npm` scripts:

- `summon-css` compiles SASS to minified CSS
- `summon-js` compiles ES6 to minified JavaScript
- `summon-build` does both of the above
- `summon-push` syncs the minified files to the libraries' web server

**Custom panels have a 2040 character limit.** So if the code is getting particularly lengthy or complex, you'll need to work around that by abstracting out a section or rewriting it.
