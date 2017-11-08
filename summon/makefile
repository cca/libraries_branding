all : build push

build : css js

# requires ruby's sass gem installed globally
css :
	sass --style=compressed --sourcemap=none summon.scss > summon.min.css

# require's npm's babel-cli & uglify-js installed globally
# and babel-preset-latest _installed locally_
js :
	npx babel --presets latest summon.js | npx uglifyjs --compress --mangle > summon.min.js

# assumes an SSH alias of "live" for the server where you want to put the script
push :
	rsync -avz summon.min.* live:~/wagtail/libraries/libraries/static/summon
