# Summon Customizations

Customizations for the libraries' Summon discovery layer.

The included `summon-deletes.sh` script helps with FTP-ing catalog updates to ProQuest and archiving data in the "marc" folder.

We've also set a few [options](https://customize.summon.serialssolutions.com/settings) for custom colors:

- CCA teal `#00bfb3` for "Authentication Banner Background Color"
- light gray `#e4e8eb` for "Header Background Color"
- darker gray `#555` for the header link styles

## Monthly Summon Deletions

**NEW** (2021-03): I wrote a Python script "sd.py" that makes notifying Summon of deleted records even less interactive. I've performed one test but it's still relatively new. It would make sense to run this on a more advanced schedule via cron. It uses python3, requests, and pysftp and I have yet to write a Pipfile for it but probably should.

---

To delete records from Summon, I run the following on a monthly basis:

```sh
> # knows the last time I ran it via the .lastrun text file
> ./summon-deletes.sh
> # the report URL opens in Koha, sign in, download CSV & name it "deletes.csv"
> # hit return & the sftp command is copied to clipboard. "summon" is an SSH alias
> pbpaste | sftp summon
> # enter Summon SFTP password, upload happens, the deletes CSV is dated then
> # archived in "marc" subdirectory, .lastrun is set to current date
```

## Notes

See Matthew Reidsma's [Summon work at GVSU](https://github.com/gvsulib/Summon-2.0-Scripts) for ideas.

Included `npm` scripts:

- `summon-css` compiles SASS to minified CSS
- `summon-js` compiles ES6 to minified JavaScript
- `summon-build` does both of the above
- `summon-push` syncs the minified files to the libraries' web server

**Custom panels have a 2040 character limit.** So if the code is getting particularly lengthy or complex, you'll need to work around that by abstracting out a section or rewriting it.
