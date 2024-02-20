const http=require('http')
const server=http.createServer(http)
const port=3000;
server.listen(port,()=>console.log(`Server is running ${port}`));