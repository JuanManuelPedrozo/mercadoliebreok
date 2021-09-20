const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));

app.get('/', (req,res) => {res.sendFile(path.resolve('./views/home.html'));});
app.get('/login.html',(req,res)=>{ res.sendFile(path.resolve('./views/login.html'));});
app.get('/register.html', (req, res) => { res.sendFile(path.resolve('./views/register.html')) ;});
app.get('/home.html', (req,res) => {res.sendFile(path.resolve('./views/home.html'));});



app.listen(process.env.PORT || 8080, () => console.log('servidor en puerto 8080'));
