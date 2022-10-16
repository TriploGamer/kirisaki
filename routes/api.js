__path = process.cwd()

var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("jgbots");
} catch (e) {
	console.log('')
}
var fs = require('fs');
var criadorList = ['JG-Bots'];
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
var options = require(__path + '/lib/options.js');
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
} = require("./../lib/utils/yt");

loghandler = {
    notparam: {
        status: false,
        criador: `${criador}`,
        code: 406,
        mensagem: 'parâmetros de entrada de apikey',
        getApikey: 'Não tem apikey? Chame e compre sua chave por apenas 10 R$ wa.me/5593991919748'
    },
    notkey: {
        status: false,
        criador: `${criador}`,
        code: 406,
        mensagem: 'insira os parâmetros key'
    },
    noturl: {
        status: false,
        criador: `${criador}`,
        code: 406,
        mensagem: 'insira os parâmetros url'
    },
    notkata: {
        status: false,
        criador: `${criador}`,
        code: 406,
        mensagem: 'insira os parâmetros kata'
    },
    nottext: {
        status: false,
        criador: `${criador}`,
        code: 406,
        mensagem: 'insira os parâmetros text'
    },
    nottext2: {
        status: false,
        criador: `${criador}`,
        code: 406,
        mensagem: 'insira os parâmetros text2'
    },
    notnabi: {
        status: false,
        criador: `${criador}`,
        code: 406,
        mensagem: 'insira os parâmetros nabi'
    },
    nottext3: {
        status: false,
        criador: `${criador}`,
        code: 406,
        mensagem: 'insira os parâmetros text3'
    },
    nottheme: {
        status: false,
        criador: `${criador}`,
        code: 406,
        mensagem: 'insira os parâmetros theme'
    },
    notusername: {
        status: false,
        criador: `${criador}`,
        code: 406,
        mensagem: 'insira os parâmetros username'
    },
    notvalue: {
        status: false,
        criador: `${criador}`,
        code: 406,
        mensagem: 'insira os parâmetros value'
    },
    notheme: {
    	status: false,
        criador: `${criador}`,
        code: 406,
        mensagem: 'o tema não está disponível, por favor, digite texmaker/list atau baca documentasi'
     },
    invalidKey: {
        status: false,
        criador: `${criador}`,
        code: 406,
        mensagem: 'apikey invalida, Não tem apikey? Chame e compre sua chave por apenas 10 R$ wa.me/5593991919748'
    },
    invalidlink: {
        status: false,
        criador: `${criador}`,
        mensagem: 'erro, talvez seu link seja inválido.'
    },
    invalidkata: {
        status: false,
        criador: `${criador}`,
        mensagem: 'erro, talvez a palavra não esteja na api.'
    },
    notAddApiKey: {
        status: false,
        criador: `${criador}`,
        code: 406,
        mensagem: 'insira os parâmetros status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        criador: `${criador}`,
        mensagem: 'talvez esteja sendo consertado'
    }
}
const listkey = ["key-free", "jg"];

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

async function cekApiKey(api) {
ap = await zahirr.findOne({apikey:api})
return ap;
}

router.get('/find', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.notparam)
    if (apikey != 'supra') return res.json(loghandler.invalidKey)

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
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/cekapikey', async(req, res, next) => {
const apikey = req.query.apikey;
if(!apikey) return res.json(loghandler.notparam)
if(listkey.includes(apikey)) {
res.json({
  status: 'APIKEY ATIVA',
  criador: `${criador}`,
  apikey: `${apikey}`,
})
} else {
res.json(loghandler.invalidKey)
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
	const Apikey = req.query.apikey;
	if(listkey.includes(Apikey)){
		res.json({
			message: 'apikey não existia antes'
			})
			} else {
	listkey.splice(Apikey, 1)
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
var Apikey = req.query.apikey
if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
PlayAudio(quero).then((resultado) => {
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
res.json(loghandler.invalidKey)
}
})

router.get('/youtube/playmp4', async (req, res, next) => {
q = req.query.q
var Apikey = req.query.apikey
if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
PlayVideo(quero).then((resultado) => {
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
res.json(loghandler.invalidKey)
}
})

router.get('/youtube/mp3', async (req, res, next) => {
link = req.query.link
var Apikey = req.query.apikey
if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
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
res.json(loghandler.invalidKey)
}
})

router.get('/youtube/mp4', async (req, res, next) => {
link = req.query.link
var Apikey = req.query.apikey
if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
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
res.json(loghandler.invalidKey)
}
})

