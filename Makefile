
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

test: build
	@component test phantom

test-browser: build
	@component test chrome

.PHONY: clean test
