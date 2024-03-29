const express = require('express');
const cors = require('cors');
const ctrl = require('./controller')
console.log(ctrl)

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/houses', ctrl.getHouses);
app.post('/api/houses', ctrl.createHouse);
app.put('/api/houses/:id', ctrl.updateHouse);
app.delete('/api/houses/:id', ctrl.deleteHouse)

app.listen(4004, () => console.log('Server is up on 4004'));