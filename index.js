const fs = require('fs');
const express= require('express');
const app = express();
//app.use(express.json());

app.listen(3000,()=>{console.log('Estoy vivo');})

 app.get('/', (req,res)=>{
    res.send('Hello World')
});

app.get('/user',(req,res)=>{
    var person = {
        id: 1,
        nombre:'Erik',
        apellido: 'Murillo'
    };
    res.send(person);
}); 

app.get('/inventario', (req, res) => {
    let wData = fs.readFileSync('./inventario.txt', 'utf8');
    let wProducts = JSON.parse(wData);
    res.send(wProducts);
});

