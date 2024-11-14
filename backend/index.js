const express = require('express');
const cors = require('cors');

const app = express();

// Permite peticiones solo desde el puerto 5173 de localhost
const corsOptions = {
  origin: 'http://localhost:5173'
};

app.use(cors(corsOptions));

const port = 3000;
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contacts');

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
