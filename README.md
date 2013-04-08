Introduction
===============
<p>
Node middleware is a simple layer between Client architecture (Eg mobile device) and Persistent data layer.  <br />
The informations are exchanged over HTTP in Json format. <br />
Whit nodejs we can use Event-drive development to write a middleware layer and send the data only after callback function.
</p>
<p>
For example imagine mobile architecture in JQuery Mobile and Backbone.js. <br />
When the client sends a request to get some data, the middleware take the control and dispatch the request with a callback function (maybe in the same server or Rest API ).<br />
So the client device does not wait a response and it keep browser control. <br />
Obviously the time to get a data it depends of the kind of data layer, connection and more,  but node-middleware helps the perception of user speed navigation.
</p>

Architecture  
===============
             
![Architecture diagram](https://raw.github.com/amassi/node-middleware/master/architecture.png "Node middleware architecture to mobile application")

Step 1
------
   Client send a restfull request
   
Step 2
------
  l aunch getData() with callback  
   [is a non-blocking process for the client]
   
Step 3
------
   show data in Json format when the are availables

 
