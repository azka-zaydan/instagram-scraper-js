import express from 'express'
import { scrapeImages } from './src/index.js'
import http from 'http'

const router = express()

router.post('/scrape/:username', async (req, res) => {
    const scraped = await scrapeImages(req.params.username)

    res.status(200).json({ scraped })

})

router.get('/', async (req, res) => {
    res.status(200).json({ message: 'its on' })
})

http.createServer(router).listen(4000, () => {
    console.log('server running on port 4000')
})