# node_assessment

## Steps to setup the project
- git clone https://github.com/prithviraj99/node_assessment.git
- npm install
- npm start

Server starts on port 3001 by default and serves the index.html file content in browser.

The following repository is an assessment. Here are the points addressed:

### Nodejs server that listens on port 3001 and outputs a file content from any local directory (index.html) 

URL - http://localhost:3001
This includes a home page and also file upload functionality mentioned later from browser.

### Nodejs server that serves as a RESTFUL api that takes two parameters in a GET call and produces their product

URL(GET) - http://localhost:3001/api/v1/product/{number1}/{number2}
Output - { productValue: (number1* number2)}

### Nodejs server that serves as a RESTFUL  api that accepts a String as an input name and returns the first non-repeating character in the String

URL(POST) - http://localhost:3001/api/v1/search 
POST Data : { inputStr: 'SaazS' }
Output - { outputChar: 'z' }

### Nodejs server that serves as a RESTFUL  api that accepts a file content and writes them to the disk

URL(POST) - http://localhost:3001/upload
POST form-data : {file: (Choose file)}
File gets wriiten to routes directory of project's folder.
