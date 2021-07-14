const {Router} = require('express')
const router = Router()
const Song = require('../models/Song')

router.post('/add', async (req, res) => {
    try{
        const {name, singer} = req.body
        const song = await new Song({
            name,
            singer,
            clicks: 0,
            likes: 0
        })
        await song.save()
        res.json(song)
    } catch(e){
        console.log(e)
    }
})

router.get('/', async (req, res) => {
    try{
        const song = await Song.find()
        res.json(song)
    } catch(e){
        console.log(e)
    }
})

module.exports = router;
