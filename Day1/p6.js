const fs = require('fs');
const append=()=>{
    fs.appendFile('data.txt', 'Moneyhiest', (err) => {
        if (err) throw err;
        else console.log('File appended');
})
}
append();
