const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.resolve('./views/home.html'));
    //app.get("/",(req, res)=>{ res.sendFile(path.resolve(__dirname,"./views/login.html"))});

});

app.listen(process.env.PORT || 8080, () => console.log ('servidor en puerto 8080'));/*
<label for="tentacles">numero de entradas:</label>
<input type="number" id="tentacles" name="tentacles"
       min="0" max="100">
       <div class="contenedor">
        <div class="caja-1">Caja 1</div>
        <div class="caja-2">Caja 2</div>
        <div class="caja-3">Caja 3</div>
        <div class="caja-4">Caja 4</div>
        <div class="caja-5">Caja 5</div>
        <div class="caja-6">Caja 6</div> */