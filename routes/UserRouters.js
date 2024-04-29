import express from 'express'
// import registerController from '../controllers/userController.js'
import { registerController,loginController } from '../controllers/userController.js'
// router object
const router =express.Router()


// router  register
router .post ('/register',registerController)

//login
router.post ('/login',loginController)


//export
export default router