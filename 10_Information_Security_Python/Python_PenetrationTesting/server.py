#!/usr/bin/python

import socket

#! Create a Soquet
serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

host = socket.gethostbyname()
port = 444

#! Bind host name and port to the socket
serversocket.bind((host, port))

serversocket.listen(3)

while True:
    clientsocket, address = serversocket.accept()
    
    print("receive connection from " % str(address))
    
    #! Notify the user about successfull connection
    message = "Thank you for connecting to the server" + "\r\n"
    clientsocket.send(message)
    
    clientsocket.close()
    