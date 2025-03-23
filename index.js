const app = require ('./src/app.js');

const port = 3000;

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});

