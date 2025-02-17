const fs = require('fs');

fs.rmdir("mydirectory",(err)=>{
    if(err) {
        console.log(err);
    }
    else {
        console.log("directory deleted successfully");
    }
});