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
    res.render('rock');
rdm = random();
if (rdm == 'rock'){
    console.log("fail")
}
else if (rdm == 'paper'){
    console.log("succes")
}
else if (rdm == 'scissors'){
    console.log("nop")
}
})
app.get('/paper', (req, res) => {
    res.render('paper');
    console.log("ok");
rdm = random();
if (rdm == 'rock'){
    console.log("fail")
}
else if (rdm == 'paper'){
    console.log("succes")
}
else if (rdm == 'scissors'){
    console.log("nop")
}
})
app.get('/scissors', (req, res) => {
    res.render('scissors');
    rdm = random();
    if (rdm == 'rock'){
    console.log("fail")
}
    else if (rdm == 'paper'){
    console.log("succes")
}
    else if (rdm == 'scissors'){
        console.log("nop")
    }
})

function random() {

    var result = randomItem(['rock', 'paper', 'scissors']);
    console.log(randomItem)
    return(result);
}

app.listen(3000);