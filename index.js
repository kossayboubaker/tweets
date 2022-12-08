const express = require("express");
const engine = require("express-handlebars").engine;

const app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tweets'
});
connection.connect();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");



  app.get('/statut/', (req, res) => {
    connection.query('SELECT * from statut ', (error, results, fields) =>{
      if (error) throw error;
      console.log('The solution is: ', results[0].nom,results[1].text_statut, results[0].temps_pub,);
      res.render("statut", {
        nom: results[0].nom,
        text_statut:results[0].text_statut,
        temps_pub: results[0].temps_pub,
        
      })
     
    });
});





app.listen(3000);