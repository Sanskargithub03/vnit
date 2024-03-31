const io=require('socket.io')(8000)

const users = {};

io.in('connection', socket=>{
    socket.on('user-joined', name =>{
        user[socket.id] = name;
        socket.broadcast.emit('userjoined', name);
    }
);

socket.on('send',message =>{
    socket.broadcast.emit('receive',{message: message , name: user[socket.id]})
});

})

socket.on('disconnect',message =>{
    socket.broadcast.emit('left', users[socket.id])
    
});


socket.on('leave',name =>{
    append('${name} left the chat', 'left')
    
});




