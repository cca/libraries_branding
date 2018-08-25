all : build

build : css js

# requires ruby's sass gem installed globally @TODO just use node-sass
css :
	sass --style=compressed --sourcemap=none summon.scss > summon.min.css

js :
	npx babel --presets latest,minify broken-link-modal.js summon.js > summon.min.js
