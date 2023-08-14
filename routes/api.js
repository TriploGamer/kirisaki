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

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
           ///NICKS DO CRIADOR\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
const criadorList = ["JG-Bots"];
const criador = criadorList[Math.floor(Math.random() * criadorList.length)];

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
const listkey = ["jg", "ale2"];

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
      ///LISTA DAS APIKEYS PREMIUM\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
const keyprem = ["key-vip"];

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
  limite: 999,
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

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
       ///FIM DAS APIS E DE TUDO\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
module.exports = router