#!/usr/bin/python3

import socket

clientsocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

#! host = '192.168.0.187'
host = socket.gethostbyname()
port = 444

clientsocket.connect(('192.168.0.187', port))

#! determine the max amount of data passing by the socket
message = clientsocket.recv(1024)

clientsocket.close()

print(message.decode('ascii'))


