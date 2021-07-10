const express = require('express');

const router = express.Router();

//routing the home.ejs 
const homeController = require('../controllers/home_controller');

//route of home view
router.get('/', homeController.home);

//route for updating
router.post('/add-task', homeController.update);

//route for deleting
router.post('/delete-task', homeController.del);

// exporting router
module.exports = router;
