__path = process.cwd()

var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("jgbots");
} catch (e) {
	console.log('')
}
var fs = require('fs');
var criadorList = ["JG-Bots"];
var dono = "558594034292"
var criador = criadorList[Math.floor(Math.random() * criadorList.length)];

const path = require('path');
var thiccysapi = require('textmaker-thiccy')
var { exec } = require('child_process')
const axios = require("axios");
const cheerio = require("cheerio");
var express = require('express');
var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var request = require('request');
var router  = express.Router();

var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/database/options.js');
var {
	Nulis,
	Vokal,
	Base,
	Searchnabi,
    Gempa
} = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";
const {
PlayLinkMP3,
PlayLinkMP4,
PlayAudio,
PlayVideo,
ytSearch
} = require("./../database/youtube");

resposta = {
    semkey: {
        status: false,
        criador: `${criador}`,
        code: 406,
        mensagem: `Erro ou apikey esta errada. Não tem apikey? Chame e compre sua chave por apenas 15 R$ wa.me/${dono}`,
    },
    error: {
        status: false,
        criador: `${criador}`,
        mensagem: 'talvez esteja sendo consertado'
    }
}

const listkey = ["key-ofc", "ale1", "ale2", "ale3", "ale4", "ale5", "ale6", "ale7", "ale8", "ale9", "ale10"];

async function getBuffer(url) {
he = await fetch(url).then(c => c.buffer())
 return he
}
async function Kibar(url) {
he = await fetch(url).then(c => c.json())
 return he
}
function MathRandom(nans) {
he = nans[Math.floor(Math.random() * nans.length)]
 return he
}

async function cekapikey(api) {
ap = await zahirr.findOne({apikey:api})
return ap;
}

router.get('/find', async (req, res, next) => {
var apikey = req.query.apikey
if (!apikey) return res.json(resposta.semkey)
if (apikey != 'supra') return res.json(resposta.semkey)
try {
        zahirr.find()
            .then(result => {
                res.json({
                    status: true,
                    criador: `${criador}`,
                    result
                })
        })
} catch (e) {
res.json(resposta.error)
}
})

router.get('/cekapikey', async(req, res, next) => {
const apikey = req.query.apikey;
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)) {
res.json({
  status: 'apikey ATIVA',
  criador: `${criador}`,
  apikey: `${apikey}`,
})
} else {
res.json(resposta.semkey)
}
})

router.get("/apikeyadd", async (req, res, next) => {
  const key = req.query.key;
  if(listkey.includes(key)) {
    res.json({
      message: 'apikey está registrado'
    });
  } else {
    listkey.push(key);
    res.json({
      message: `registado com sucesso ${key} para banco de dados`
    });
  }
});

// delete apikey

router.get("/apikeydel", async (req, res, next) => {
	const apikey = req.query.apikey;
	if(listkey.includes(apikey)){
		res.json({
			message: 'apikey não existia antes'
			})
			} else {
	listkey.splice(apikey, 1)
	res.json({
		message: 'apikey excluído com sucesso' 
});
 }
});

/////////
//////////////[ API'S DE YOUTUBE ]///////
/////////

router.get('/youtube/playmp3', async (req, res, next) => {
q = req.query.q
var apikey = req.query.apikey
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)){
PlayAudio(q).then((resultado) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})
}).catch(e => {
res.json({
msg: `erro no servidor interno`
})
})
} else {
res.json(resposta.semkey)
}
})

router.get('/youtube/playmp4', async (req, res, next) => {
q = req.query.q
var apikey = req.query.apikey
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)){
PlayVideo(q).then((resultado) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})
}).catch(e => {
res.json({
msg: `erro no servidor interno`
})
})
} else {
res.json(resposta.semkey)
}
})

router.get('/youtube/mp3', async (req, res, next) => {
link = req.query.link
var apikey = req.query.apikey
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)){
PlayLinkMP3(link).then((resultado) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})
}).catch(e => {
res.json({
msg: `erro no servidor interno`
})
})
} else {
res.json(resposta.semkey)
}
})

router.get('/youtube/mp4', async (req, res, next) => {
link = req.query.link
var apikey = req.query.apikey
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)){
PlayLinkMP4(link).then((resultado) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})
}).catch(e => {
res.json({
msg: `erro no servidor interno`
})
})
} else {
res.json(resposta.semkey)
}
})

router.get('/youtube/pesquisar', async (req, res, next) => {
q = req.query.q
var apikey = req.query.apikey
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)){
ytSearch(q).then(result => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: result
})
}).catch(e => {
res.json({
msg: `erro no servidor interno`
})
})
} else {
res.json(resposta.semkey)
}
})

///////////
//////////////[ API'S DE DOWNLOADS ]///
///////////

router.get('/download/tiktok', async (req, res, next) => {
link = req.query.link
var apikey = req.query.apikey;
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)){
let tiktok_link = (`https://aquivos.herokuapp.com/tiktok?link=${link}`)
let buffer = await getBuffer(tiktok_link)
res.type('mp4')
res.send(buffer)
} else {
res.json(resposta.semkey)
}
})

/////////
//////////////[ API'S DE CANVAS ]/////
/////////

