node-middleware
===============

A nodejs middleware to performing async acces data

Architecture description :

--
  view (restfull call)
                          -> routes/ 
                                    - Get data over HTTP
                                    - Set data over HTTP
                                    <- send data
  send data 
--
              
