start: stop
	docker-compose up -d --build

stop:
	docker-compose stop
	docker-compose down --volumes --remove-orphans
	@docker rm draganddop || true

ps:
	docker-compose ps

logs:
	docker-compose logs -f draganddop

shell:
	docker exec -it draganddop ash