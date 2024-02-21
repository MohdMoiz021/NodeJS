const http=require('http')

function handler(req,res){
    res.write('Hi Node api')
    res.end();
}
const server=http.createServer(handler)
const port=3000;
server.listen(port,()=>console.log(`server is running ${port}`));