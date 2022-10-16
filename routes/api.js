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

router.get('/tradutor', async (req, res, next) => {
       text = req.query.text
          var Apikey = req.query.apikey;
if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){    
       fetch(encodeURI(`https://supra-api.herokuapp.com/api/tradutor?text=${text}&apikey=supraz`))
        .then(response => response.json())
        .then(data => {
        var original = data.original;
         var traduzido = data.traduzido;
             res.json({
                 criador : `${criador}`,
                 original,
                 traduzido
             })
         })
        } else {
res.json(loghandler.invalidKey)
}        	    	 		
})

router.get('/ddd', async (req, res, next) => {
         quero = req.query.quero
        var Apikey = req.query.apikey;
if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){          

       fetch(encodeURI(`https://supra-api.herokuapp.com/api/ddd?quero=${quero}&apikey=supraz`))
        .then(response => response.json())
        .then(data => {
        var estado = data.estado;
        var cidades = data.cidades;
             res.json({
                 criador : `${criador}`,
                 estado,
                 cidades
             })
         })
     } else {
res.json(loghandler.invalidKey)
}        	    	 		
})
router.get('/waifu2', async (req, res, next) => {   
        var Apikey = req.query.apikey;
if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){          
       fetch(encodeURI(`https://supra-api.herokuapp.com/api/waifu2?&apikey=supraz`))
        .then(response => response.json())
        .then(data => {    
        var image = data.image;
             res.json({
                 criador : `${criador}`,
                 image
             })
         })
     } else {
res.json(loghandler.invalidKey)
}        	    	 		
})
router.get('/cep1', async (req, res, next) => {
         quero = req.query.quero
        var Apikey = req.query.apikey;
if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){          
       fetch(encodeURI(`https://supra-api.herokuapp.com/api/cep1?quero=${quero}&apikey=supraz`))
        .then(response => response.json())
        .then(data => {
         var cep = data.cep;
        var estado = data.estado;
        var cidade = data.cidade;
       var lugar = data.lugar; 
       var rua = data.rua;
             res.json({
                 criador : `${criador}`,
                 cep,
                 estado,
                 cidade,
                 lugar,
                 rua
             })
         })
          } else {
res.json(loghandler.invalidKey)
}        	    	 		
})

router.get('/ip', async (req, res, next) => {
         quero = req.query.quero
        var Apikey = req.query.apikey;
if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){          
       fetch(encodeURI(`https://supra-api.herokuapp.com/api/ip?quero=${quero}&apikey=supraz`))
        .then(response => response.json())
        .then(data => {
         var pais = data.pais;
        var estado = data.estado;
        var cidade = data.cidade;
       var latitude = data.latitude; 
       var longitude = data.longitude;
       var isp = data.isp;
       var as = data.as;
       var ip = data.ip;
             res.json({
                 criador : `${criador}`,
                 pais,
                 estado,
                 cidade,
                 latitude,
                 longitude,
                 isp,
                 as,
                 ip
             })
         })
          } else {
res.json(loghandler.invalidKey)
}        	    	 		
})
router.get('/saycat', async (req, res, next) => {   
        var Apikey = req.query.apikey;
if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){          
       fetch(encodeURI(`https://supra-api.herokuapp.com/api/saycat?apikey=supraz`))
        .then(response => response.json())
        .then(data => {    
        var resultado = data.resultado;
             res.json({
                 criador : `${criador}`,
                 resultado
             })
         })
     } else {
res.json(loghandler.invalidKey)
}        	    	 		
})
router.get('/conselho', async (req, res, next) => {   
        var Apikey = req.query.apikey;
if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){          
       fetch(encodeURI(`https://supra-api.herokuapp.com/api/conselho?apikey=supraz`))
        .then(response => response.json())
        .then(data => {    
        var frase = data.frase;
             res.json({
                 criador : `${criador}`,
                 frase
             })
         })
     } else {
res.json(loghandler.invalidKey)
}        	    	 		
})
router.get('/romanticafrase', async (req, res, next) => {   
        var Apikey = req.query.apikey;
if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){          
       fetch(encodeURI(`https://supra-api.herokuapp.com/api/romanticafrase?apikey=supraz`))
        .then(response => response.json())
        .then(data => {    
        var frase = data.frase;
             res.json({
                 criador : `${criador}`,
                 frase
             })
         })
     } else {
res.json(loghandler.invalidKey)
}        	    	 		
})


router.get('/dadu', async (req, res, next) => {
      var Apikey = req.query.apikey;
if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){    
      hasil = 'https://supra-api.herokuapp.com/api/dadu?apikey=supraz'
	  data = await fetch(hasil).then(v => v.buffer())   
  
         await fs.writeFileSync(__path +'/tmp/dadu.webp', data)
        res.sendFile(__path+'/tmp/dadu.webp')
         } else {
res.json(loghandler.invalidKey)
}    
})

router.get('/stickera', async (req, res, next) => {
      var Apikey = req.query.apikey;
if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){    
    hasil = 'https://supra-api.herokuapp.com/api/stickera?apikey=supraz'
	  data = await fetch(hasil).then(v => v.buffer())   
  
         await fs.writeFileSync(__path +'/tmp/stickera.webp', data)
        res.sendFile(__path+'/tmp/stickera.webp')
         } else {
res.json(loghandler.invalidKey)
}    
})
router.get('/audiomeme', async (req, res, next) => {
     quero = req.query.quero
   var Apikey = req.query.apikey;
if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){    
   hasil = 'https://supra-api.herokuapp.com/api/audiomeme?quero=' + quero + '&apikey=supraz'
	  data = await fetch(hasil).then(v => v.buffer())   
  
         await fs.writeFileSync(__path +'/tmp/aud.mp3',data)
        res.sendFile(__path+'/tmp/aud.mp3')
        } else {
res.json(loghandler.invalidKey)
}    
})

router.get('/attp1', async (req, res, next) => {
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

router.get('/attp2', async (req, res, next) => {
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

router.get('/playaudio', async (req, res, next) => {
quero = req.query.quero
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

router.get('/playvid', async (req, res, next) => {
quero = req.query.quero
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

module.exports = router
