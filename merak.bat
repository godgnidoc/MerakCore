@echo off
set NODE_NO_WARNINGS=1
node --experimental-specifier-resolution=node %~dp0dist %*