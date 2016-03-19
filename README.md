# profi.ru-showcase

#About

The idea lies behind creating some html fetcher from remote sources through uri.

#Install

1)do "npm init"
2)run server from root of project "node server.js"

#Usage
1) make a Get request with param called 'uri' (localhost:300/?uri=google.com)
2)in response you will see a json file with two fields: status and body.First for status of request, and the second one is 
for html content of requested page.

#Tests
1)install jasmine globally (npm install jasmine-node -g)
2)under tests dir run "jasmine-node spec"
