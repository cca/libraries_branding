all : build push

build : css js

# requires ruby's sass gem installed globally
css :
	sass --style=compressed --sourcemap=none summon.scss > summon.min.css

# require's npm's babel-cli & uglify-js installed globally
# and babel-preset-latest _installed locally_
js :
	babel --presets latest summon.js | uglifyjs --compress --mangle --screw-ie8 > summon.min.js

# assumes an SSH alias of "live" for the server where you want to put the script
push :
	rsync -avz summon.min.* live:~/libraries.cca.edu/summon
