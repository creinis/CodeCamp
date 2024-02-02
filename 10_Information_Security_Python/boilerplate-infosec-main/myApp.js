/* Information Security with HelmetJS

This programming course focuses on HelmetJS, a type of middleware for Express-based applications that automatically sets HTTP headers. 
This way it can prevent sensitive information from unintentionally being passed between the server and client.

The courses below will help you understand how to protect your website from malicious behavior. */

const express = require('express');
const app = express();
const helmet = require('helmet');

/* Hackers can exploit known vulnerabilities in Express/Node if they see that your site is powered by Express. 
X-Powered-By: Express is sent in every request coming from Express by default. 
Use the helmet.hidePoweredBy() middleware to remove the X-Powered-By header. */

app.use(helmet.hidePoweredBy());

/* Your page could be put in a <frame> or <iframe> without your consent. 
This can result in clickjacking attacks, among other things. 
Clickjacking is a technique of tricking a user into interacting with a page different from what the user thinks it is. 
This can be obtained by executing your page in a malicious context, by means of iframing. 
In that context, a hacker can put a hidden layer over your page. Hidden buttons can be used to run bad scripts. 
This middleware sets the X-Frame-Options header. It restricts who can put your site in a frame. 
It has three modes: DENY, SAMEORIGIN, and ALLOW-FROM.

Use helmet.frameguard() passing with the configuration object {action: 'deny'}.
 */

app.use(helmet.frameguard({ action: "deny" }));

/* Cross-site scripting (XSS) is a frequent type of attack where malicious scripts are injected into vulnerable pages, 
with the purpose of stealing sensitive data like session cookies, or passwords.

The basic rule to lower the risk of an XSS attack is simple: “Never trust user’s input”. 
As a developer you should always sanitize all the input coming from the outside. 
This includes data coming from forms, GET query urls, and even from POST bodies. 
Sanitizing means that you should find and encode the characters that may be dangerous e.g. <, >.

Modern browsers can help mitigating the risk by adopting better software strategies. 
Often these are configurable via http headers.

The X-XSS-Protection HTTP header is a basic protection. 
The browser detects a potential injected script using a heuristic filter. 
If the header is enabled, the browser changes the script code, neutralizing it. 
It still has limited support.

Use helmet.xssFilter() to sanitize input sent to your server.
 */

app.use(helmet.xssFilter());



/* module.exports = app;
const api = require("./server.js");
app.use(express.static("public"));
app.disable("strict-transport-security");
app.use("/_api", api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
 */













































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
