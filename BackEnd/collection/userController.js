const jwt = require('jsonwebtoken');
var { User } = require('../Model/user.model')

const userLogin = async (req, res) => {
    const user = await User.findOne({ email: req.body.email, password: req.body.password });
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' })
    }
    else {
        let payload = req.body.password;
        let token = jwt.sign(payload, 'token')
        res.status(200).json({ token, message: 'true' });

    }
}
const postUserDetail = async (req, res) => {
    var user = new User({
        email: req.body.email,
        password: req.body.password,
    });
    console.log(req.body.email);
    const userdata = await User.findOne({ email: req.body.email })
    if (!userdata) {
        user.save((err, doc) => {
            if (!err) {
                res.status(200).json(doc)
            } else {
                res.status(400).json({ message: 'Error in storing user detail', doc })
            }
        })
    }
    else {
        res.status(400).json({ message: 'user already exist' })
    }
}

const getAllUser = (req, res) => {
    User.find((err, doc) => {
        if (!err) {
            res.status(200).json(doc)
        }
        else {
            res.status(400).json({ message: 'Error in retriving user detail', doc })
        }
    })
}


const getOneUser = (req, res) => {
    User.findOne({ _id: req.params._id }, (err, doc) => {
        if (!err) {
            res.status(200).json(doc)
        }
        else {
            res.status(400).json({ message: 'Error in retriving user detail', doc })
        }
    })
}


const updateUserDetail = async (req, res) => {
    var user = {
        email: req.body.email,
        password: req.body.password
    }
    User.updateOne({ _id: req.params._id }, { $set: user }, { new: true }, (err, doc) => {
        if (!err) {
            res.status(200).json({ message: 'user updated', doc })
        } else {
            res.status(400).json({ message: 'error in updating user data', doc })
        }
    })
}

const deleteUserDetail = async (req, res) => {
    User.findByIdAndRemove({ _id: req.params._id }, (err, data) => {
        if (!err)
            res.status(200).json({ message: 'uesr deleted' })
        else
            res.status(400).json({ message: 'Error in deleting user', data })
    });
}


module.exports = { userLogin, postUserDetail, getAllUser, getOneUser, updateUserDetail, deleteUserDetail }