router.get('/youtube/pesquisar', async (req, res, next) => {
q = req.query.q
var Apikey = req.query.apikey
if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
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
res.json(loghandler.invalidKey)
}
})

///////////
//////////////[ API'S DE DOWNLOADS ]///
///////////

router.get('/download/tiktok', async (req, res, next) => {
link = req.query.link
var Apikey = req.query.apikey;
if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
let tiktok_link = (`http://lzmods-api.tk/api/medias-sociais/tiktok_v2?link=${link}&apikey=lz`)
let buffer = await getBuffer(tiktok_link)
res.type('mp4')
res.send(buffer)
} else {
res.json(loghandler.invalidKey)
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
var Apikey = req.query.apikey;
if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
let welcomee = (`https://isyubii-api.tk/welcome?titulo=${ti}&nome=${no}&perfil=${pe}&fundo=${fu}&grupo=${gr}`)
let buffer = await getBuffer(welcomee)
res.type('png')
res.send(buffer)
} else {
res.json(loghandler.invalidKey)
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
var Apikey = req.query.apikey;
if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
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
res.json(loghandler.invalidKey)
}
})

router.get('/textpro/halloween', async (req, res, next) => {
texto = req.query.texto
if (!texto) return res.json({ status : false, criador : `criador`, mensagem : "Texto 1 Invalido"})
var Apikey = req.query.apikey;
if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
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
res.json(loghandler.invalidKey)
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
var Apikey = req.query.apikey;
if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
let emoji = (`https://luffy-api.herokuapp.com/api/maker/emojimix?emoji1=${emoji1}&emoji2=${emoji2}`)
let buffer = await getBuffer(emoji)
res.type('webp')
res.send(buffer)
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/others/fazernick', async (req, res, next) => {
txt = req.query.texto
if (!txt) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: texto"})
var Apikey = req.query.apikey;
if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
a = await Kibar(`https://isyubii-api.tk/api/fazernick?nome=${txt}&apikey=key-free`)
res.json({
status: true,
código: 999,
criador: `${criador}`,
resultado: {
nicks1: `${a[0]}`,
nicks2: `${a[1]}`,
nicks3: `${a[2]}`,
nicks4: `${a[3]}`,
nicks5: `${a[4]}`,
nicks6: `${a[5]}`,
nicks7: `${a[6]}`,
nicks8: `${a[7]}`,
nicks9: `${a[8]}`,
nicks10: `${a[9]}`,
nicks11: `${a[10]}`,
nicks12: `${a[11]}`,
nicks13: `${a[12]}`,
nicks14: `${a[13]}`,
nicks15: `${a[14]}`,
nicks16: `${a[15]}`,
nicks17: `${a[16]}`,
nicks18: `${a[18]}`,
nicks19: `${a[19]}`,
nicks20: `${a[20]}`,
nicks21: `${a[21]}`,
nicks22: `${a[22]}`,
nicks23: `${a[23]}`,
nicks24: `${a[24]}`,
nicks25: `${a[25]}`,
nicks26: `${a[26]}`,
nicks27: `${a[27]}`,
nicks28: `${a[28]}`,
nicks29: `${a[29]}`,
nicks30: `${a[30]}`,
nicks31: `${a[31]}`,
nicks32: `${a[32]}`,
nicks33: `${a[33]}`,
nicks34: `${a[34]}`}
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/attp', async (req, res, next) => {
text = req.query.text
var Apikey = req.query.apikey;
if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
let attp = (`https://api.xteam.xyz/attp?file&text=${text}`)
let buffer = await getBuffer(attp)
res.type('webp')
res.send(buffer)
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/ttp', async (req, res, next) => {
text = req.query.text
var Apikey = req.query.apikey;
if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
let attp = (`https://isyubii-api.tk/api/ttp?texto=${text}&apikey=key-free`)
let buffer = await getBuffer(attp)
res.type('webp')
res.send(buffer)
} else {
res.json(loghandler.invalidKey)
}
})

module.exports = router