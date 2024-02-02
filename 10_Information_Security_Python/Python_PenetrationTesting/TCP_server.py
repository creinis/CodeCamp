#!/usr/bin/python3

import socket

#! Create a Soquet
serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

#! host = '192.168.0.187' => my IP address
host = socket.gethostbyname()
port = 444

#! Bind host name and port to the socket
serversocket.bind(('192.168.0.187', port))

serversocket.listen(3)

while True:
    clientsocket, address = serversocket.accept()
    
    print("receive connection from %s " % str(address))
    
    #! Notify the user about successfull connection
    message = "Thank you for connecting to the server" + "\r\n"
    clientsocket.send(message.encode('ascii'))
    
    clientsocket.close()
    