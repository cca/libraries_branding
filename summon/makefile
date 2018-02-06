all : build push

build : css js

# requires ruby's sass gem installed globally @TODO just use node-sass
css :
	sass --style=compressed --sourcemap=none summon.scss > summon.min.css

js :
	npx babel --presets latest broken-link-modal.js summon.js | npx uglifyjs --compress --mangle > summon.min.js

# assumes an SSH alias of "live" for the server where you want to put the script
push :
	rsync -avz summon.min.* live:~/wagtail/libraries/libraries/static/summon
