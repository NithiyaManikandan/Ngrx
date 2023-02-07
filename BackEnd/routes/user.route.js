const express = require('express');
const router = express.Router();

const {userLogin,postUserDetail,getAllUser,getOneUser,updateUserDetail,deleteUserDetail} = require('../collection/userController');


router.post('/login',userLogin)
router.post('/userDetail',postUserDetail)
router.get('/getAllUser',getAllUser)
router.get('/getOneUser/:_id',getOneUser)
router.put('/updateUser/:_id',updateUserDetail)
router.delete('/deleteUser/:_id',deleteUserDetail)


module.exports = router;