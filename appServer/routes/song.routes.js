const {Router} = require('express')
const router = Router()
const multer = require('multer')
const Song = require('../models/Song')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({storage: storage})

router.post('/add', upload.single('path'), async (req, res) => {
    const song = await new Song({
        name: req.body.name,
        singer: req.body.singer,
        path: req.file.originalname,
        clicks: 0,
        likes: 0
    })
        song
        .save()
        .then(() => res.json(song))
        .catch(e => console.log(e))
    }
)

router.get('/', async (req, res) => {
    try{
        const song = await Song.find()
        res.json(song)
    } catch(e) {
        console.log(e)
    }
})

router.get('/:id', async (req, res) => {
    try{
        const song = await Song.findById({_id: req.params.id})
        res.json(song)
    } catch(e) {
        console.log(e)
    }
})

router.delete('/delete/:id', async(req, res) => {
    try{
        const song = await Song.findOneAndDelete({_id: req.params.id})
        res.json(song)
    } catch(e) {
        console.log(e)
    }
})

module.exports = router;
