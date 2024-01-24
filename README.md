## Express.js Challenge

## Task 1:
Create an ExpressJS server that can perform the following actions:

* Display a nice welcome message on its root route (eg. "localhost:3000/")
* Repeat a POST'd message on a "repeater" route (eg. "localhost:3000/repeater"). The repeat functionality could be as simple as adding a received string to another string multiple times, and then returning that other string as the response.
* Create a message controller that has routes representing CRUD. The CRUD routes don't have to actually do any database-interacting things, but the routes should return a different message so that you can see that your different web request HTTP verbs are triggering the right route.

## Task 2 
It should be able to:
* add, 
* subtract, 
* multiply, and 
* divide 

any two integers, and return a JSON object with the operation as a string and the result as a number. Attempting to perform any operation outside of these four should return a 404 NOT FOUND error.