const express = require('express');
const { nhost } = require('./utils/nhost');

const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!l');
});
/**
 * sample curl request:
 * curl -X POST http://localhost:3000/signup -H 'Content-Type: application/json' -d '{"email": "nitinrpl", "pwd": "pwd"}'
 */
app.post('/signup', async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    await nhost.auth.signUp({
      email,
      password,
    });
    res.send('ok');
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
