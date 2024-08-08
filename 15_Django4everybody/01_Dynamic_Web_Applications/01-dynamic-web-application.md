web application technologies

browser: HTML, CSS, DOM, JavaScript, JQuery

web server: Django / Flask; sqlite3 / MySql

HTTP: Hyper Text Transfer Protocol

uniform resource locator:
http://  | data.pr4e.org | /page1.htm
protocol |     host      |  document

make a connection => request a document => retrieve the document => close the connection

in client exec a request => througth socket / port (80) => to server 
process in server and response => througth socket / same port (80) => to cliente
usually ports 80 or 443 for web

IETF
Internet Engineering Task Force
www.ietf.org

Standards are called RFCs - requests for comments
```bash
telnet data.pr4e.org 80
Trying 192.241.136.170...
Connected to data.pr4e.org.
Escape character is '^]'.
K^F
HTTP/1.1 400 Bad Request
Date: Thu, 08 Aug 2024 09:31:08 GMT
Server: Apache/2.4.52 (Ubuntu)
Content-Length: 308
Connection: close
Content-Type: text/html; charset=iso-8859-1
```
```html
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>400 Bad Request</title>
</head><body>
<h1>Bad Request</h1>
<p>Your browser sent a request that this server could not understand.<br />
</p>
<hr>
<address>Apache/2.4.52 (Ubuntu) Server at do1.dr-chuck.com Port 80</address>
</body></html>
Connection closed by foreign host.
```
TCP connection / Sockets
socket is an endpoint of a bidectional inter-process communication flow across internet protocol-based computer network 









