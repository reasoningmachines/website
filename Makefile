.DEFAULT_GOAL := help
.PHONY: help dev build check
help:
	@printf '%s\n' 'Reasoning Machines local workflow' 'make build — build static assets' 'make check — build, syntax and document checks, Kit validation' 'make dev — serve the built preview on 127.0.0.1:4173'
build:
	npm run build
check: build
	npm run check
	kit check --project
dev: build
	npm run dev
