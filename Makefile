test:
	./node_modules/.bin/browserify test/index_spec.js app/**/*.js --debug > test/test.bundle.js
	./node_modules/.bin/mocha-phantomjs --timeout 50000 test/runner-cli.html
	rm test/test.bundle.js
.PHONY: test
