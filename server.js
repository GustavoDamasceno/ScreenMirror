var express = require('express');  
var app = express();  
var http = require('http').Server(app);    
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));


io.on('connection', (socket)=>{
    console.log('Novo cliente conectado no id:',socket.id);

    socket.on('offer', (data) => {
        socket.broadcast.emit('offer', data);
    });

    socket.on('initiate', () => {  
        io.emit('initiate');  //  emite uma mensagem para “Cliente1” e “Cliente2” sobre esta solicitação que recebeu do "Cliente1".
    });
})


http.listen(port, () =>{ 
    console.log('Servidor rodando na porta 80')
})
