const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended: true}));

app.get('/',(req, res)=>{
    res.sendFile(__dirname + "/calcul.html");
});

app.post('/',(req, res)=>{
    res.sendFile(__dirname + "/calcul.html");
});

app.post('/add', (req, res) => {
	let n1 = Number(req.body.num1);
    let n2 = Number(req.body.num2);
    let sum = n1 + n2;
    res.send(`${n1} + ${n2} = ${sum}`);
})

app.post('/diff', (req, res) => {
	let n1 = Number(req.body.num1);
    let n2 = Number(req.body.num2);
    let diff = n1 - n2;
    res.send(`${n1} - ${n2} = ${diff}`);
})

app.post('/prod', (req, res) => {
	let n1 = Number(req.body.num1);
    let n2 = Number(req.body.num2);
    let product = n1 * n2;
    res.send(`${n1} * ${n2} = ${product}`);
})

app.post('/quot', (req, res) => {
	let n1 = Number(req.body.num1);
    let n2 = Number(req.body.num2);
    let quot = n1 / n2;
    res.send(`${n1} / ${n2} = ${quot}`);
})


app.listen(3000, (res) => {
	console.log("Server started at port 3000")
});