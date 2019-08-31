run:
	docker run --rm -v $(shell pwd):/usr/src/app -p 4000:4000 starefossen/github-pages
