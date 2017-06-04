module.exports = function(io){
    io.on('connection', function(client){
        console.log('a user connected');
        client.on('disconnect', function(){
            console.log('a user disconnected')
        });
        client.on('join', function(data){
            console.log(`${data} connected`);
        });
        
  client.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
    });
}


