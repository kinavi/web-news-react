var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();
var jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/public"));

// получение списка данных
app.get("/api/news", function(req, res){
      
    var content = fs.readFileSync("news.json", "utf8");
    var news = JSON.parse(content);
    res.send(news);
});

// получение одного пользователя по id
app.get("/api/news/:id", function(req, res){
      
    var id = req.params.id; // получаем id
    var content = fs.readFileSync("news.json", "utf8");
    var news = JSON.parse(content);
    var _new = null;
    // находим в массиве пользователя по id
    for(var i=0; i<news.length; i++){
        if(news[i].id==id){
            _new = news[i];
            break;
        }
    }
    // отправляем пользователя
    if(_new){
        res.send(_new);
    }
    else{
        res.status(404).send();
    }
});

// получение отправленных данных
app.post("/api/users", jsonParser, function (req, res) {
     
    if(!req.body) return res.sendStatus(400);
     
    var newTitle = req.body.title;
    var newDescription = req.body.description;
    var _new = {title: newTitle, description: newDescription};
     
    var data = fs.readFileSync("news.json", "utf8");
    var news = JSON.parse(data);
     
    // находим максимальный id
    var id = Math.max.apply(Math,news.map(function(o){return o.id;}))
    // увеличиваем его на единицу
    _new.id = id+1;
    // добавляем пользователя в массив
    news.push(_new);
    var data = JSON.stringify(news);
    // перезаписываем файл с новыми данными
    fs.writeFileSync("users.json", data);
    res.send(_new);
});


// удаление пользователя по id
app.delete("/api/news/:id", function(req, res){
      
    var id = req.params.id;
    var data = fs.readFileSync("news.json", "utf8");
    var news = JSON.parse(data);
    var index = -1;
    // находим индекс пользователя в массиве
    for(var i=0; i<news.length; i++){
        if(news[i].id==id){
            index=i;
            break;
        }
    }
    if(index > -1){
        // удаляем пользователя из массива по индексу
        var _new = news.splice(index, 1)[0];
        var data = JSON.stringify(news);
        fs.writeFileSync("users.json", data);
        // отправляем удаленного пользователя
        res.send(_new);
    }
    else{
        res.status(404).send();
    }
});

// изменение пользователя
app.put("/api/news", jsonParser, function(req, res){
      
    if(!req.body) return res.sendStatus(400);
     
    var newId = req.body.id;
    var newTitle = req.body.title;
    var newDescription = req.body.description;
     
    var data = fs.readFileSync("news.json", "utf8");
    var news = JSON.parse(data);
    var _new;
    for(var i=0; i<news.length; i++){
        if(news[i].id==newId){
            _new = news[i];
            break;
        }
    }
    // изменяем данные у пользователя
    if(_new){
        _new.title = newTitle;
        _new.description = newDescription;
        var data = JSON.stringify(news);
        fs.writeFileSync("news.json", data);
        res.send(_new);
    }
    else{
        res.status(404).send(_new);
    }
});

app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});