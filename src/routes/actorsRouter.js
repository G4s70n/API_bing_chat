const { Router } = require('express')
const router = Router();

const { actorsCreator } = require('../controllers/actorsControllers.js') 


router.get('/', async (req, res, next) => {
    try {
        let result = await actorsCreator();
        res.send(result);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = router; 




