__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/log', (req, res) => {
res.sendFile(__path + '/views/logos-txt.html')
})
router.get('/out', (req, res) => {
res.sendFile(__path + '/views/outros.html')
})
/////////////////////////////////////////////
router.get('/fun', (req, res) => {
res.sendFile(__path + '/views/funcoes.html')
})
router.get('/dow', (req, res) => {
res.sendFile(__path + '/views/download.html')
})
/////////////////////////////////////////////

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
