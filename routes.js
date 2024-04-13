const fs = require('fs');

const routeHandler = (req,res) => {
    console.log('req: ', req);
    const url = req.url;
    const method = req.method;

    if(url === "/") {
        res.setHeader("Content-Type","text/html")
        res.write('<html>')
        res.write('<head><title>udemyNode</title></head>')
        res.write('<body><form action="/message" method="POST"><input type ="text" name="message"><button type="submit">send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    else if(url === "/message" && method === "POST") {
        const body = []
        req.on("data",(chunk) => body.push(chunk))
        return req.on("end",() => {
            const parsedBody = Buffer.concat(body).toString()
            fs.writeFileSync("messages.text",parsedBody.split("=")[1])
            res.statusCode = 302
            res.setHeader("Location","/")
            return res.end()
        })
        
        
    }
    
    res.setHeader("Content-Type","text/html")
    res.write('<html>')
    res.write('<head><title>udemyNode</title></head>')
    res.write('<body><h1>Hello from NodeJs Server</h1></body>')
    res.write('</html>')
    res.end()
}

module.exports = routeHandler