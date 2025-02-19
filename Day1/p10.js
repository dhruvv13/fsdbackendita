const fs = require('fs/promices');
const read=async()=>{
    const data=await fs.readFile('data.txt','utf8');
    console.log(data);
}
read();