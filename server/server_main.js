var express = require("express");
var fs = require("fs");

var app = express();

app.use(express.static('dist'));

const sayHello = (req, res) =>
    res.status(200).send("<h1>Hello World</h1>")

app.get("/api", function(req, res){
      
    var content = fs.readFileSync("news.json", "utf8");
    var news = JSON.parse(content);
    res.send(news);
});

app.use('/',sayHello)

app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});