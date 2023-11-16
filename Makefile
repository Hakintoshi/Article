SHELL = /bin/sh
docker_bin := $(shell command -v docker 2> /dev/null)
docker_compose_bin := $(shell command -v docker-compose 2> /dev/null)

.DEFAULT_GOAL := help

help: ## Show this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
	@echo "\n  Allowed for overriding next properties:\n\n\
		Usage example:\n\
	    	make up"
# --- [ Init ] --------------------------------------------------------------------------------------------------

init: init-folders build-front install-modules-webserver build up ## Инициализация проекта

init-folders:
	sudo chown -R $(USER):$(USER) ../Article \
	&& sudo chown -R $(USER):$(USER) src/ \

dev-front: ## run dev server
	@cd ./src/frontend && npm run dev

build-front: ## build front scripts from source
	@cd ./src/frontend && npm i --no-package-lock && npm run build

install-modules-webserver: ## webserver install modules
	@cd ./src/backend && npm i --no-package-lock

build: ## Сборка docker контейнеров приложения
	$(docker_compose_bin) build
#	${docker_bin} compose build

up: ## Сборка и поднятие docker контейнеров при помощи docker-compose
	$(docker_compose_bin) -f docker-compose.yml up -d --remove-orphans
	#${docker_bin} compose up -d --remove-orphans

down: ## Удаление docker контейнеров
	$(docker_compose_bin) down
#	${docker_bin} compose down