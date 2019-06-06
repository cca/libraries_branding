all : analytics js sass

analytics :
	npx babel --presets @babel/preset-env,minify custom-analytics.js > custom-analytics.min.js

js :
	npx babel --presets @babel/preset-env,minify main.js > main.min.js

#  need to have sass installed globally
sass :
	sass --sourcemap=none --style=compressed main.scss main.min.css
