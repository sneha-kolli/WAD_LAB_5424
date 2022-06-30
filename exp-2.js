var express = require('express');
var router = express.Router(); 
var path = require('path'); //path module is must
var mysql=require('../database/db')



router.post("/newsql", function(req, res,next) {
  var regno = req.body.RegNo;
 
mysql.getConnection((err, connection) => {
 if(err) throw err;
    connection.query("SELECT * FROM student WHERE Regno='"+regno+"'", (err, rows) => {
    connection.release(); 
    if(err) throw err;
    res.render('datadisplay', {rows:rows,title:'Student Details'});
  //res.send(rows);
  });
  });
});


module.exports = router;