
// server.js
import express from 'express';
import Salt from './src/controllers/salts';


const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
})
app.post('/api/v1/salts', Salt.create);
app.get('/api/v1/salts', Salt.getAll);
app.get('/api/v1/salts/:id', Salt.getOne);
app.put('/api/v1/salts/:id', Salt.update);
app.delete('/api/v1/salts/:id', Salt.delete);

app.listen(3000)
console.log('app running on port ', 3000);
