const {Server} = require('socket.io');
const get = require('./seuil/services/seuil')

const io  = new Server({
    cors: {
        origin: '*'
    }
})

let data = null;

io.on("connection",(socket)=>{
    socket.emit('sendData',data);
    
    socket.on('checkSeuil',async ()=>{
        data = await get.seuil();
        socket.emit('sendData',data);
        setInterval(async () => {
                const data = await get.seuil();
                if(data?.success )
                {
                    socket.broadcast.emit('sendData',data);
                }
                
            }, 10000);
    });
});

io.listen(3005);

module.exports = io;