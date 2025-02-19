const fs = require('fs/promises');
const write = async ()=>{
    const data = "I Am New Data";
    fs.writeFile("./data.txt",data,(err)=>{
        if(err) console.log("error");
        else console.log("File Created");
    });

};
write();