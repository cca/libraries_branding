all : build push

build :
	# you'll need to have babel-cli & uglify-js installed globally for this to work
	# and babel-preset-latest installed locally
	babel --presets latest summon.js | uglifyjs --compress --mangle --screw-ie8 >> summon.min.js

push :
	# assumes an SSH alias of "live" for the server where you want to put the script
	rsync -avz summon.min.js live:~/libraries.cca.edu/summon
