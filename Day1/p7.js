const fs = require('fs');

const delete1 = ()=>{
    fs.unlink('./mydirectory/data.txt', (err) => {
        if (err) throw err;
})
}
delete1();