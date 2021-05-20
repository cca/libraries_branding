# Vendor Branding

A lot of the library's third-party products provide some modest custom branding opportunities. This repository simply collects header/footer HTML, styles, widgets, etc.

Uses Eric's [portable header](https://github.com/phette23/portable-header) project in places.

If you run `open $(cat url.txt)` in a subfolder, it should open to the page where you perform the customization. You'll need to login. Credentials are listed in the password vault or library wiki.

# Setup

Requires `node` and `ruby`, then install dependencies in this folder with:

```sh
> gem install sass
> npm install
```

Some of the shell scripts require basic UNIX tools like `rsync` and `ssh`. One of the Summon scripts uses [Fish shell](https://github.com/fish-shell/fish-shell).

# LICENSE

[ECL Version 2.0](https://opensource.org/licenses/ECL-2.0)
