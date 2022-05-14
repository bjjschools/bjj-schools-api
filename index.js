const express = require('express');
const app = express();

const mongoose = require('mongoose');

const config = require('./config/config.js');
const userRoutes = require('./routes/userRoutes');
const classDescriptionRoutes = require('./routes/classDescriptionRoutes');
const classAvailabilityRoutes = require('./routes/classAvailabilityRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user', userRoutes);
app.use('/api/class_description', classDescriptionRoutes);
app.use('/api/class_availability', classAvailabilityRoutes);

mongoose
    .connect(config.dbUrl,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() =>{
        app.listen(config.defaultServerPort, ()=>console.log("Listening on port 3000..."));
    })
    .catch(err=>{
        console.log('Error connecting to database: '+ err);
        process.exit();
    });


