const http=require('http')
const fs=require('fs')

function handler(req,res){
    
    switch(req.url){
        case '/' : 
        const contents=fs.readFileSync('index.html')
        res.write(contents.toString());
        res.end();
        break;

        case '/book':
            res.write("Books");
            res.end();
            break;

        case '/author':
            res.write("Author page")
            res.end();
            break;

        case '/About':
            res.write("About page")
            res.end();
            break

        default:
            res.write("This page is not found")
            res.end();
            break;
    }
}

const server=http.createServer(handler)
const port=3000;
server.listen(port,()=>{ console.log(`Server is running ${port}`);})