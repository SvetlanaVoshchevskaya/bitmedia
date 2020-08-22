const express =require('express');
const bodyParser =require('body-parser');

const app =express();

const port =process.env.PORT || 8000;

const errorHandler =(err, req, res)=>{console.log(err.stack);
    req.status(500).send('Error')
}

app.use(bodyParser.urlencoded({extended:false}))
.use(bodyParser.json())
.use(errorHandler);

app.listen(port)