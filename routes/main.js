__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/valor', (req, res) => {
res.sendFile(__path + '/views/valor.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'RestApi',
            namaowner: 'jerfinho',
            instagram: 'nada-kkk',
            youtube : 'JG-Bots'
        }
    }
    res.json(config)
})

module.exports = router
