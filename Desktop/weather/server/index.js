const http=require("http");
const server=http.createServer((req,res)=>{
      console.log(req.url);

     
    if(req.url=="/")
    {
      res.end("hello from the home sides");
    } 
    else if(req.url=="/about")
    {
      res.end("hello from the about sides");
    }
    else
    {
        res.end("404 Error page")
    }
      
})
server.listen(7000,"127.0.0.1",()=>{

  console.log('listening to the web server 7000');
});

