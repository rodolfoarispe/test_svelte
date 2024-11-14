const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todos los contactos
router.get('/', async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear un nuevo contacto
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  try {
    const contact = await prisma.contact.create({
      data: { name, email }
    });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar un contacto existente
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const contact = await prisma.contact.update({
      where: { id: parseInt(id) },
      data: { name, email }
    });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Eliminar un contacto
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await prisma.contact.delete({
      where: { id: parseInt(id) }
    });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
