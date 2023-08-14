///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
    ///INICIO DA API E DE TUDO KSKSK\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\

__path = process.cwd()

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
           ///MODULOS E CONTS\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
const fs = require('fs');
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const thiccysapi = require('textmaker-thiccy');
const axios = require("axios");
const cheerio = require("cheerio");
const router  = express.Router();
const { fetchJson } = require(__path + '/lib/fetcher.js')
const request = require("request");
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
           ///NICKS DO CRIADOR\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
const criadorList = ["JG-Bots"];
const criador = criadorList[Math.floor(Math.random() * criadorList.length)];

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
   ///ARQUIVOS DE SCRAPING OU SEI LA\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\


///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
           ///RESPOSTAS DA API\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
resposta = {
semkey: {
      status: false,
      criador: `${criador}`,
      code: 406,
      mensagem: `Erro apikey esta errada. Não tem apikey? Chame e compre sua chave por apenas 15 R$ wa.me/558594034292`,
},
error: {
    status: false,
    criador: `${criador}`,
    mensagem: 'talvez esteja sendo consertado'
    }
}

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
 ///LISTA DAS APIKEYS VC PODE ADD MS\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
const listkey = ["jg", "JG-01"];

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
      ///LISTA DAS APIKEYS PREMIUM\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
const keyprem = ["JG-01"];

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
 ///AUGUMAS CONSTS PRA API FUNCIONA\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
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

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
            ///CHECAR APIKEY\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
router.get('/cekapikey', async(req, res, next) => {
const apikey = req.query.apikey;
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)) {
res.json({
  status: 'ApiKey ATIVA',
  criador: `${criador}`,
  apikey: `${apikey}`,
})
} else {
res.json(resposta.semkey)
}
})

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
            ///ADICIONAR APIKEY\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
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

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
             ///DELETAR APIKEY\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
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

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
            ///API'S DE YOUTUBE\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
router.get('/youtube/playa', async (req, res, next) => {
q = req.query.q
var apikey = req.query.apikey
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)){
a = await Kibar(`https://tohka.tech/api/dl/play?nome=${q}&apikey=MyfJh6pcMk`)
res.json({
status: "OPERANDO",
código: 200,
criador: `${criador}`,
resultado: {
   titulo: `${a.resultado.título}`,
   thumb: `${a.resultado.thumb}`,
   canal: `${a.resultado.canal}`,
   publicado: `${a.resultado.publicado}`,
   visualizações: `${a.resultado.visualizações}`,
   link: `${a.resultado.link}`
}
}).catch(e => {
res.json({
msg: `erro no servidor interno`
})
})
} else {
res.json(resposta.semkey)
}
})

router.get('/youtube/playv', async (req, res, next) => {
q = req.query.q
var apikey = req.query.apikey
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)){
b = await Kibar(`https://tohka.tech/api/dl/playv?nome=${q}&apikey=MyfJh6pcMk`)
res.json({
status: "OPERANDO",
código: 200,
criador: `${criador}`,
resultado: {
   titulo: `${b.resultado.título}`,
   thumb: `${b.resultado.thumb}`,
   canal: `${b.resultado.canal}`,
   publicado: `${b.resultado.publicado}`,
   visualizações: `${b.resultado.visualizações}`,
   link: `${b.resultado.url}`
}
}).catch(e => {
res.json({
msg: `erro no servidor interno`
})
})
} else {
res.json(resposta.semkey)
}
})

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
          ///API'S DE DOWNLOADS\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
router.get('/download/tiktok', async (req, res, next) => {
links = req.query.link
if (!links) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: link"})
var apikey = req.query.apikey;
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)){
u = await fetchJson(`https://tohka.tech/api/dl/tiktok?link=${links}&apikey=MyfJh6pcMk`)
let buffer = await getBuffer(u.resultado.videoSemWt)
res.type('mp4')
res.send(buffer)
} else {
res.json(resposta.semkey)
}
})

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
             ///API'S DE CANVAS\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
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
let welcomee = (`https://isyubii-api.tk/welcome?titulo=${ti}&nome=${no}&perfil=${pe}&fundo=${fu}&grupo=${gr}`)
let buffer = await getBuffer(welcomee)
res.type('png')
res.send(buffer)
} else {
res.json(resposta.semkey)
}
})

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
         ///OUTROS TIPOS DE API'S\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
router.get('/others/fazernick', async (req, res, next) => {
texto = req.query.texto
if (!texto) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: texto"})
var apikey = req.query.apikey;
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)){
axios.get(`https://qaz.wtf/u/convert.cgi?text=${texto}`)
.then(({ data }) => {
let $ = cheerio.load(data)
let hasil = []
$('table > tbody > tr').each(function (a, b) {
hasil.push({nick: $(b).find('td:nth-child(2)').text().trim()})
})
const resultado = hasil;
res.json({
    status: "OPERANDO",
    código: 200,
    criador: `${criador}`, 
    resultado
  })
})
} else {
res.json(resposta.semkey)
}
})

router.get('/baixar/mediafire', async (req, res, next) => {
link = req.query.link
if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: link"})
var apikey = req.query.apikey;
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)){
u = await Kibar(`https://tohka.tech/api/dl/mediafire?link=${link}&apikey=MyfJh6pcMk`)

res.json({
status: "OPERANDO",
código: 200,
criador: `${criador}`,
resultado: {
titulo: `${u.resultado.nome}`,
tamanho: `${u.resultado.tamanho}`,
link: `${u.resultado.link}`}
})
} else {
res.json(resposta.semkey)
}
})

router.get('/consultas/geradordedados', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey) return res.json(resposta.semkey)
if(keyprem.includes(apikey)){
var amv = JSON.parse(fs.readFileSync(__path + '/database/geradordedados.json'))
res
.status(200)
.json({
status: "OPERANDO",
código: 200,
criador: `${criador}`,
...amv[~~(Math.random() * amv.length)]
})
} else {
res.json(resposta.semkey)
}
})


///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
       ///FIM DAS APIS E DE TUDO\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
module.exports = router