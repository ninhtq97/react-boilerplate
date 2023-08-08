.PHONY: build
build:
	npm i && npm run build
	rm -rf ./dist
	cp -r ./build ./dist
start:
	$(MAKE) build
	pm2 --name pgw-web-admin --time start app.js
restart:
	$(MAKE) build
	pm2 restart pgw-web-admin --update-env
