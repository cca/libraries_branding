all: css

css:
	sass --style=compressed main.scss > 360core.css

push:
	rsync -avz 360core.css live:~; ssh -t live 'sudo mv -v ~/360core.css /opt/libraries_wagtail/libraries/libraries/static'
