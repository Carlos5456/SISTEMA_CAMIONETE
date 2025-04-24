const express = require('express');
const router = express.Router();
const pecaController = require('../controllers/pecaController');

router.get('/', pecaController.listar);
router.post('/', pecaController.criar);
router.put('/:id', pecaController.atualizar);
router.delete('/:id', pecaController.deletar);

module.exports = router;