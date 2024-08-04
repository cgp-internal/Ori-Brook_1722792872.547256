const express = require('express');
const app = express();
const { helloWorldRouter } = require('./routes/helloWorld');

app.use(express.json());
app.use('/hello', helloWorldRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});