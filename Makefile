run:
	docker run --rm -v $(shell pwd):/site -p 4000:4000 andredumas/github-pages serve --watch