router.get('/canvas/welcome', async (req, res, next) => {
ti = req.query.titulo
no = req.query.nome
pe = req.query.perfil
fu = req.query.fundo
gr = req.query.grupo
if (!ti) return res.json({ status : false, criador : `criador`, mensagem : "Coloque Um titulo Valido"})
if (!no) return res.json({ status : false, criador : `criador`, mensagem : "Coloque Um nome Valido"})
if (!pe) return res.json({ status : false, criador : `criador`, mensagem : "Coloque Um perfil Valido"})
if (!fu) return res.json({ status : false, criador : `criador`, mensagem : "Coloque Um fundo Valido"})
if (!gr) return res.json({ status : false, criador : `criador`, mensagem : "Coloque Um grupo Valido"})
var apikey = req.query.apikey;
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)){
let welcomee = (`https://aquivos.herokuapp.com/welcome?titulo=${ti}&nome=${no}&perfil=${pe}&fundo=${fu}&grupo=${gr}`)
let buffer = await getBuffer(welcomee)
res.type('png')
res.send(buffer)
} else {
res.json(resposta.semkey)
}
})

/////////
//////////////[ API'S DE TEXT-PRO ]//////
/////////

router.get('/textpro/marvel', async (req, res, next) => {
texto1 = req.query.texto1
texto2 = req.query.texto2
if (!texto1) return res.json({ status : false, criador : `criador`, mensagem : "Texto 1 Invalido"})
if (!texto2) return res.json({ status : false, criador : `criador`, mensagem : "Texto 2 Invalido"})
var apikey = req.query.apikey;
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)){
thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [texto1, texto2]
).then(async (linkdaimagem) => {
try { 
res.json({
status: true,
código: 777,
criador: `${criador}`,
resultado: {
img: `${linkdaimagem}`,
}
})
} catch(err) { 
console.log(err)
res.json({
status: false,
código: 666,
criador: `${criador}`,
resultado: {
error: `${err}`,
}}
)}
})
} else {
res.json(resposta.semkey)
}
})

router.get('/textpro/halloween', async (req, res, next) => {
texto = req.query.texto
if (!texto) return res.json({ status : false, criador : `criador`, mensagem : "Texto 1 Invalido"})
var apikey = req.query.apikey;
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)){
thiccysapi.textpro("https://textpro.me/halloween-fire-text-effect-940.html", texto
).then(async (linkdaimagem) => {
try { 
res.json({
status: true,
código: 777,
criador: `${criador}`,
resultado: {
img: `${linkdaimagem}`,
}
})
} catch(err) { 
console.log(err)
res.json({
status: false,
código: 666,
criador: `${criador}`,
resultado: {
error: `${err}`,
}}
)}
})
} else {
res.json(resposta.semkey)
}
})

/////////
//////////////[ OUTRAS API'S ]////////////
/////////

router.get('/others/emojimix', async (req, res, next) => {
emoji1 = req.query.emoji1
emoji2 = req.query.emoji2
if (!emoji1) return res.json({ status : false, criador : `criador`, mensagem : "Coloque Um texto Valido"})
if (!emoji2) return res.json({ status : false, criador : `criador`, mensagem : "Coloque Um texto Valido"})
var apikey = req.query.apikey;
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)){
let emoji = (`https://aquivos.herokuapp.com/emojimix?emoji1=${emoji1}&emoji2=${emoji2}`)
let buffer = await getBuffer(emoji)
res.type('webp')
res.send(buffer)
} else {
res.json(resposta.semkey)
}
})

router.get('/others/fazernick', async (req, res, next) => {
txt = req.query.texto
if (!txt) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: texto"})
var apikey = req.query.apikey;
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)){
a = await Kibar(`https://aquivos.herokuapp.com/fazernick?texto=${txt}`)
res.json({
status: true,
código: 999,
criador: `${criador}`,
resultado: {
nicks1: `${a.n1}`,
nicks2: `${a.n2}`,
nicks3: `${a.n3}`,
nicks4: `${a.n4}`,
nicks5: `${a.n5}`,
nicks6: `${a.n6}`,
nicks7: `${a.n7}`,
nicks8: `${a.n8}`,
nicks9: `${a.n9}`,
nicks10: `${a.n10}`,
nicks11: `${a.n11}`,
nicks12: `${a.n12}`,
nicks13: `${a.n13}`,
nicks14: `${a.n14}`,
nicks15: `${a.n15}`,
nicks16: `${a.n16}`,
nicks17: `${a.n17}`,
nicks18: `${a.n18}`,
nicks19: `${a.n19}`,
nicks20: `${a.n20}`,
nicks21: `${a.n21}`,
nicks22: `${a.n22}`,
nicks23: `${a.n23}`,
nicks24: `${a.n24}`,
nicks25: `${a.n25}`,
nicks26: `${a.n26}`,
nicks27: `${a.n27}`,
nicks28: `${a.n28}`,
nicks29: `${a.n29}`,
nicks30: `${a.n30}`,
nicks31: `${a.n31}`,
nicks32: `${a.n32}`,
nicks33: `${a.n33}`,
nicks34: `${a.n34}`}
})
} else {
res.json(resposta.semkey)
}
})

router.get('/others/attp', async (req, res, next) => {
texto = req.query.texto
var apikey = req.query.apikey;
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)){
let attp = (`https://aquivos.herokuapp.com/attp?texto=${texto}`)
let buffer = await getBuffer(attp)
res.type('webp')
res.send(buffer)
} else {
res.json(resposta.semkey)
}
})

router.get('/others/ttp', async (req, res, next) => {
texto = req.query.texto
var apikey = req.query.apikey;
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)){
let attp = (`https://aquivos.herokuapp.com/ttp?texto=${texto}`)
let buffer = await getBuffer(attp)
res.type('webp')
res.send(buffer)
} else {
res.json(resposta.semkey)
}
})

router.get('/testee', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)){
var amv = JSON.parse(fs.readFileSync(__path + '/database/amv.json'))
res
.status(200)
.json({
  codigo: 200,
  successo: true,
  ...amv[~~(Math.random() * amv.length)]
})
} else {
res.json(resposta.semkey)
}
})

module.exports = router
