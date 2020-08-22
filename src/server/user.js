const fs = require('fs');
const path = require('path');

const getUsers= (req, res)=>{
    const src =path.join(__dirname, 'users.js');
    fs.readFile(src,(error,data)=>{
        const parsData =JSON.parse(data)
         res.set('Content-Type','application/json');
         res.status(200);
         res.json(parsData)

    })
}

module.exports=getUsers