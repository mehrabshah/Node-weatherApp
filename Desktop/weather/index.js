const http=require('http')
const fs=require("fs")
var requests = require('requests');
const replaceVal=(tempVal,orgVal)=>{
     let temperature=tempVal.replace("{%tempval%}",orgVal.main.temp);
     temperature=temperature.replace("{%tempmin%}",orgVal.main.temp_min);
     temperature=temperature.replace("{%tempmax%}",orgVal.main.temp_max);
     temperature=temperature.replace("{%location%}",orgVal.name);
     temperature=temperature.replace("{%country%}",orgVal.sys.country);  
    

     return temperature;
     
}
const homeFile=fs.readFileSync("home.html","utf-8")
const server=http.createServer((req,res)=>{
    if(req.url="/")
    {
        requests('https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=13a8e9c7c8f8f8a9e259f28351b247e1')
        .on('data', (chunk)=> {
          const objdata=JSON.parse(chunk);
          const arrdata=[objdata];
          const realtimedata=arrdata.map((val)=>replaceVal(homeFile,val)).join("");
           res.write(realtimedata);
          
        
        })
        .on('end', (err)=> {
          if (err) return console.log('connection closed due to errors', err);
         
          res.end();
        });
          
    }
});
server.listen(2014,"127.0.0.1")
