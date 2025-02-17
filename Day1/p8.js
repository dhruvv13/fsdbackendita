const fs = require('fs');
fs.mkdir("mydirectory",(err)=>{
    if(err){
        throw err
    }

console.log("directed created");
});