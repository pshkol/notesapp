const mongoose = require('mongoose');

const config = require('./config');

mongoose.connect(config.db);

mongoose.connection.on('connected', () => {
  console.log('Se ha conectado exitosamente a la base de datos');
})
