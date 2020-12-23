const fs = require('fs');
const express= require('express');
const app = express();
//app.use(express.json());

app.listen(3000,()=>{console.log('Estoy vivo');})

 app.get('/', (req,res)=>{
    res.send('Hello World')
});

/* app.get('/user',(req,res)=>{
    var person = {
        id: 1,
        nombre:'Erik',
        apellido: 'Murillo'
    };
    res.send(person);
});  */

app.get('/inventario', (req, res) => {
    let dato = fs.readFileSync('./inventario.txt', 'utf8');
    let producto = JSON.parse(dato);
    res.send(producto);
})

app.get('/carro', (req, res) => {
    let dato = fs.readFileSync('./carro.txt', 'utf8');
    let producto = JSON.parse(dato);
    res.send(producto);
})

app.delete('/carro', (req, res) => {
    fs.writeFileSync('./carro.txt', '[]');
    res.send('Carrito vaciado');
})


