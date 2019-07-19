all : build

build : css js

css :
	sass --style=compressed --sourcemap=none scss/summon.scss > summon.min.css

js :
	npx babel --presets @babel/preset-env,minify broken-link-modal.js summon.js > summon.min.js
