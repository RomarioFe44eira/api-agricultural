//Iniciar o Express

const express = require('Express');
const app = express();

//Ajustar rotas


const datatype = require('./routes/datatype.js');
const device = require('./routes/device.js');
const measurement = require('./routes/measurement.js');
const bodyParser = require('body-parser')

app.use('/datatype', datatype);
app.use('/device', device);
app.use('/measurement', measurement);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})


//Ajustar porta

app.listen(3000); 