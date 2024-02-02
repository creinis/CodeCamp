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


/* Some web applications will serve untrusted HTML for download. 
Some versions of Internet Explorer by default open those HTML files in the context of your site. 
This means that an untrusted HTML page could start doing bad things in the context of your pages. 
This middleware sets the X-Download-Options header to noopen. 
This will prevent IE users from executing downloads in the trusted site’s context.

Use the helmet.ieNoOpen() method on your server. */

app.use(helmet.ieNoOpen());

/* HTTP Strict Transport Security (HSTS) is a web security policy which helps to protect 
websites against protocol downgrade attacks and cookie hijacking. 
If your website can be accessed via HTTPS you can ask user’s browsers to avoid using insecure HTTP. 
By setting the header Strict-Transport-Security, you tell the browsers to use HTTPS for the future 
requests in a specified amount of time. This will work for the requests coming after the initial request.

Configure helmet.hsts() to use HTTPS for the next 90 days. 
Pass the config object {maxAge: timeInSeconds, force: true}. 
You can create a variable ninetyDaysInSeconds = 90*24*60*60; to use for the timeInSeconds. 
Replit already has hsts enabled. 
To override its settings you need to set the field "force" to true in the config object. 
We will intercept and restore the Replit header, after inspecting it for testing.

Note: Configuring HTTPS on a custom website requires the acquisition of a domain, and an SSL/TLS Certificate. */

app.use(helmet.hsts({ maxAge: 7776000, force: true }));

/* To improve performance, most browsers prefetch DNS records for the links in a page. 
In that way the destination ip is already known when the user clicks on a link. 
This may lead to over-use of the DNS service (if you own a big website, visited by millions people…), 
privacy issues (one eavesdropper could infer that you are on a certain page), or page statistics alteration 
(some links may appear visited even if they are not). If you have high security needs you can disable 
DNS prefetching, at the cost of a performance penalty.

Use the helmet.dnsPrefetchControl() method on your server. */

app.use(helmet.dnsPrefetchControl());

/* If you are releasing an update for your website, and you want the users to always download the newer version, 
you can (try to) disable caching on client’s browser. 
It can be useful in development too. 
Caching has performance benefits, which you will lose, so only use this option when there is a real need.

Use the helmet.noCache() method on your server. */

app.use(helmet.noCache());







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
