const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  const photo={
    id:1,
    name:"photo name",
    description:"photo description"

  }
  res.send(photo)

});

app.listen(port, () => {
  console.log(`sunucu ${port} port değerinde başlatıldı`);
});

