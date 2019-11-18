//Iniciar o Express

const express = require('Express');
const app = express();

//Ajustar rotas


const datatype = require('./routes/datatype.js');
const device = require('./routes/device.js');
const measurement = require('./routes/measurement.js');

app.use('/datatype', datatype);
app.use('/device', device);
app.use('/measurement', measurement);


//Ajustar porta

app.listen(3000); 