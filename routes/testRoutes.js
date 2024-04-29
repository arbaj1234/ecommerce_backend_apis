import express from 'express'
import testController from '../controllers/testController.js'

// router object 

const router=express.Router()

//router
router .get(`/test` ,testController)


//expor
export default router