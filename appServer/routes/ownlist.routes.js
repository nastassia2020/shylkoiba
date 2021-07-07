const {Router} = require('express')
const middleware = require('../middleware/auth.middleware')
const router = Router()
const fileController = require('../controllers/fileController')

router.post('', middleware, fileController.createDir)
router.get('', middleware, fileController.getFiles)

module.exports = router