
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.settimeout(5)

#! IP address from site hackthissite.org - for test purpose only
host = "137.74.187.100"
port = int(input("Please enter the Port to scan: "))

def portScanner(port):
    if s.connect_ex((host, port)):
        print("The Port is closed")
    else: 
        print("The Port is open")

portScanner(port)

