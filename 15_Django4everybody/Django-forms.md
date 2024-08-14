# Forms in HTTP and HTML

## Rules of the POST/GET choice

 - POST is used when data is being created or modified
 - GET is used when your are reading or searching things
 - GET should never be user to insert, modify or delete data
 - Web search spiders will follow GET URLs but generally not POST URLs
 - GET URLs should be "idempotent" - the same URL should give the "same thing" each time you access it
 - GET has an upper limit of the number of bytes of parameters and values (about 2K caracteres)

### Building HTML Forms
 - Pre HTML5 Input Types
   - text (id is to relate fields and labels; type="text" will parse the name="")
   - password (is a type="text" special case)
   - radio buttom (name="when" on all options is the rule)
   - check box (will parse the value="")
   - select / drop-down (will parse the value="")
   - textarea (need a buttom, type="submit" name="dopost" value="Submit"; dopost = Submit)

## Security

### CSRF - Cross-Site-Request-Forgery
- Atack:
 - A rogue can generates a page that includes from that posts data to a legitimate site where the user is logged in via a session cookie
 - The form is submitted to the legitimate site and the cookie is included
 - The legitimate site accepts the request because of the cookie value
 - Note: that the rogue site does not need to know the cookie value - it just knows that the coookie will be sent on a request to the legitimate site
- Defense:
  - The legitimate site chooses a large random number (the CSRF Token) and puts it in the session
  - When the legitimate site generates a POST form, it includes the CSRF Token as a hidden input field
  - When the form is submitted th CSRF Token is sent as well as the cookie
  - The site looks up the session and rejects the request if the incoming CSRF Token does not match the session's CSRF Token





















