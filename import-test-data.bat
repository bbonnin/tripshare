@echo off

set MONGOPATH=C:\Program Files\MongoDB\Server\3.4

"%MONGOPATH%\bin\mongoimport" -h localhost:27017 -d tripshare -c trips --drop --jsonArray --file test\trips.json

pause