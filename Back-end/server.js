const express = require('express');
const server = express();
const sequelize = require ('./config/database');
const bodyParser = require ('body-parser');
const dotenv = require ('dotenv').config();
const cors = require ('cors');
const port = process.env.PORT || 3030;
const productRouter = require('./routes/product.routes');
const userRouter = require('./routes/user.routes');
const categoryRouter = require('./routes/category.routes');

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: false}));

server.use('/product', productRouter);
server.use('/user', userRouter);
server.use('/category', categoryRouter);
server.use('/upload', express.static('upload'));

server.listen(port,() => {
    console.log(`BD conectada... Puerto ${port}`);

    sequelize.sync({force:false}).then(() => {
        console.log('Nos conectamos a la base de datos');
    }).catch(error => {
        console.log('Se ha producido un error', error);
    })
});