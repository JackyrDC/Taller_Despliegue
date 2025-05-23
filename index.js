import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('🚀 ¡Hola desde Express con Bun!');
});

app.get('/saludo', (req, res) => {
  res.json({ mensaje: 'Hola, ¡¡Bienvenido a tu servidor de Express con Bun!!' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});