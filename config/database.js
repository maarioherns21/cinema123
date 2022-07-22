const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://maarioherns21:94621Mar@cluster0.h9zud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on("connected", function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
  });
  