const fs = require('fs');
const write=()=>{
    fs.writeFile("./mydirectory/data.txt", 'Hello World!', (err) => {
        if (err) throw err;
        else console.log('File created and written successfully');
})}
write();