@echo off
@echo "Dropping database"
psql -h localhost -U postgres -c "drop database store-dev"
@echo "Creating database"
psql -h localhost -U postgres -c "create database store-dev"
