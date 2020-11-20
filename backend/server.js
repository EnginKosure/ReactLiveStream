const express = require('express')
const { socket } = require('socket.io')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { v4: uuidV4} = require('uuid')
const RTCMultiConnectionServer = require('rtcmulticonnection-server');




app.set('view engine', 'ejs')
app.use(express.static('public')) 

app.get('/', (req, res) => {
    res.redirect(`/${uuidV4()}`)
})
app.get('/:room', (req, res)=> {
    res.render('room', { roomId: req.params.room })
})
io.on('connection', socket => {
    RTCMultiConnectionServer.addSocket(socket, {
        config: {
            "socketURL": "/",
            "dirPath": "",
            "homePage": "/demos/index.html",
            "socketMessageEvent": "RTCMultiConnection-Message",
            "socketCustomEvent": "RTCMultiConnection-Custom-Message",
            "port": "9001",
            "enableLogs": "false",
            "autoRebootServerOnFailure": "false",
            "isUseHTTPs": "false",
            "sslKey": "./fake-keys/privatekey.pem",
            "sslCert": "./fake-keys/certificate.pem",
            "sslCabundle": "",
            "enableAdmin": "false",
            "adminUserName": "username",
            "adminPassword": "password"
        },
        logs: 'logs.json'
    });
/*socket.on('join-room', (roomId, userId) => {
    console.log("JOINING ROOM");
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId)

    socket.on('disconnect', () => {
        socket.to(roomId).broadcast.emit('user-disconnected', userId)

    })
})*/
})

server.listen(3006)