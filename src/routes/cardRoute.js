const { Router } = require('express');
const CardController = require('../controllers/CardController.js');

const cardController = new CardController();

const router = Router();

router.get('/card/:id', (req, res) => cardController.getCardById(req, res));
router.get('/card', (req, res) => cardController.getAllCards(req, res));
router.post('/card', (req, res) => cardController.createCard(req, res));
router.put('/card/:id', (req, res) => cardController.updateCardById(req, res));
router.delete('/card/:id', (req, res) => cardController.deleteCardById(req, res));

module.exports = router;