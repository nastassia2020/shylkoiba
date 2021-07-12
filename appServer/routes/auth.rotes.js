const {Router} = require('express')
const User = require('../models/User')
const config = require('config')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const router = Router()
const FileService = require('../services/fileService')
const File = require('../models/OwnList')
const middleware = require('../middleware/auth.middleware')

router.post(
    '/register',
    [
        check('email', 'Incorrect email!').isEmail(),
        check('password', 'Minimum password length is 6 characters!')
        .isLength({min: 6})
    ],
    async (req, res) => {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect registration data'
            })
        }

        const {email, password} = req.body

        const candidate = await User.findOne({email})

        if(candidate){
           return res.status(400).json({message: 'Such user already exists!'})
        }

        const hashedPassword = await bcrypt.hash(password, 8)
        const user = new User({email, password: hashedPassword})

        await user.save()

        res.json({message: 'User was created'})

        await FileService.createDir(new File({user: user.id, name: ''}))

    } catch (e) {
        res.status(500).json({message: 'Something went wrong!'})
    }
})

router.post(
    '/login',
    [
        check('email', 'Enter correct email!').normalizeEmail().isEmail(),
        check('password', 'Enter your password').exists()
    ],
    async (req, res) => {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect login data'
            })
        }

        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({message: 'User is not found'})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({message: 'Invalid password'})
        }

        const token = jwt.sign(
            {userId: user.id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        )

        res.json({token, userId: user.id})

    } catch (e) {
        res.status(500).json({message: 'Something went wrong!'})
    }
})

router.get(
    '/auth', middleware,
    async (req, res) => {
    try{
        const user = await User.findOne({_id: req.user.id})

        const token = jwt.sign(
            {userId: user.id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        )

        res.json({token, userId: user.id})

    } catch (e) {
        res.status(500).json({message: 'Something went wrong!'})
    }
})

module.exports = router