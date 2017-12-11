all : analytics js sass

analytics :
	npx babel --presets latest custom-analytics.js | npx uglifyjs --compress --mangle >> custom-analytics.min.js

js :
	npx uglifyjs --compress --mangle main.js >> main.min.js

#  need to have sass installed globally
sass :
	sass --sourcemap=none --style=compressed main.scss main.min.css
