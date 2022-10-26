const http = require('http')
const fs = require('fs')
const { request } = require('express')
const path = require('path')
const url = require('url')

const server = http.createServer((req,res)=>{
    if(req.url == '/' || req.url == '/home.html'){
        let filepath = path.join(__dirname, 'public', 'home.html')
        fs.readFile(filepath, 'utf8', (err,data)=>{
            if(err)return err
            res.writeHead(200, {
                'content-Type': 'text/html'
            })
            res.write(data)
            res.end
        })
    }

    if (req.url == '/about.html'){
        let filepath = path.join(__dirname, 'public', 'about.html')
        fs.readFile(filepath, 'utf8', (err,data)=>{
            if(err)return err
            res.writeHead(200, {
                'content-Type': 'text/html'
            })
            res.write(data)
            res.end
        })
    }
    if(req.url == '/contact.html'){
        let filepath = path.join(__dirname, 'public', 'contact.html')
        fs.readFile(filepath, 'utf8', (err,data)=>{
            if(err)return err
            res.writeHead(200, {
                'content-Type': 'text/html'
            })
            res.write(data)
            res.end
        })
    }
    
    else{
        res.writeHead(404)
        res.end('page not found')
    }
   
})




server.listen(3000, ()=>{
    console.log('server is on')
})