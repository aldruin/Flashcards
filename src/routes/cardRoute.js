const { Router } = require('express');
const CardController = require('../controllers/CardController.js');

const cardController = new CardController();

const router = Router();

router.post('/card', (req, res) => cardController.createCard(req, res));

module.exports = router;