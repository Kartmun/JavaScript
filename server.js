var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Это сейчас на ГитХабе =)
//Это снова я 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var soldiers = [
{
	id: 1,
	name: 'Division'
},
{
	id: 2,
	name: 'ComandPunkt'
},
{
	id: 3,
	name: 'Polk'
}];

app.get('/', function (req, res) {
	res.send('Hello API')
})

app.get('/soldiers', function (req, res) {
	res.send(soldiers);
})

app.get('/soldiers/:id', function (req, res) {
	console.log(req.params);
	var soldier = soldiers.find(function(soldiers) {
		return soldiers.id === Number(req.params.id)
	});
	res.send(soldier);
})

app.post('/soldiers', function (req, res) {
	var soldier = {
		id: Date.now(),
		name: req.body.name
	};
	soldiers.push(soldier);
	res.send(soldier);
})

 app.put('/soldiers/:id', function(req, res) {
 	var soldier = soldiers.find(function(soldiers) {
		return soldiers.id === Number(req.params.id)
	});
	soldier.name = req.body.name;
	res.sendStatus(200);
 })

 app.delete('/soldiers/:id', function(req, res) {
 	soldiers = soldiers.filter(function (soldier) {
 		return soldier.id !== Number(req.params.id)
 	})
 	res.sendStatus(200);
 })

app.listen(3012, function() {
	console.log('API app started')
})