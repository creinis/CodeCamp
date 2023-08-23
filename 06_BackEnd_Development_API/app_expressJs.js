
let express = require('express');
let app = express();
require('dotenv').config()
var bodyParser = require('body-parser')

/* ##7 */
app.use((request, response, next) => {
    console.log(request.method + ' ' + request.path + ' - ' + request.ip)
    next()
  })

/* ##11 */
app.use(bodyParser.urlencoded({ extended: false }))

/* ##1 */
/* app.get("/", function(req, res) {
res.send("Hello Express");
  }); */

/* ##2 */  
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

/* ##4 */
app.use("/public", express.static(__dirname + "/public"));

/* ##5 */
/* app.get("/json", (req, res) => {
  res.json({ message: "Hello json"});
}); */

/* ##6 */
app.get("/json", (request, response) => {
  if (process.env.MESSAGE_STYLE === "uppercase"){
    response.json({"message": "HELLO JSON"})
  } else {
    response.json({"message": "Hello json"})
  }
});


/* ##8 */

app.get('/now', (request, response, next) => {
  request.time = new Date().toString()
  next()
}, (request, response) => {
  response.json({'time': request.time})
});

/* ##9 */

app.get('/:word/echo', (request, response) => {
  response.json({echo: request.params.word})
});

/* ##10 */

app.get('/name', (request, response) => {
  let string = request.query.first + ' ' + request.query.last
  response.json({name: string})
});

/* ##12 */

app.post('/name', bodyParser.urlencoded({ extended: false }),
        (request, response) => {
        let string = request.body.first + ' ' + request.body.last
        response.json({name: string});  
        }); 





module.exports = app;

