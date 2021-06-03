const express = require('express')
const cluster = require('cluster')
const os = require('os')
const app = express()

if(cluster.isMaster){
    for(var i = 0; i < os.cpus().length; i++){
        var worker = cluster.fork()
        console.log('Worker running on core '+worker.id)
    }
}else{
    app.get('/', (req, res) => {
        console.log('Executing... Random number: '+Math.floor(Math.random() * 100)+' Cluster: '+cluster.worker.id)
        console.clear()
        res.send('Hello')
    })
    app.listen(5000)
}