const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var randomItem = require('random-item');


app.set('view engine','pug');
app.use((express.static('public')));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.render('homepage');

})

app.get('/rock', (req, res) => {
    resultat = isResult('rock');
    res.render('rock', {
        "status":resultat});


})
app.get('/paper', (req, res) => {
    resultat = isResult('paper');
    res.render('paper', {
        "status":resultat});


})
app.get('/scissors', (req, res) => {
    resultat = isResult('scissors');
    res.render('scissors', {
        "status":resultat});



})

function random() {

    var result = randomItem(['rock', 'paper', 'scissors']);
    console.log(randomItem)
    return(result);
}

function isResult(Choice) {
    rdm = random();
    if (Choice == 'rock'){
        if (rdm == 'rock'){
            console.log("nop")
            return ('equal')
        }
        else if (rdm == 'paper'){
            console.log("fail")
            return ('fail')

        }
        else if (rdm == 'scissors'){
            console.log("succes")
            return ('victory')

        }

    }
    else if (Choice == 'paper'){
        if (rdm == 'rock'){
            console.log("succes")
            return ('victory')

        }
        else if (rdm == 'paper'){
            console.log("nop")
            return ('equal')

        }
        else if (rdm == 'scissors'){
            console.log("fail")
            return ('fail')

        }

    }
    else if (Choice == 'scissors'){
        if (rdm == 'rock'){
            console.log("fail")
            return ('fail')

        }
        else if (rdm == 'paper'){
            console.log("succes")
            return ('victory')

        }
        else if (rdm == 'scissors'){
            console.log("nop")
            return ('equal')

        }

    }

}

app.listen(3000);