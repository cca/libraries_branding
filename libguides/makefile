all : js sass

# need to have uglify installed globally
js :
	uglifyjs --compress --mangle --screw-ie8 main.js >> main.min.js

#  need to have sass installed globally
sass :
	sass --sourcemap=none --style=compressed main.scss main.min.css
