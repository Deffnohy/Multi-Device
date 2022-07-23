//hayolo mau ngapain:v
//Bang Bantu Subscribe lah Bang
//udh gratis no enc lagi Masa ga ad subscribe
//hayo lah bang Subscribe Surviv OFc
//tq too
//Cheems(xeon)

require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fetch = require('node-fetch')
const os = require('os')
const maker = require('mumaker')
const hx = require("hxz-api")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const xeonkey = require('xfarr-api')
const cheerio = require ("cheerio")
const { GansTiktok } = require('./lib/tiktokGans')
let { msgFilter } = require('./lib/antispam')
let { covid } = require('./lib/covid.js') 
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const { GansWiki } = require('./lib/Ganswiki.js')
const textpro = require('./lib/textpro')
const { mediafireDl } = require('./lib/mediafire.js')
const { Gempa } = require("./lib/gempa.js")
const { jadwaltv }= require('./lib/jadwaltv')
const xeontod = require("tod-api")
const { pinterest } = require("./lib/pinterest")
const toHur = require('@develoka/angka-terbilang-js')
const { hentai } = require('./lib/scraper2.js')
const {
 FajarNews, 
 BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KomikuSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  JalanTikusMeme, 
  Cerpen,
  Quotes,
  Couples,
  Darkjokes
} = require("dhn-api")
//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

// Database sewa
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database omther\\

let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'));
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = Gans = async (Gans, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Gans.decodeJid(Gans.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)
	    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()

        //group\\
        const groupMetadata = m.isGroup ? await Gans.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const AntiLink = m.isGroup ? ntilink.includes(from) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const antiWame = m.isGroup ? ntwame.includes(from) : false
const antiToxic = m.isGroup ? nttoxic.includes(from) : false
const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const isAutoStick = _autostick.includes(from)
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const Autoreply = m.isGroup ? autorep.includes(from) : true
        const isBan = banUser.includes(m.sender)
        const isBanChat = m.isGroup ? banchat.includes(from) : false
autoreadsw = true
	    
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
if (!('templateImage' in setting)) setting.templateImage = false
if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	//ga ada apa apa kok
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	            const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
	const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Malam'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Siang'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi'
  }
  
  // TANGGAL By MyMans APIs 
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)
const weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(thisHari / 84600000) % 5]

	// FAKE TEXT IMG
const textImg = (teks) => {
Gans.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./media/image/wpmobile.png')}) 
}

//FAKE CONTACT
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `916909137213 -1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Click to chat\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //The picture
},
"title": `${global.ownername}`, 
"description": `${global.botname}`, 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": `${global.watermark}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
} 
//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: `${global.ownername}`, //
orderTitle: `${global.botname}`,
thumbnail: log0, //Pic
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: `${global.location}`,
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${global.botname}`, 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `${global.botname}`,
"h": `${global.ownername}`,
'seconds': '30', 
'caption': `${global.watermark}`,
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "916909137213-1616169743@g.us",
"inviteCode": `${global.ownername}`,
"groupName": `${global.botname}`, 
"caption":`${global.watermark}`, 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":`${global.botname}`,
 "h": `${global.ownername}`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': `${global.watermark}`,
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":`${global.ownername}`,
"title": `${global.botname}`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999999999999999",
"ptt": "true"
}
} 
}
	
	//sewa
const isSewa = _sewa.checkSewaGroup(from, sewa)
//Sewa
_sewa.expiredCheck(Gans, sewa)

	//group target \\
const reply = (teks) => {
           Gans.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/gambar/awokwok.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            Gans.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/gambar/awokwok.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!Gans.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
        //hitter
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/CheemsBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/CheemsBot${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await Gans.setStatus(`${Gans.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	//antispam or auto react
//if (m.message && msgFilter.isFiltered(from)) {
//console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
//return Gans.sendMessage(from, { react: { text: `${global.themeemoji}`, key: m.key }})
//}
	
//auto read whatsapp status
if (autoreadsw) {
		if (from === 'status@broadcast') {
		Gans.chatRead(from)
	}
	}
//autoreader gc and pm
if (global.autoreadpmngc) {
if (command) {
await Gans.sendPresenceUpdate('composing', m.chat)
Gans.sendReadReceipt(from, m.sender, [m.key.id])}
}
  //autoread gc only
  if (global.autoReadGc) {
  if (m.isGroup) { Gans.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
  //auto recording all
    if (global.autoRecord) { if (m.chat) { Gans.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { Gans.sendPresenceUpdate('composing', m.chat) }
}
//auto available all
  if (global.available) { if (m.chat) { Gans.sendPresenceUpdate('available', m.chat) }
  }

// Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await Gans.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await Gans.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        //Autosticker pc
                if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await Gans.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await Gans.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

	// AntiLinkgc
if (AntiLink) {
linkgce = await Gans.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
reply(`\`\`\`「 Group Link Detected* ❳\`\`\`\n\nKamu tidak akan ditendang oleh bot karena yang Kamu kirim adalah tautan ke grup ini`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Group Link Detected* ❳\`\`\`\n\nAdmin telah mengirim tautan, admin bebas memposting tautan apa pun`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Gans.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
Gans.sendMessage(from, {text:`\`\`\`「 Group Link Detected* ❳\`\`\`\n\n@${kice.split("@")[0]} Telah ditendang karena mengirim tautan di grup ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
  // Antiwame by xeon
  if (antiWame)
  if (budy.includes(`wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected* ❳\`\`\`\n\nAdmin telah mengirim wa.me tautan, admin bebas mengirim tautan apa pun😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Gans.groupParticipantsUpdate(m.chat, [kice], 'remove')
Gans.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected* ❳\`\`\`\n\n@${kice.split("@")[0]} Telah ditendang karena mengirimkan link video youtube di grup ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected* ❳\`\`\`\n\nAdmin telah mengirim wa.me tautan, admin bebas mengirim tautan apa pun😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Gans.groupParticipantsUpdate(m.chat, [kice], 'remove')
Gans.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected* ❳\`\`\`\n\n@${kice.split("@")[0]} Telah ditendang karena mengirimkan tautan video youtube di grup ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by xeon
  if (antiVirtex) {
  if (budy.length > 3500) {
  reply(`Seseorang mengirim spam virus!! tKamui sebagai membaca⚠️\n`.repeat(300))
  reply(`\`\`\`「 Virus Detected* ❳\`\`\`\n\n Maaf Kamu Akan Ditendang !`)
  if (!isBotAdmins) return reply(mess.botAdmin)
  Gans.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }
//anti bad words by xeon
if (antiToxic)
if (bad.includes(messagesD)) {
tos = ['Hei, jaga mulutmu','Tidak pernah diajari berbicara?','Berhentilah menjadi toxic temanku🤢','Jangan Toxic🦄']
sin =  tos[Math.floor(Math.random() * (tos.length))]
reply(sin)
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected* ❳\`\`\`\n\nKamu menggunakan kata-kata yang buruk tetapi Kamu adalah admin itu sebabnya saya tidak akan menendang Kamu😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Gans.groupParticipantsUpdate(m.chat, [kice], 'remove')
Gans.sendMessage(from, {text:`\`\`\`「 Bad Word Detected* ❳\`\`\`\n\n@${kice.split("@")[0]} ditendang karena menggunakan kata-kata buruk di grup ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})}
}
//antilink youtube video by xeon
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected* ❳\`\`\`\n\nAdmin telah mengirim youtube video tautan, admin bebas mengirim tautan apa pun😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Gans.groupParticipantsUpdate(m.chat, [kice], 'remove')
Gans.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected* ❳\`\`\`\n\n@${kice.split("@")[0]} Telah ditendang karena mengirim link video youtube di grup ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink youtube channel by xeon
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected* ❳\`\`\`\n\nAdmin telah mengirim youtube channel tautan, admin bebas mengirim tautan apa pun😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Gans.groupParticipantsUpdate(m.chat, [kice], 'remove')
Gans.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected* ❳\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink instagram by xeon
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected* ❳\`\`\`\n\nAdmin telah mengirim instagram tautan, admin bebas mengirim tautan apa pun😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Gans.groupParticipantsUpdate(m.chat, [kice], 'remove')
Gans.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected* ❳\`\`\`\n\n@${kice.split("@")[0]} Ditendang gara-gara kirim link instagram di grup ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink facebook by xeon
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected* ❳\`\`\`\n\nAdmin telah mengirim tautan facebook, admin bebas mengirim tautan apa pun😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Gans.groupParticipantsUpdate(m.chat, [kice], 'remove')
Gans.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected* ❳\`\`\`\n\n@${kice.split("@")[0]} Telah ditendang karena mengirim tautan facebook di grup ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink telegram by xeon
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected* ❳\`\`\`\n\nAdmin telah mengirim tautan telegram, admin bebas mengirim tautan apa pun😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Gans.groupParticipantsUpdate(m.chat, [kice], 'remove')
Gans.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected* ❳\`\`\`\n\n@${kice.split("@")[0]} Telah ditendang karena mengirim tautan telegram di grup ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink tiktok by xeon
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected* ❳\`\`\`\n\nAdmin telah mengirim tautan tiktok, admin bebas mengirim tautan apa pun😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Gans.groupParticipantsUpdate(m.chat, [kice], 'remove')
Gans.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected* ❳\`\`\`\n\n@${kice.split("@")[0]} Telah ditendang karena mengirim tautan tiktok di grup ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink twitter by xeon
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected* ❳\`\`\`\n\nAdmin telah mengirim tautan twitter, admin bebas mengirim tautan apa pun😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Gans.groupParticipantsUpdate(m.chat, [kice], 'remove')
Gans.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected* ❳\`\`\`\n\n@${kice.split("@")[0]} Telah ditendang karena mengirim tautan twitter di grup ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink all by xeon
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected* ❳\`\`\`\n\nAdmin telah mengirim tautan, admin bebas mengirim tautan apa pun😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Gans.groupParticipantsUpdate(m.chat, [kice], 'remove')
Gans.sendMessage(from, {text:`\`\`\`「 Link Detected* ❳\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Done nih!",footerText: `${botname}`,buttons: buttons,headerType: 4}
Gans.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: Gans.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Gans.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Gans.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Beberapa Jawaban Memiliki Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            Gans.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Gans.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak lagu' }, type: 1 }], `🎮 Tebak Musiknya 🎮\n\nJawaban yang benar 🎉\n\nMau Main Lagi? Tekan Tombol Di Bawah`, Gans.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Jawaban yang salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Kuis Matematika 🎮\n\nJawaban yang benar 🎉\n\nMau Main Lagi? Kirim ${prefix}kuis matematika`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Gans.sendButtonText(m.chat, [{ buttonId: 'Tebak Gambar', buttonText: { displayText: 'Tebak gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban yang Benar \n\nIngin Bermain Lagi? Tekan Tombol Di Bawah`, Gans.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Jawaban salah*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Gans.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak kata 🎮\n\nJawaban yang benar 🎉\n\nMau Main Lagi? Tekan Tombol Di Bawah`, Gans.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Gans.sendButtonText(m.chat, [{ buttonId: 'tebak kosong', buttonText: { displayText: 'Tebak Kosong' }, type: 1 }], `🎮 Tebak Kosong 🎮\n\njawaban yang benar 🎉\n*${deskripsi}*\n\nMau Main Lagi? Tekan Tombol Di Bawah`, Gans.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Gans.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban yang benar 🎉\n\nMau Main Lagi? Tekan Tombol Di Bawah`, Gans.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Gans.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban yang benar 🎉\n\nMau Main Lagi? Tekan Tombol Di Bawah`, Gans.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Gans.sendButtonText(m.chat, [{ buttonId: 'Tebak teka-teki', buttonText: { displayText: 'Tebakan Teka-teki' }, type: 1 }], `🎮 Tebak teka-teki 🎮\n\nJawaban yang benar 🎉\n\nMau Main Lagi? Tekan Tombol Di Bawah`, Gans.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Permainan Telah Berakhir',
	    '-2': 'Tidak sah',
	    '-1': 'Posisi Tidak Valid',
	    0: 'Posisi Tidak Valid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await Gans.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await Gans.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|yes|okay?|tolak|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    Gans.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Tolak Gugatan, Gugatan Dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    Gans.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan Pilih pilihan Di Chat Masing-Masing"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) Gans.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) Gans.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) Gans.sendText(m.chat, `Kedua Pemain Tidak Ingin Bermain,\nSuit Dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    Gans.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih2) Gans.sendText(roof.p2, '_Lawan Telah Memilih_\nSekarang giliran Kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih) Gans.sendText(roof.p, '_Lawan Telah Memilih_\nSekarang giliran Kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    Gans.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win\n(Congratulations Kamu Menang🎉🥳) \n\n` : ` Lost\n(Yah Kamu Kalah, Coba Lagi Di rounde Berikutnya👌) \n\n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win\n(Congratulations Kamu Menang🎉🥳) \n\n` : ` Lost\n(Yah Kamu Kalah, Coba Lagi Di rounde Berikutnya👌) \n\n`}


`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
            Hallo ${pushname} ${ucapanWaktu}
╭───❏
│Kamu Kembali Online Setelah Afk
│${user.afkReason ? ' Alasan ' + user.afkReason : ''}
│Selama ${clockString(new Date - user.afkTime)}
╰───────────────❏

`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
       //react function
const reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                
                const timestampe = speed();
const latensie = speed() - timestampe
                const menulist = `┌─❖
││「 Hi 👋* ❳
└┬❖ 「 ${pushname}* ❳
┌┤✑  ${ucapanWaktu}
└────────────┈ ⳹

╔════「 *${global.botname}* ❳════╗
╠➤👤𝙊𝙬𝙣𝙚𝙧 : ${global.ownername}
╠➤🤖𝘽𝙊𝙏 : ${global.botname}
╠➤⏰𝙐𝙥𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
╠➤🏃𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} milidetik
╠➤🔰𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
╠➤♨️𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
╠➤🔢𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
╠➤📛𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${jumlahcmd}
╠➤🎟️𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 𝗧𝗼𝗱𝗮𝘆 : ${jumlahharian}
╚═════════════════♪(༎ຶ 
   │✑  Silahkan pilih
   │✑  Tombol Di Bawah
   └─────────────┈ ⳹`
 const jadib = `
 ⳹⍣ 𝐎𝐩𝐞𝐧 𝐉𝐚𝐬𝐚 𝐒𝐞𝐰𝐚 𝐁𝐎𝐓 ⍣⳼
  
╔═════════════
╠═〘༺ Sewa BOT ༻〙
╠❥1 BULAN = 10.000
╠❥2 BULAN = 15.000
╠❥Permanen = 20.000
╚═╦════════════
      ║
      ╠═〘 *Kelebihan BOT* 〙
      ║☞ BOT ON 24 Jam
      ║☞ RUN Okteto/Heroku
      ║☞ Bisa Scan Ulang
      ║☞ Fitur Banyak
      ║☞ Tinggal Pake
╔═╩════════════
╠═〘 *Keuntungan BOT* 〙
║☞ ANTILINK ( Auto Kick )
║☞ Welcome ( OTOMATIS )
║☞ Fitur NSFW (18+)
║☞ 100+ Fitur Lainnya
╚═════════════╦
╔═════════════╩
║ *Minat Hubungi Owner*
║
║☞ wa.me/6289509960601?text=Assalamualaikum%20permisi%20kak%20mau%20sewabot
║
╚═════════════༻

⳹⍣ 𝐎𝐩𝐞𝐧 𝐉𝐚𝐬𝐚 𝐉𝐚𝐝𝐢 𝐁𝐎𝐓 ⍣⳼

╔═════════════༻
╠═〘༺ List Jadibot ༻〙
╠❥1 Bulan+Owner = 10.000
╠❥2 Bulan+Owner = 20.000
╠❥Permanen+Owner = 999.999
╚════╦═════
   .          ╚════╦
╔═════════╩
╠═〘 *Fasilitas BOT* 〙
║☞ Tinggal Scan
║☞ On 24 jam
║☞ Bisa Scan Ulang
║☞ ON tanpa Internet
║☞ Fitur Bisa Di Check
║☞ Bukan BOT Wibusoft
╚═════╦════════
   .             ║
╔═════╩════════
╠═〘 *Keuntungan Jadi BOT* 〙
║☞ Bisa Sewa BOT
║☞ Setting BOT
║☞ No Owner Lu
║☞ No BOT Lu
║☞ Nama Owner Lu
║☞ Bebas
╚═════════════╦
╔═════════════╩
║Minat Hubungi Owner
║
║☞ wa.me/6289509960601?text=Assalamualaikum%20permisi%20kak%20mau%20Jadibot
║
╚═════════════༻`
  const donasi = `*-------「 DONATE* ❳ -------*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 👍

Thanks!`
   
   //randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

// short story
async function cerpen (category) {
    return new Promise((resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Short Story: ')[1].split('Category: ')[0],
                    kategori: $$('#content > article').text().split('Category: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Passed moderation on: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}

switch(command) {
	
	case 'jadibot': case 'sewabot':
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
Gans.sendMessage(from, { react: { text: `${global.reactmoji}`, key: m.key }})
	                let bubut = [{
                                urlButton: {
                                    displayText: 'Contact Owner',
                                    url: `https://wa.me/6289509960601`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'BACK TO MENU',
                                    id: 'menu'
                                }
                            }]
                        Gans.send5ButImg(m.chat, jadib, global.botname, global.thumb, bubut, global.thumb)
                        break
case 'donasi':
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
Gans.sendMessage(from, { react: { text: `${global.reactmoji}`, key: m.key }})
	                let ngen = [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: `${websitex}`
                                }
                            }, {
                                callButton: {
                                    displayText: 'Contact Owner',
                                    url: `+62 895-0996-0601`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'BACK TO MENU',
                                    id: 'menu'
                                }
                            }]
                        Gans.send5ButImg(m.chat, donasi, global.botname, global.donas, ngen, global.donas)
                        
                        ngentot
      break

 case 'banchat': {
 if (isBan) return reply(mess.ban)	 			
if (!isCreator) return replay(mess.owner)
if (args[0] === "on") {
if (isBanChat) return replay('Already Banned')
banchat.push(from)
replay('Success in banning the gc')
var groupe = await Gans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Gans.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nBot telah dinonaktifkan di grup ini, sekarang tidak ada yang dapat menggunakan bot di grup ini!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!isBanChat) return replay('Already Unbanned')
let off = banchat.indexOf(from)
banchat.splice(off, 1)
replay('Success in unbanning the gc')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Ban' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Unban' }, type: 1 }
  ]
  await Gans.sendButtonText(m.chat, buttonsntnsfw, `Silakan klik tombol di bawah\nIni\nBan untuk Banned\nunban untuk unbanned`, `${global.botname}`, m)
  }
  }
  break

case 'ban': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args[0]) return replay(`Pilih tambah atau del (tambahkan untuk melarang, del untuk membatalkan larangan), Misalnya: Reply *${prefix}ban add* kepada pengguna yang ingin Kamu ban`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User was already banned')
banUser.push(orgnye)
replay(`Successfully banned the user`)
} else if (args[0] === "del") {
if (!isBane) return ads('User was already unbanned')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`Successfully unbanned the user`)
} else {
replay("Error")
}
}
break
	
        case 'inventori': case 'inventory': case 'profile':{
        	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (q.includes('--help')) return reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var Gans = await getBuffer(picak+`User's Inventory`)
     let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*❤️Your Blood* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Your Iron* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Your Gold* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Your Emerald* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺️Your Limit* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*🧪Your Potion* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ 🐺HUNT RESULT🐺 ]_\n`
     teksehmazeh += `*🐟Fish* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Chicken* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Rabbit* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Sheep* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Cow* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Elephant* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${pushname}*_`
     await Gans.send5ButImg(from, `` + '' + teksehmazeh, `© ${botname}`, Gans, [{"urlButton": {"displayText": "YouTube📍","url": `${websitex}`}}])
  }
  break
        case 'userlimit': 
        if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
 case 'leaderboard':
 if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Fish* : ${i.ikan}\n`
     txt += `*🐔Chicken* : ${i.ayam}\n`
     txt += `*🐇Rabbit* : ${i.kelinci}\n`
     txt += `*🐑Sheep* : ${i.domba}\n`
     txt += `*🐄Cow* : ${i.sapi}\n`
     txt += `*🐘Elephant* : ${i.gajah}\n\n`
     }
    reply(txt)       
  }
 break
case 'nambang': case 'mining':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (q.includes('--help')) return reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`) 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ MINING HASIL ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'mining Lagi⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     Gans.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Mulai Menambang🗿`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaction\\
 case 'beli': case 'buy':{
 	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (q.includes('--help')) return reply(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply(`Mau Beli Apa?\n\n1.ramuan\n2.umpan makanan\n3.limit\n\nExample: ${prefix + command} ramuan`)
 var anu = args[1]
  if (args[0] === 'ramuan'){
  let noh = 100000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} ramuan 2\n 1 Ramuan = 100000 Uang`)
 if (isMonay < noh) return reply('Sisa Uang Kamu Tidak Cukup Untuk Pembelian Ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️️\n*Sisa Uang Kamu* : ${getMonay(m.sender)}\n*Potion Kamu* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'umpan makanan'){
  let noh = 5000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} umpan makanan 2\n 1 Umpan Makanan = 2500 Uang`)
 if (isMonay < noh) return reply('Sisa Uang Kamu Tidak Cukup Untuk Pembelian Ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️️\n*Sisa Uang Kamu* : ${getMonay(m.sender)}\n*Umpan Makanan Kamu* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} limit 2\n 1 Limit = 35000 Uang`)
 if (isMonay < noh) return reply('Sisa Uang Kamu Tidak Cukup Untuk Pembelian Ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi Berhasil ️\n*Sisa Uang Kamu* : ${getMonay(m.sender)}\n*Batas Kamu* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { reply("Format Salah!") }
 }
 break
 case 'sel': case 'jual':{
 	 if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
 if (!q) return  reply(`Apa yang Ingin Kamu Jual??\nContoh : ${prefix + command} ikan 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return reply(`Kamu Tidak Memiliki Cukup Ikan Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} ikan 2\n 1 Ikan = 1500 Uang`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil ️\n*Sisa Uang Kamu* : ${getMonay(m.sender)}\n*Sisa Ikan Kamu* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return reply(`Kamu Tidak Memiliki Cukup Ayam Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} ayam 2\n 1 Ayam = 2500 Uang`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil ️✔️\n*Sisa Uang Kamu* : ${getMonay(m.sender)}\n*Sisa Ayam Kamu* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return reply(`Kamu Tidak Memiliki Cukup Kelinci Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} kelinci 2\n 1 Kelinci = 3000 Uang`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️️\n*Sisa Uang Kamu* : ${getMonay(m.sender)}\n*Kelinci yang Tersisa* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return reply(`Kamu Tidak Memiliki Cukup Domba Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} domba 2\n 1 Domba = 5000 uang`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️\n*Uang Kamu yang Tersisa* : ${getMonay(m.sender)}\n*Domba Kamu yang Tersisa* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return reply(`Kamu Tidak Memiliki Cukup Sapi Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} sapi 2\n 1 Sapi = 10.000 Uang`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️\n*Sisa Uang Kamu* : ${getMonay(m.sender)}\n*Sapi Kamu yang Tersisa* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return reply(`You Don't Have Enough Elephant(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} elephant 2\n 1 Gajah = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️\n*Sisa Uang Kamu* : ${getMonay(m.sender)}\n*Gajah Kamu yang Tersisa* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return reply(`Kamu Tidak Memiliki Cukup Besi Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️\n*Sisa Uang Kamu* : ${getMonay(m.sender)}\n*Sisa Besi Kamu* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return reply(`Kamu Tidak Memiliki Cukup Emas Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️️\n*Uang Kamu* : ${getMonay(m.sender)}\n*Sisa Emas Kamu* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`Kamu Tidak Memiliki Cukup Zamrud Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil ✔️\n*Uang Kamu yang Tersisa* : ${getMonay(m.sender)}\n*Kamu Tidak Memiliki Cukup Zamrud Untuk Transaksi Ini* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { reply("Incorrect Format!") }

 }
 break

 case 'darah': case 'heal':{
 	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (q.includes('--help')) return reply(examkosong) 
 if (!isCekDarah < 1) return reply('Kamu Hanya Dapat Menyembuhkan Ketika Darah Kamu 0')
 if (isCekDarah > 100) return reply('Darahmu Penuh')
 if (isPotion < 1) return reply(`Kamu Tidak Punya Ramuan, Coba Beli Dengan Cara ngetik #buypotion _amount_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Success! Your Bood Is Full')
 }
 break
 case 'hunt': case 'berburu': {
 	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (q.includes('--help')) return reply(examkosong) 
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Darahmu Habis, Coba Sembuhkan Menggunakan Ramuan') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Ditusuk duri saat berburu", "Tergelincir ke jurang saat berburu","Digores binatang buas", "Tidak hati-hati", "Terjerat akar", "Jatuh saat berburu"]
  let location = ["Hutan", "Hutan Amazon", "Hutan tropis", "Meadow","Hutan Afrika","Pegunungan"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Jungle') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Amazon forest') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Tropical forest') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Meadow') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'African forest') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Mountains') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HASIL BERBURU ]_\n`
     teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
     teksehmazeh += `*🐔Chicken* : ${ayam}\n`
     teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
     teksehmazeh += `*🐑Sheep* : ${domba}\n`
     teksehmazeh += `*🐄Cow* : ${sapi}\n`
     teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Lokasi* : ${lokasinya}\n`
     teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
     teksehmazeh += `*Darah yang tersisa* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Berburu Lagi️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     Gans.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Mulai Berburu ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
Gans.groupRevokeInvite(m.chat)
}
break
case 'assalamualaikum':
reply('Waalaikumsalam')
break
	    case 'afk': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`
╭───❏
│${m.pushName} Izin AFK
│Alasan  ${text ? ': ' + text : ''}
│Pada jam : ${xtime}
╰───────────────❏`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room.x !== room.o) await Gans.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await Gans.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            Gans.sendText(m.chat, `Successfully Deleted The TicTacToe Session`, m)
            } else if (!this.game) {
            reply(`TicTacToe🎮 Session Does Not Exist`)
            } else reply('?')
            } catch (e) {
            reply('Damaged')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return replay(`Lengkapi Sebelumnya Suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Tidak Bisa Bermain Dengan Diri Sendiri !`)
            if (!m.mentionedJid[0]) return reply(`_Siapa yang Ingin Kamu Tantang?_\nTag Orangnya..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0])))  reply(`Orang yang Kamu Tantang Sedang Bermain Dengan Orang Lain :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} Untuk Bermain Suit

Silahkan @${m.mentionedJid[0].split`@`[0]} Mengetik Terima/Tolak`
            this.suit[id] = {
            chat: await Gans.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) Gans.sendText(m.chat, `_Waktu Suit Habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
                if (args[0] === 'mute') {
                    Gans.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    Gans.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    Gans.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    Gans.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    Gans.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    Gans.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    Gans.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if ('family100'+m.chat in _family100) {
                    reply('Masih Ada Sesi yang Belum Selesai!')
                    reply(false)
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawab pertanyaan berikut :*\n${random.soal}\n\nAda *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(Beberapa Jawaban Memiliki Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await Gans.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.quoted && !text) return replay(`Send/Reply Teks Dengan Caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
case 'tebak': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Contoh : ${prefix + command} lagu\n\nOpsi : \n1.lagu\n2.gambar\n3.kata\n4.kalimat\n5. lirik\n6.caklontong`)
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replay("Masih ada game yang belum selesai!")
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await Gans.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
Gans.sendText(m.chat, `Apa judul lagu ini?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
Gans.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak lagu' }, type: 1 }], `Waktu habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain lagi? tekan tombol di bawah`, `${global.botname}`, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay("Masih ada sesi yang belum selesai!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
Gans.sendImage(m.chat, result.img, `Tolong jawab pertanyaan di atas\n\nKeterangan : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
Gans.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak gambar' }, type: 1 }], `Waktu telah habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan tombol di bawah`,`${global.botname}`, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replay("Masih ada sesi yang belum selesai!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
Gans.sendText(m.chat, `Tolong jawab pertanyaan berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
Gans.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'tebak kata' }, type: 1 }], `Waktu habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan tombol di bawah`, `${global.botname}`, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replay("Masih ada sesi yang belum selesai!")
let anu = await fetchJson('https://raw.githubusercontent.com/DGXeon/fungames/main/GuessTheSentence.js')
let result = anu[Math.floor(Math.random() * anu.length)]
Gans.sendText(m.chat, `Tolong jawab pertanyaan berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
Gans.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain Lagi? tekan tombol di bawah`, `${global.botname}`, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return replay("Masih ada sesi yang belum selesai!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
Gans.sendText(m.chat, `Isi lirik yang hilang di bawah ini : *${result.soal}*?\nTime : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
Gans.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebakan Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain Lagi? tekan tombol di bawah`, `${global.botname}`, m)
delete tebaklirik[m.sender.split('@')[0]]
}
}
}
break
case 'caklontong':{
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replay("Masih ada sesi yang belum selesai!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
Gans.sendText(m.chat, `*Jawab pertanyaan berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
Gans.sendButtonText(m.chat, [{ buttonId: 'caklontong', buttonText: { displayText: 'caklontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDescription : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain lagi? tekan tombol di bawah`, `${global.botname}`, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
break
		
	case 'react': { 
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
Gans.sendMessage(m.chat, reactionMessage)} 
break
		
		
            case 'kuismath': case 'math': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay(`Masih Ada Sesi yang Belum Selesai!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replay(`Mode: ${Object.keys(modes).join(' | ')}\nSebagai Contoh: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                Gans.sendText(m.chat, `*Apa Hasilnya?: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("jawaban: " + result.jawaban)
                    reply("Waktu habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await Gans.sendButtonText(m.chat, buttons, jawab, Gans.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await Gans.sendButtonText(m.chat, buttons, jawab, Gans.user.name, m, {mentions: menst})
            }
            break
case 'kapan': case 'kapankah':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Gunakan Teks, Contoh : ${prefix + command} apakah saya akan menikah? `)
					const kapan = ['Nanti', '5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Lebih Banyak Hari','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa']
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
Gans.sendMessage(from, { text: `Pertanyaan : kapankah ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
					break
            case 'apakah':
					if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Gunakan Teks, Contoh : ${prefix + command} dia menikah `)
					const lel = [`Tanyakan Gf Kamu`, `Saya Tidak Tahu`, `iya`, `Itu Sangat Mustahil`, `Tentu Saja`, `Tidak`, `Tentu Saja Itu Akan Terjadi`, `Mungkin tidak`, `Tidak Mungkin`, `mungkin iya`, `Mungkin`, `Yo Ndak Tau Kok Tanya Saya`, `Tanya Ayahmu`]
					const kahk = lel[Math.floor(Math.random() * lel.length)]
Gans.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kahk}` }, { quoted: m })

					break
case 'siapa': case 'siapakah': {
      	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!text) return replay(`Gunakan Teks, Contoh : ${prefix + command} yang akan menikah `)
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = ` @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀😂' }, type: 1 }
                    ]
                    await Gans.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
case 'bisakah':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Gunakan Teks, Contoh : ${prefix + command} kamu ngewe dengan loli `)
					const bisa = [`Bisa`,`Tidak`,`Tidak bisa`,`100% Bisa`,`100% Gabakal Bisa`,`Mana Bisa Gitu Anjg`,`Yah Bisa Lah`,`Bisain Aja Biar Lu senang😏`,`Tentu saja Bisa!!!`]
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
Gans.sendMessage(from, { text: `Pertanyaan : Bisakah ${q}\nJawaban : ${ga}` }, { quoted: m })

					break
case 'rate':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Gunakan Teks, Example : ${prefix + command} Bot ini`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
Gans.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })

					break
                    case 'luarbiasacheck':
                    case 'gantengcheck':
                    case 'wibucheck':
  case 'baguscheck':
    case 'gaycheck':
      case 'imutcheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'terangsangcheck':
                 case 'cantikcheck':
                    case 'menyenangkancheck':
                      case 'jelekcheck':
                                  	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Tag Seseorang, Example : ${prefix + command} @deffgans`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
Gans.sendMessage(from, { text: `*${command}*\n\n${q}\n${command} *${sange}%*` }, { quoted: m })
					break
                    case 'stupid':
      case 'konyol':
      case 'cerdas':
      case 'bodoh':
      case 'gay':
      case 'lesbi':
      case 'tunggul':
      case 'anjing':
      case 'setan':
      case 'kera':
      case 'noob':
      case 'Bagus':
      case 'terangsang':
      case 'wibu':
      case 'bajingan':
      case 'tampan':
      case 'Cantik':
      case 'imut':
      case 'jelek':
      case 'cantik':
      case 'pakboy':
      case 'buaya':
      case 'sadboy':
      case 'sadgirl':
      case 'pakgirl':
      case 'panas': {
      	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Yang paling *${command}* Disini adalah @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀😂' }, type: 1 }
                    ]
                    await Gans.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
case 'dare':
                   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
              const dare =[
    "Foto kuburan tengah malam berani ga?",
"Ambil foto bot, jadikan foto profil kamu selama 1 hari",
"VN nyanyi balonku ada 5",
"Minum Coca-Cola sampai habis tanpa sendawa selama 30 detik",
"Makan 1 Cabe tanpa minum, tanpa gorengan selama 2 menit",
"Celupin hp kamu ke air selama 30 detik",
"VN *Aku sayang kamu*",
"Nyanyi potong bebek angsa (VN)",
"Kirim pesan ke mantan kamu dan bilang _aku masih suka sama kamu_",
"Telfon crush/pacar sekarang dan ss ke pemain",
"Pap ke salah satu anggota grup",
"Pap apa yang di depan kamu",
"SS recent call whatsapp",
"Kirim voice note bilang can i call u baby?",
"Pake foto sule sampe 3 hari'",
"Ketik pake bahasa daerah 24 jam",
"Ganti nama menjadi _gue anak lucinta luna_ selama 5 jam",
"Chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia _i lucky to hv you_",
"Prank chat mantan dan bilang *i love u, pgn balikan*",
"Record voice baca surah al-kautsar",
"Ganti nama jadi *BOWO* selama 24 jam",
"Sebutkan tipe pacar mu!",
"VN *aku mencintaimu*",
"Kamu harus pap sekarang!",
"Kamu harus bagi bagi limit, minimal 2 setiap pengguna",
"Chatingan selama 1 jam harus 4l4Y 8AN93T"
]
              const xeondare = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              Gans.sendMessage(from, { image: buffer, caption: '_*Harus Mau Yaa:v*_\n'+ xeondare }, {quoted:m})
              break
                            break
       case 'truth':
       if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
              const truth =[
    "Pernah ngambil uang ortu apa ga?",
"Pernah bohong sama ortu apa aja?\nCoba ceritakan tentang kebohongannya",
"Apa makanan yang kamu sukai?",
"Siapa yang mau di jadikan pacar di gc ini?",
"Apa mimpi terburukmu?",
"Apa hal paling memalukan dari temanmu?",
"Pernah suka sama siapa aja? berapa lama?",
"Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)",
"Apa ketakutan terbesar kamu?",
"Pernah suka sama orang dan merasa orang itu suka sama kamu juga?",
"Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?",
"Pernah gak nyuri uang nyokap atau bokap? Alesanya?",
"Hal yang bikin seneng pas lu lagi sedih apa?",
"Pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?",
"Pernah jadi selingkuhan orang?",
"Hal yang paling ditakutin",
"Siapa orang yang paling berpengaruh kepada kehidupanmu",
"Hal membanggakan apa yang kamu dapatkan di tahun ini",
"Siapa orang yang bisa membuatmu sange :v",
"Sapa orang yang pernah buatmu sange",
"(bgi yg muslim) pernah ga solat seharian?",
"Siapa yang paling mendekati tipe pasangan idealmu di sini",
"Suka mabar(main bareng)sama siapa?",
"Pernah nolak orang? alasannya kenapa?",
"Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget",
"Pencapaian yang udah didapet apa aja ditahun ini?",
"Kebiasaan terburuk lo pas di sekolah apa?",
"Siapa nama mantan yang bikin lo sakit hati?"
]
              const xeontruth = truth[Math.floor(Math.random() * truth.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              Gans.sendMessage(from, { image: buffer, caption: '_*Jawab Jujur Yaa:v*_\n'+ xeontruth }, {quoted:m})
              break
case 'wangy':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
              if (!text) return replay(`Use Text, Example : ${prefix + command} hinata`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaah bau rambut ${qq} bau aku ingin mencium wanginya ${qq} AAAAAAAAH ~ Her hair.... aaah i want to stroke her hair too ~~ AAAAAH ${qq} pertama kali keluar di anime juga lucu ❤️ ❤️ ❤️ so AAAAAAAH ${qq} AAAAAA LUCCUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️what ? ${qq} itu tidak nyata ? Hanya NERAKA katamu ? no, no no no no no no no no no no no no no no no !! AKU TAK PEDULI DENGAN KENYATAANNYA, SAYA TIDAK PEDULI. ❤️ ❤️ ❤️ ${qq} me ... ${qq} di laptop mengawasiku, ${qq} .. kamu percaya padaku ? aaaaaaaaaaah terima kasih ${q} aku tidak ingin menyerah ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH SAYA MASIH MEMPUNYAI ${qq} JUGA TIDAK SAMA AAAAAAAAAAAAAAH`
             reply(awikwok)
              break
case 'checkdeath':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
             if (!text) return replay(`Use Someone's Name, Example : ${prefix + command} Bot`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
              break  
            case 'join': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Enter The Group Link!`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`Invalid Link!`)
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await Gans.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
                               case 'leavegc': case 'leavegroup': {
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	reply(mess.wait)
                if (!isCreator) return replay(`${mess.owner}`)
                await Gans.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'setexif': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
               if (!isCreator) return replay(`${mess.owner}`)
               if (!text) return replay(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif Telah Berhasil Diubah ke\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Gans.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Gans.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Gans.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Gans.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
        	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Gans.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
        	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Gans.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setgcname': case 'setsubject': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await Gans.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdescription': {
          	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await Gans.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setbotpp': {
          	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await Gans.downloadAndSaveMediaMessage(quoted)
                await Gans.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
           	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await Gans.downloadAndSaveMediaMessage(quoted)
                await Gans.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
            case 'tagall': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
let teks = `╚»˙·٠•●♥ Tag All ♥●•٠·˙«╝ 
 
 ➲ *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                Gans.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
                	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins) return replay(`${mess.admin}`)
            Gans.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //wont response when limit runs out\\
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) return replay(`Enter Query Text!`)
                let anu = await styletext(text)
                let teks = `Entered Text ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
               	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (m.chat in vote) replay(`Masih Ada vote Di Obrolan Ini!_\n\n*${prefix}delvote* - Untuk Menghapus Sesi Vote`)
            if (!text) return replay(`Masukkan Alasan Vote, Contoh: *${prefix + command} Pemilik Tampan*`)
            reply(`Vote di Mulai\n\n*${prefix}upvote* - Untuk Vote positif\n*${prefix}devote* - Untuk Pengabdian\n*${prefix}checkvote* - Untuk Memeriksa Vote\n*${prefix}delvote* - Untuk Menghapus Vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}delvote* - Untuk Menghapus Sesi vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: Gans.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            Gans.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
               	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*Tidak Ada Voting Di Grup Ini!*_\n\n*${prefix}vote* - Untuk Memulai Vote`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) replay(`Kamu telah Memilih`)
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: Gans.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            Gans.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
                	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*Tidak Ada Voting Di Grup Ini!*_\n\n*${prefix}vote* - Untuk Memulai Vote`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replay(`Kamu telah memilih`)
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: Gans.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            Gans.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(`${mess.group}`)
if (!(m.chat in vote)) return replay(`_*Tidak Ada Voting Di Grup Ini!*_\n\n*${prefix}vote* - Untuk Memulai Vote`)
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session


©${Gans.user.id}
`
Gans.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
			if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*Tidak Ada Voting Di Grup Ini!*_\n\n*${prefix}vote* - Untuk Memulai Vote`)
            delete vote[m.chat]
            reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
               	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === 'close'){
                    await Gans.groupSettingUpdate(m.chat, 'pengumuman').then((res) => reply(`Sukses Menutup Grup`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await Gans.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Grup`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await Gans.sendButtonText(m.chat, buttons, `Group Mode`, Gans.user.name, m)

             }
            }
            break
            case 'editinfo': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
             if (args[0] === 'open'){
                await Gans.groupSettingUpdate(m.chat, 'tidak terkunci').then((res) => reply(`Berhasil Dibuka Edit Info Grup`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await Gans.groupSettingUpdate(m.chat, 'terkunci').then((res) => reply(`Berhasil Ditutup Edit Info Grup`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await Gans.sendButtonText(m.chat, buttons, `Mode Edit Info`, Gans.user.name, m)

            }
            }
            break
case 'autosticker':
            case 'autostiker':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args.length < 1) return reply('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return reply(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply('autosticker activated')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply('auto sticker deactivated')
}
break
case 'autostickerpc':
            case 'autostikerpc':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (args.length < 1) return reply('ketik autosticker on untuk mengaktifkan\nketik autosticker off untuk menonaktifkan')
if (args[0]  === 'on'){
if (isAutoStick) return reply(`Telah diaktifkan`)
_autostick.push(from)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
reply(' autosticker diaktifkan')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
_autostick.splice(anu, 1)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
reply('autosticker dinonaktifkan')
}
break
case 'antilinkgc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLink) return replay('Telah diaktifkan')
ntilink.push(from)
replay('Sukses menyalakan Antilink Group chatt Di group ini')
var groupe = await Gans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Gans.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Kamu bukan admin, jangan kirim tautan grup di grup ini atau Kamu akan langsung ditendang`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLink) return replay('sudah dinonaktifkan')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
replay('Berhasil mematikan group chat antilink Di group ini')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Gans.sendButtonText(m.chat, buttonsntilink, `Klik tombol di bawah\n\nAktif untuk mengaktifkan\nNonaktif untuk menonaktifkan`, `${global.botname}`, m)
  }
  }
  break
  case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return replay('Telah diaktifkan')
ntilinkytvid.push(from)
replay('Sukses menyalakan youtube video antilink Di group ini')
var groupe = await Gans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Gans.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Kamu bukan admin, jangan kirimkan tautan video youtube di grup ini atau Kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return replay('sudah dinonaktifkan')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
replay('Berhasil mematikan youtube video antilink Di group ini')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Gans.sendButtonText(m.chat, buttonsntilink, `Klik tombol di bawah\n\nAktif untuk mengaktifkan\nNonaktif untuk menonaktifkan`, `${global.botname}`, m)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return replay('Telah diaktifkan')
ntilinkytch.push(from)
replay('Sukses menyalakan youtube channel antilink Di group ini')
var groupe = await Gans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Gans.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Kamu bukan admin, jangan kirimkan tautan saluran youtube di grup ini atau Kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return replay('sudah dinonaktifkan')
let off = ntilinkytch.indexOf(from)
ntilinkytch.splice(off, 1)
replay('Berhasil mematikan youtube channel antilink Di group ini')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Gans.sendButtonText(m.chat, buttonsntilink, `Klik tombol di bawah\n\nAktif untuk mengaktifkan\nNonaktif untuk menonaktifkan`, `${global.botname}`, m)
  }
  }
  break
case 'chika': case 'rikagusriani':  case 'bocil': case 'geayubi': case 'santuy': case 'ukhty': case 'asupan':  case 'delvira': case 'ayu': case 'bunga': case 'aura': case 'nisa': case 'ziva': case 'yana': case 'viona': case 'syania': case 'riri': case 'syifa': case 'mama_gina': case 'alcakenya': case 'mangayutri': {
	m.reply(mess.wait)
	let to = global.api('alfa', '/api/asupan/'+command, {}, 'apikey')
sendFileFromUrl(from, to, (mess.success), m)
.catch((err) => {
                    m.reply(mess.err)
                })
}
break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return replay('Telah diaktifkan')
ntilinkig.push(from)
replay('Sukses menyalakan instagram antilink Di group ini')
var groupe = await Gans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Gans.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Kamu bukan admin, jangan kirim tautan instagram di grup ini atau Kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return replay('sudah dinonaktifkan')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
replay('Berhasil mematikan instagram antilink Di group ini')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Gans.sendButtonText(m.chat, buttonsntilink, `Klik tombol di bawah\n\nAktif untuk mengaktifkan\nNonaktif untuk menonaktifkan`, `${global.botname}`, m)
  }
  }
  break
        case 'antilinkfacebook': case 'antilinkfb': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return replay('Telah diaktifkan')
ntilinkfb.push(from)
replay('Sukses menyalakan facebook antilink Di group ini')
var groupe = await Gans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Gans.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return replay('sudah dinonaktifkan')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
replay('Berhasil mematikan facebook antilink Di group ini')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Gans.sendButtonText(m.chat, buttonsntilink, `Klik tombol di bawah\n\nAktif untuk mengaktifkan\nNonaktif untuk menonaktifkan`, `${global.botname}`, m)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return replay('Telah diaktifkan')
ntilinktg.push(from)
replay('Sukses menyalakan telegram antilink Di group ini')
var groupe = await Gans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Gans.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Kamu bukan admin, jangan kirim tautan telegram di grup ini atau Kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return replay('sudah dinonaktifkan')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
replay('Berhasil mematikan telegram antilink Di group ini')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Gans.sendButtonText(m.chat, buttonsntilink, `Klik tombol di bawah\n\nAktif untuk mengaktifkan\nNonaktif untuk menonaktifkan`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return replay('Telah diaktifkan')
ntilinktt.push(from)
replay('Sukses menyalakan tiktok antilink Di group ini')
var groupe = await Gans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Gans.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Kamu bukan admin, jangan kirim tautan tiktok di grup ini atau Kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return replay('sudah dinonaktifkan')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
replay('Berhasil mematikan tiktok antilink Di group ini')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Gans.sendButtonText(m.chat, buttonsntilink, `Klik tombol di bawah\n\nAktif untuk mengaktifkan\nNonaktif untuk menonaktifkan`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replay('Telah diaktifkan')
ntilinktwt.push(from)
replay('Sukses menyalakan twitter antilink Di group ini')
var groupe = await Gans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Gans.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Kamu bukan admin, jangan kirim tautan twitter di grup ini atau Kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return replay('sudah dinonaktifkan')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
replay('Berhasil mematikan twitter antilink Di group ini')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Gans.sendButtonText(m.chat, buttonsntilink, `Klik tombol di bawah\n\nAktif untuk mengaktifkan\nNonaktif untuk menonaktifkan`, `${global.botname}`, m)
  }
  }
  break
              case 'antilinkall': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replay('Telah diaktifkan')
ntilinkall.push(from)
replay('Sukses menyalakan all antilink Di group ini')
var groupe = await Gans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Gans.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Kamu bukan admin, jangan kirim tautan apa pun di grup ini atau Kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return replay('sudah dinonaktifkan')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
replay('Berhasil mematikan all antilink Di group ini')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Gans.sendButtonText(m.chat, buttonsntilink, `Klik tombol di bawah\n\nAktif untuk mengaktifkan\nNonaktif untuk menonaktifkan`, `${global.botname}`, m)
  }
  }
  break
case 'antivirus': case 'antivirtex': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return replay('Telah diaktifkan')
ntvirtex.push(from)
replay('Sukses menyalakan antivirus Di group ini')
var groupe = await Gans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Gans.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada member yang diizinkan mengirim virus di grup ini, member yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replay('sudah dinonaktifkan')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
replay('Berhasil mematikan antivirus Group ini')
} else {
  let buttonsntvirtex = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Gans.sendButtonText(m.chat, buttonsntvirtex, `Klik tombol di bawah\n\nAktif untuk mengaktifkan\nNonaktif untuk menonaktifkan`, `${global.botname}`, m)
  }
  }
  break
    case 'autoreply': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (Autoreply) return replay('Telah diaktifkan')
autorep.push(from)
replay('Berhasil mengaktifkan autoreply di grup ini')
} else if (args[0] === "off") {
if (!Autoreply) return replay('Sudah dinonaktifkan')
let off = autorep.indexOf(from)
autorep.splice(off, 1)
replay('Berhasil mematikan autoreply di grup ini')
} else {
  let buttonswlcm = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Gans.sendButtonText(m.chat, buttonswlcm, `Klik tombol di bawah\n\nAktif untuk mengaktifkan\nNonaktif untuk menonaktifkan`, `${global.botname}`, m)
  }
  }
  break
case 'antitoxic': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiToxic) return replay('Telah diaktifkan')
nttoxic.push(from)
replay('Berhasil mengaktifkan antitoksik di grup ini')
var groupe = await Gans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Gans.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada yang diperbolehkan menggunakan kata-kata buruk di grup ini, siapa yang menggunakan akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return replay('sudah dinonaktifkan')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
replay('Berhasil mematikan antitoksik di grup ini')
} else {
  let buttonsnttoxic = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Gans.sendButtonText(m.chat, buttonsnttoxic, `Silakan klik tombol di bawah\n\nAktif untuk mengaktifkan\nNonaktif untuk menonaktifkan`, `${global.botname}`, m)
  }
  }
  break
case 'antiwame': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiWame) return replay('Telah diaktifkan')
ntwame.push(from)
replay('Sukses menyalakan antiwame di grup ini')
var groupe = await Gans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Gans.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada yang diperbolehkan mengirim wa.me di grup ini, yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return replay('Sudah dinonaktifkan')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
replay('Sukses mematikan antiwame di grup ini')
} else {
  let buttonsntwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Gans.sendButtonText(m.chat, buttonsntwame, `Klik tombol di bawah\n\nAktif untuk mengaktifkan\nNonaktif untuk menonaktifkan`, `${global.botname}`, m)
  }
  }
  break
  case 'nsfw': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return replay('Telah diaktifkan')
ntnsfw.push(from)
replay('Berhasil mengaktifkan nsfw di grup ini')
var groupe = await Gans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Gans.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nFitur Nsfw (tidak aman untuk bekerja) telah diaktifkan di grup ini, yang berarti seseorang dapat mengakses grafik seksual dari bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replay('Sudah dinonaktifkan')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
replay('Berhasil mematikan nsfw di grup ini')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Gans.sendButtonText(m.chat, buttonsntnsfw, `Klik tombol di bawah\n\nAktif untuk mengaktifkan\nNonaktif untuk menonaktifkan`, `${global.botname}`, m)
  }
  }
  break
             case 'mute': {
             	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Sebelumnya Aktif`)
                db.data.chats[m.chat].mute = true
                reply(`${Gans.user.name} Telah Dibisukan Di Grup Ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Sebelumnya Tidak Aktif`)
                db.data.chats[m.chat].mute = false
                reply(`${Gans.user.name} Telah Disuarakan Di Grup Ini!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await Gans.sendButtonText(m.chat, buttons, `Mute Bot`, Gans.user.name, m)
                }
             }
             break
case 'setppbot': case 'setbotpp': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!quoted) return replay(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return replay(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
let media = await Gans.downloadAndSaveMediaMessage(quoted)
await Gans.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
replay(mess.success)
}
break
case 'test': case 'tes':
const lala = `Hallo ${pushname} ${ucapanWaktu}\nBOT Udah Aktif Selama ${runtime(process.uptime())}\nSilahkan Ketik Button Dibawah Untuk Menampilkan Menu BOT`
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
Gans.sendMessage(from, { react: { text: `${global.reactmoji}`, key: m.key }})
	                let kont = [{
                                urlButton: {
                                    displayText: 'Contact Owner',
                                    url: `https://wa.me/6289509960601`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'MENU',
                                    id: 'menu'
                                }
                            }]
                        Gans.send5ButImg(m.chat, lala, global.botname, global.tes, kont, global.tes)
                        break
break
case 'runtime':
const rurun = `╭───➣❲ *Runtime* ❳✯  \n├◩Tanggal : ${jangwak}\n├◩Hari : ${janghar}\n├◩Jam : ${moment().utcOffset('+0700').format('HH:mm')}\n├◩Runtime : ${runtime(process.uptime())}\n╰──────────────◩`
let gila = `Runtime : ${runtime(process.uptime())}/`
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let buttonmenu = [
        	{ urlButton: { displayText: `YouTube`, url : `${websitex}` } },
            { urlButton: { displayText: `INSTAGRAM`, url: `${iggw}` } },
            { quickReplyButton: { displayText: `MENU`, id: 'menu'} }
        	]
        	Gans.sendMessage(m.chat, { caption: rurun, document: fs.readFileSync('./media/gambar/awokwok.xlsx'), mimetype: `${docs}`, fileName: `${gila}`, templateButtons: buttonmenu, footer: `${botname}`, mentionedJid: [m.sender] })
break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                let response = await Gans.groupInviteCode(m.chat)
                Gans.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!text) return replay(`Masukkan Aktifkan/nonaktifkan Nilai`)
                if (args[0] === 'enable') {
                    await Gans.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await Gans.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
case 'grupsetting':
            case 'groupsetting':{
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                    let sections = []
                    let com = [`group open`,`autosticker on`,`welcome on`,`antilinkgc on`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`,`antitoxic on`,`antivirus on`,`autoreply on`,`group open`]
                    let comm = [`group close`,`autosticker off`,`welcome off`,`antilinkgc off`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`,`antitoxic on`,`antivirus on`,`autoreply on`,`group close`]
                    let listnya = [`Group open/close`,`Auto-Sticker on/off`,`Welcome/Left on/off`,`Antilink Group on/off`,`Antilink Telegram on/off`,`Antilink Tiktok on/off`,`Antilink Youtube Channel on/off`,`Antilink Youtube Video on/off`,`Antilink Instagram on/off`,`Antilink Facebook on/off`,`Antilink Twitter on/off`,`Antilink All on/off`,`Anti Wame on/off`,`Anti Toxic on/off`,`Anti Virus on/off`,`Auto Reply on/off`,`Group open/close`]
                    let suruh = [`Enable`, `Disable`]
                    let fiturname = [`Group`,`Auto Sticker`,`Welcome`,`Antilink Group`,`Antilink Telegram`,`Antilink Tiktok`,`Antilink Youtube Channel`,`Antilink Youtube Video`,`Antilink Instagram`,`Antilink Facebook`,`Antilink Twitter`,`Antilink All`,`Anti Wame`,`Anti Toxic`,`Anti Virus`,`Auto Reply`,`Group`]
                    let startnum = 0; let startnu = 0; let startn = 0;let start = 0
                    let startnumm = 1
                    for (let x of com) {
                        const yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `Activate ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `Deactivate ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        sections.push(yy)
                    }
                    const sendm =  Gans.sendMessage(
      from, 
      {
       text: "Group Settings",
       footer: botname,
       title: "Set your group settings here......",
       buttonText: "Click Button",
       sections
      }, { quoted : m }
    )  
}
  break

            case 'delete': case 'del': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.quoted) reply(false)
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
                Gans.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
      case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await Gans.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: '${global.websitex}'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 895-0996-0601'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 *${global.botname} Broadcast* 」\n\n${text}`
                      Gans.send5ButImg(i, txt, Gans.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: '${global.websitex}'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 895-0996-0601'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 *${global.botname} Broadcast* 」\n\n${text}`
                      Gans.send5ButImg(yoi, txt, Gans.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
 case 'bcimage': case 'bcvideo': case 'bcaudio': {
                  if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
                if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) return reply(`*Kirim/Balas Video/Audio/Gambar yang Ingin Disiarkan Dengan Caption* ${prefix + command}`)
                let anu = await store.chats.all().map(v => v.id)
                let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 999999999,status: 200, thumbnail: fs.readFileSync('./media/gambar/awokwok.jpg'), surface: 200, message: `${ownername}'s Broadcast`, orderTitle: `${botname}`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                reply(`*Kirim Siaran Ke* ${anu.length} *Obrolan Grup, Waktu ${anu.length * 1.5} secs*`)
                for (let i of anu) {
                    await sleep(1500)
                    let butoon = [{
                                urlButton: {
                                displayText: 'YouTube',
                                    url: '${global.websitex}'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 895-0996-0601'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
}
}]
                    let media = await Gans.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    if (/webp/.test(mime)) {
                    Gans.sendMessage(i, { sticker: { url: media } }, { quoted: ftroli })
                    } else if (/image/.test(mime)) {
                    let DGXeon = `*「 ${global.ownername}'s Broadcast」*${text ? '\n\n' + text : ''}`
                    Gans.send5ButImg(i, DGXeon, `${global.botname}`, buffer, butoon)
                    } else if (/video/.test(mime)) {
                    let DGXeon = `*「 ${global.ownername}'s Broadcast」*${text ? '\n\n' + text : ''}`
                    Gans.sendMessage(i, {video: buffer, caption: `${DGXeon}`}, { quoted: ftroli })
                    } else if (/audio/.test(mime)) {
                    Gans.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : ftroli })
                    } else {
                    reply(`*Kirim/Balas Video/Audio/Gambar yang Ingin Disiarkan Dengan Caption* ${prefix + command}`)
                    }
                    await fs.unlinkSync(media)
                    }
                reply(` *Kirim Siaran To* ${anu.length} *Chats*`)
            }
            break
case 'bcloc': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
                if (!text) return reply(`Use ${prefix}bcloc text\n\nExample : ${prefix + command} perhatian semuanya`)
                let anu = await store.chats.all().map(v => v.id)
                let [melo, melo2] = text.split`|`
                reply(`*Send Broadcast To* ${anu.length} Chat\nTime ${anu.length * 1.5} sec`)
	     	for (let yoi of anu) {
	     	await sleep(1500)
		    var button = [{ buttonId: `${prefix}ho`, buttonText: { displayText: `${melo2}` }, type: 1 }]              
            Gans.sendMessage(yoi, { caption: `${melo}`, location: { jpegThumbnail: await getBuffer(picak+`${ownername}'s Broadcast`) }, buttons: button, footer: `${botname}`, mentions: [m.sender] })
		}		
            }
            break
case 'chatinfo': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) replay('Reply Message')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return replay('Pesan tidak dikirim oleh bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `${global.themeemoji} @${i.userJid.split('@')[0]}\n`
teks += ` ┗━${global.themeemoji} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.themeemoji} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
}
Gans.sendTextWithMentions(m.chat, teks, m)
}
break
case 'q': case 'quoted': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return replay('Reply Message!!')
let wokwol = await Gans.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return replay('The message you replied to does not contain a reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'listpc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = `     「 Daftar Obrolan Pribadi 」\n\nAda ${anu.length} pengguna menggunakan bot dalam obrolan pribadi`
for (let i of anu) {
 teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`
}
Gans.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listgc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     「 Group Chat 」\n\nAda ${anu.length} pengguna menggunakan bot dalam obrolan grup`
for (let i of anu) {
 let metadata = await Gans.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
Gans.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listonline': case 'listaktif': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
Gans.sendText(m.chat, '     「 Online List 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case 'patrick':
case 'patricksticker': {
	                	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Gans.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
       case 'attp2': {
		   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
           if (!text) return reply(`Example : ${prefix + command} text`)
           await Gans.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, {asSticker: true})

         }
         break
case 'attp': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
           if (!text) reply(`Use ${prefix}attp hello\n*Example : ${prefix + command} ${ownername}*` )
           await Gans.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/attp?teks=${text}`, 'Xeon', 'Op', m, {asSticker: true}).catch((err) => reply(mess.error))
         }
         break
case 'ttp': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
           if (!text) return reply(`*Example : ${prefix + command} hello*`)
           await Gans.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, 'A L Y A', 'B O T M D', m, {asSticker: true})
         
                     }
                     break
            case 'soundcloud': case 'scdl': {               
                if (!text) return reply(mess.linkm)
                if (!isUrl(args[0]) && !args[0].includes('soundcloud.com')) return reply(`*Bukan tautan soundcloud*`)
                xeonkey.SoundCloud(`${text}`).then(async (data) => {
                    let txt = `*SOUNDCLOUD DOWNLOADER*\n\n`
                    txt += `*${themeemoji}Title :* ${data.title}\n`
                    txt += `*${themeemoji}Quality :* ${data.medias[0].quality}\n`
                    txt += `*${themeemoji}Type :* ${data.medias[0].extension}\n`
                    txt += `*${themeemoji}Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*${themeemoji}Url Source :* ${data.url}\n\n`
                    txt += `*${botname}*`
                buf = await getBuffer(data.thumbnail)   
                Gans.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m }).catch((err) => reply(mess.error))    
                Gans.sendMessage(m.chat, { audio: { url: data.medias[0].url }, mimetype: 'audio/mpeg', fileName: data.title+'.m4a' }, { quoted: m })
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
case 'dogesticker':
case 'dogestick':
	case 'doge':{
	                	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Gans.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'lovesticker':
case 'lovestick' :{
	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Gans.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura':
case 'gurastick':{
	                	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Gans.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Gans.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await Gans.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'swm': case 'take': case 'stickerwm': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply(`Example :\nswm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
Gans.downloadAndSaveMediaMessage(quoted, "gifee")
Gans.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Gans.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await Gans.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim Image/Video Dengan Teks ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (text.includes('|')) return reply(`Kirim/Balas Foto Dengan Caption ${prefix + command} *text*`)
if (!/image/.test(mime)) return reply(`Kirim/Balas Foto Dengan Caption ${prefix + command} *text*`)
reply(mess.wait)
mee = await Gans.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await Gans.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
            case 'ebinary': {
            	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.quoted.text && !text) return replay(`Balas Teks Dengan Caption ${prefix + command}`)
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
case 'bts':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
teks = `Ini dia!`
buffer = `https://api.dapuhy.xyz/api/randomimage/batues?apikey=0gly81wDky`
Gans.sendMessage(from, {image:{url:buffer}, caption:"Done nih!"}, {quoted:m})
break
case 'wallneon': case 'wallrandom': case 'wallcode': case 'wallpubg': case 'wallml': 	
try{
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
nyz2 = await fetchJson(`https://myselfff.herokuapp.com/docs/wallpaper/${command}`) 
nyz3 = await getBuffer(nyz2.list.gambar)
Gans.sendMessage(from, {image : nyz3, caption:`By ${global.botname}`}, {quoted:m}) 						
} catch (e) {
error("Error!")
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'lizard':
case 'meow':
case 'tickle':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot': 
case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm': 
case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri': case 'tentacles':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
try{
reply(mess.wait)
NoHorny = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
YesHorny = await getBuffer(NoHorny.result)
Gans.sendMessage(from, {image:YesHorny},{quoted:m})
} catch (e) {error("Error")}	
break
   case 'spank':
      if (isBan) return reply(mess.ban)	 			
   if (isBanChat) return reply(mess.banChat)
   if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
spankd = await axios.get(`https://nekos.life/api/v2/img/spank`)                                   
  let spbuff = await getBuffer(spankd.data.url)
let spgif = await GIFBufferToVideoBuffer(spbuff)   
        await Gans.sendMessage(m.chat,{video: spgif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply('Error!')
                                    })
break
case 'blowjobgif': case 'bj' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
bjd = await axios.get(`https://api.waifu.pics/nsfw/blowjob`)         
  let bjf = await getBuffer(bjd.data.url)
let bjif = await GIFBufferToVideoBuffer(bjf)   
        await Gans.sendMessage(m.chat,{video: bjif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply('error..')
                                    })
break
case 'hentaivid': case 'hentaivideo': {
	                        	            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
                reply(mess.wait)
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                Gans.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `trap`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `Done nih!`,
  buttons: trapbot,
  headerType: 1
  }     
            await Gans.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-neko' :
case 'hneko' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Done nih!`,
  buttons: hnekobot,
  headerType: 1
  }      
            await Gans.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-waifu' :
case 'nwaifu' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `Done nih!`,
  buttons: nwaifubot,
  headerType: 1
  }      
            await Gans.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'gasm':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'smug2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button1ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, button1ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'foxgirl':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button12ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, button12ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'animenom' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
    waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
 let xxhnekobot = [
    {buttonId: `.nom`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let xx1button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Done nih!`,
  buttons: xxhnekobot,
  headerType: 1
  }      
            await Gans.sendMessage(m.chat, xx1button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'waifu3':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button112ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, button112ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'neko2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
                var wbutsss = [
        {buttonId: `.neko`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbutsss,
      headerType: 4
      }
            await Gans.sendMessage(m.chat,buttonssMessage, { quoted:m }).catch(err => {
                    return('Error!')
                })               
                break
case 'animecuddle':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsosMessages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonsosMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'animeslap':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let btutttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, btutttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animepat':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let xxbuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, xxbuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeneko':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/neko`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsTsMessages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonsTsMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehug':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonussMessages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonussMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animekiss':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let bxxuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, bxxuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewlp':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttoxnssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttoxnssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animespank':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animecry':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cry`)
                           var wbutt1sss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button1ssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbutt1sss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, button1ssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animekill':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/kill`)
                           var wbuttszzss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszzss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animelick':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz12ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx12Messages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszz12ss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsx12Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebite':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bite`)
                           var wbuttszz123ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx123Messages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszz123ss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsx123Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeyeet':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/yeet`)
                           var wbuttszz124ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx124Messages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszz124ss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsx124Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebully':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz125ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx125Messages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszz125ss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsx125Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebonk':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bonk`)
                           var wbuttszz126ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx126Messages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszz126ss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsx126Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewink':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wink`)
                           var wbuttszz127ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx127Messages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszz127ss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsx127Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animepoke':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/poke`)
                           var wbuttszz128ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx128Messages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszz128ss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsx128Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animesmile':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smile`)
                           var wbuttszz129ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx129Messages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszz129ss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsx129Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewave':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wave`)
                           var wbuttszz1210ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1210Messages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1210ss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsx1210Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeawoo':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/awoo`)
                           var wbuttszz1211ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1211Messages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1211ss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsx1211Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeblush':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/blush`)
                           var wbuttszz1212ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1212Messages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1212ss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsx1212Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animesmug':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smug`)
                           var wbuttszz1213ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1213Messages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1213ss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsx1213Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeglomp':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/glomp`)
                           var wbuttszz1214ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1214Messages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1214ss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsx1214Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehappy':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/happy`)
                           var wbuttszz1215ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1215Messages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1215ss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsx1215Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animedance':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/dance`)
                           var wbuttszz1216ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1216Messages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1216ss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsx1216Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animecringe':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cringe`)
                           var wbuttszz1217ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1217Messages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1217ss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsx1217Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehighfive':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/highfive`)
                           var wbuttszz1218ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1218Messages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1218ss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsx1218Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehandhold':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/handhold`)
                           var wbuttszz1219ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1219Messages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1219ss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsx1219Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animemegumin':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/megumin`)
                           var wbuttszz1220ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1220Messages = {
       image: {url:waifudd.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1220ss,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, buttonszzsx1220Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'shinobu2':  
 if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/shinobu')
var wbutsss = [
    {buttonId: `.shinobu`, buttonText: {displayText: `Next ✨`}, type: 1},
         ]
      let buttonsesMessage = {
      image: {url:ud.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await Gans.sendMessage(m.chat,buttonsesMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break
case 'megumin2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/megumin')
var wbutsss = [
    {buttonId: `.megumin`, buttonText: {displayText: `Next ✨`}, type: 1},
         ]
      let buttonzMessage = {
      image: {url:ud.data.url},
       caption:  `Done nih!`,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await Gans.sendMessage(m.chat,buttonzMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break     
case 'awoo2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
 var wbuttsss = [
    {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
    ]
  let button1Messages = {
   image: {url:waifudd.data.url},
   caption:  `Done nih!`,
   footer: `${global.botname}`,
  buttons: wbuttsss,
  headerType: 2
  }       
            await Gans.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewall2': case 'animewallpaper2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return reply('What wallpaper do you want?')
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var walb = [
        {buttonId: `.${command} ${q}`, buttonText: {displayText: `Next ✨`}, type: 1},        
        ]
      let wal = {
       image: {url:wallpaper[i].image},
       caption: `*Query :* ${q}`,
      footer: `${global.botname}`,
      buttons: walb,
      headerType: 4
      }     
            await Gans.sendMessage(m.chat, wal,{ quoted:m }).catch(err => {
                    return('Error!')
                })
//Gans.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet': case 'neko': case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': case 'shinobu': case 'megumin': case 'handhold':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						Gans.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
case 'waifu': case 'loli':
					   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					Gans.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case 'mikey':
			if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				reply(mess.wait)
			    var query = ["mikey hd","mikey draken","mikey sanzu", "mikey aesthetic", "mikey dark"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `mikey`, buttonText: { displayText: "Next➡️" }, type: 1 }]
				Gans.sendMessage(from, { caption: `Done nih!`, image: { url: pickRandom(data.result) }, buttons: but, footer: `${botname}` }, { quoted: m })
 			    break
case 'naruto':
			if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				reply(mess.wait)
			    var query = ["naruto hd","naruto uzumaki","uzumaki naruto", "naruto aesthetic", "naruto hokage"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `naruto`, buttonText: { displayText: "Next➡️" }, type: 1 }]
				Gans.sendMessage(from, { caption: `Done nih!`, image: { url: pickRandom(data.result) }, buttons: but, footer: `${botname}` }, { quoted: m })
 			    break
case 'boruto':
			if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				reply(mess.wait)
			    var query = ["boruto hd","uzumaki boruto","boruto uzumaki", "boruto aesthetic", "boruto"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `boruto`, buttonText: { displayText: "Next➡️" }, type: 1 }]
				Gans.sendMessage(from, { caption: `Done nih!`, image: { url: pickRandom(data.result) }, buttons: but, footer: `${botname}` }, { quoted: m })
 			    break
case 'yaoi':
			if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				reply(mess.wait)
			    var query = ["yaoi","yaoi aesthetic","yaoi hd","yaoi ganteng"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `${command}`, buttonText: { displayText: "Next➡️" }, type: 1 }]
				Gans.sendMessage(from, { caption: "Done nih!", image: { url: pickRandom(data.result) }, buttons: but, footer: `${botname}` }, { quoted: m })
 			    break
case 'coffee': case 'kopi': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            let buttons = [
                    {buttonId: `coffeanime`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `Done nih!`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                Gans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'zippyshare': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('zippyshare.com')) return reply(`The link is not a zippyshare link`)
anu = await fetchJson(`https://violetics.pw/api/downloader/zippyshare?apikey=df7d-425a-3bc8&url=${text}`)
m.reply(`*${util.format(anu)}*`)
linkyke = await getBuffer(anu.result.dlink)
Gans.sendMessage(m.chat, {document: linkyke, mimetype: 'application/zip', fileName: `${anu.result.filename}`}, {quoted:m}).catch ((err) => reply(mess.error))     
}
break
case 'savefrom': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  if (!text) return m.reply(`Failed to download media and send audio ${prefix + command} url link`) 
  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is invalid`)
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data.url) {
  const list = {title: `${i.type}`,
  rows: [
	    {
	     title: `Quality ${i.subname}`, 
	     rowId: `${prefix}get ${text}`,
      description: `${data.hosting}`	     
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  Gans.sendMessage(
      m.chat, 
      {
       text: `${data.meta.title} *Here is the list of videos, click the button below to choose*`,
       footer: `${botname}`,
       title: "*SAVE FROM*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
case 'jail': case 'pixelate': case 'blur': case 'imagesketch': case 'triggeredwebp': case 'shit': case 'burn': case 'invert': case 'wanted': case 'rip': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await Gans.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/${command}?url=${anu}`)
                Gans.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'gayeffect': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await Gans.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/gay?url=${anu}`)
                Gans.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'deleteeffect': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await Gans.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/delete?url=${anu}`)
                Gans.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'framed': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await Gans.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/fotojatoh?url=${anu}`)
                Gans.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'beautifuleffect': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await Gans.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/beautiful?url=${anu}`)
                Gans.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
            case 'readmore': {
            if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} halo gaes`)
                anu = await fetchJson(`https://cililitan.herokuapp.com/api/readmore?teks=${text}`)
               reply(`${anu.result}`)
            }
            break
case 'toviewonce': case 'toonce': { 
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
        if (!quoted) return reply(`Reply image`)
        if (/image/.test(mime)) {
anu = await Gans.downloadAndSaveMediaMessage(quoted)
Gans.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: m })
        } else if (/video/.test(mime)) {
        anu = await Gans.downloadAndSaveMediaMessage(quoted)
        Gans.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
        }
        }
        break
        case 'tinyurl': {
        	 if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            reply(mess.wait)
            try {
              anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
              reply(`${anu.data} Done nih!`)
              } catch (e) {
              emror = String(e)
              reply(`${e}`)
            }
        }
        break
case 'fliptext': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return replay(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replay(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
case 'toletter': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!Number(args[0])) return replay(`Example:\n${prefix}toletter 956`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
replay(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
replay(`Error!`)
}
}
break
case 'translate': case 'trans': {
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return replay("Teks?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
replay(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
xeony_buffer = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await Gans.sendMessage(m.chat, { audio: xeony_buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case'glitch3':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dbox':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break


case 'waterdrop':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
    .catch((err) => console.log(err));
     break


case 'lion2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  if(!q) return reply(`Use ${prefix + command} text`)
  reply(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
     .catch((err) => console.log(err));
     break


case 'papercut':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break


case 'transformer':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break
   

case 'harrypot':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
       if(!q) return reply(`Use ${prefix + command} text|text`)
       reply(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
 .catch((err) => console.log(err));
 break


case 'neondevil':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break


case '3dstone':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case '3davengers':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case 'thunder':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   

case 'window':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   case 'blackpinkneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'graffiti':
   case 'grafiti':
      if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'pornhub2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'blackpink2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'glitch2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'glitch3':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case '3dspace':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'lion':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case '3dneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'neon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'greenneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   
  
case 'bokeh':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   

case 'holographic':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'bear':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'wolf':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break




case 'joker':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case 'dropwater2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   case 'summertime':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neonlight2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thewall':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'natural':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 

case 'carbon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pencil':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => Gans.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
 
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
             if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`) 
                if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
             reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anu = await maker.textpro(link, q)
                Gans.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}` }, { quoted: m })
             }
             break

case 'textmaker': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return reply(`Example :\n${prefix + command} <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
Gans.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
Gans.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
reply(`*Text Maker List :*\n•> glitch\n•> glow`)
}
}
break
//logo maker
case 'hoorror':{
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
  case 'whitebear':{
  	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'thunder2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-thunder-text-effect-online-881.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'blackpink':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'neon':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/neon-light-text-effect-online-882.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'matrix2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/matrix-style-text-effect-online-884.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'sky':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break

case 'magma':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'sand':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'pencil':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'graffiti':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'metallic':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-metallic-text-effect-free-online-1041.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'steel':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/steel-text-effect-online-921.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'harrypotter':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-harry-potter-text-effect-online-1025.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'underwater':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'luxury':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'glue2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'fabric':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/fabric-text-effect-online-964.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'neonlight':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/neon-light-glitch-text-generator-online-1063.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'lava':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/lava-text-effect-online-914.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'toxic':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/toxic-text-effect-online-901.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'ancient':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'christmas2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/sparkles-merry-christmas-text-effect-1054.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'sci_fi':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'rainbow':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'classic':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/video-game-classic-8-bit-text-effect-1037.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'watercolor2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'halloween2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'halloweenfire':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/halloween-fire-text-effect-940.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'writing':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'foggy':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/write-text-on-foggy-window-online-free-1015.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'marvel':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'skeleton2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'sketch':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'wonderful':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'cool':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'collwall':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'multicolor2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'batman':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'juice':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/fruit-juice-text-effect-861.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    Gans.sendMessage(from, {image:{url:anui}, caption:"Done nih!"}, {quoted:m})
}
   break
case 'pornhub':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anu)
Gans.sendMessage(from,{image:{url:anu}, caption:"Done nih!"},{quoted:m})
}
break
case 'retro':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anu)
Gans.sendMessage(from,{image:{url:anu}, caption:"Done nih!"},{quoted:m})
}
break
case 'horror':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anu)
Gans.sendMessage(from,{image:{url:anu}, caption:"Done nih!"},{quoted:m})
}
break
case '8bit':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anu)
Gans.sendMessage(from,{image:{url:anu}, caption:"Done nih!"},{quoted:m})
}
break
case 'emoji': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await Gans.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await Gans.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break

case 'igemoji': 
case 'instagramemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Minimal kasih 1 emot Contoh :" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, ".s1")
break
case 'iphoneemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Minimal kasih 1 emot Contoh : " + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, ".s")
break
case 'googleemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Minimal kasih 1 emot Contoh : " + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, ".s")
break
case 'samsungemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Minimal kasih 1 emot Contoh : " + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, ".s")
break
case 'microsoftemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Minimal kasih 1 emot Contoh : " + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, ".s")
break
case 'whatsappemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Minimal kasih 1 emot Contoh : " + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, ".s")
break
case 'twitteremoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Minimal kasih 1 emot Contoh : " + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, ".s")
break
case 'facebookemoji': 
case 'fbemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Minimal kasih 1 emot Contoh : " + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, ".s")
break
case 'skypeemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Minimal kasih 1 emot Contoh : " + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, ".s")
break
case 'joyemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Minimal kasih 1 emot Contoh : " + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, ".s")
break
case 'mojiemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Minimal kasih 1 emot Contoh : " + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, ".s")
case 'pediaemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Minimal kasih 1 emot Contoh : " + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, ".s")
break

case 'emojimix': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) reply(`*Example :* ${prefix + command} 🦄+🤣`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await Gans.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
	case 'toimage': case 'toimg': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
let media = await Gans.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Gans.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await Gans.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await Gans.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
Gans.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tomp3': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
Gans.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${Gans.user.name} (${m.id}).mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
if (!m.quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
Gans.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await Gans.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await Gans.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Gif' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
	case 'tourl': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await Gans.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
            case 'imagenobgxxx': case 'removebgxxx': case 'remove-bgxxx': {
	    if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await Gans.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    Gans.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	case 'yts': case 'ytsearch': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : ${prefix + command} stay jb`)
let yts = require("yt-search")
let search = await yts(args.join(" "))
let teks = '*| YOUTUBE SEARCH |*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `${global.themeemoji} No : ${no++}\n${global.themeemoji} Type : ${i.type}\n${global.themeemoji} Video ID : ${i.videoId}\n${global.themeemoji} Title : ${i.title}\n${global.themeemoji} Views : ${i.views}\n${global.themeemoji} Duration : ${i.timestamp}\n${global.themeemoji} Uploaded : ${i.ago}\n${global.themeemoji} Author : ${i.author.name}\n${global.themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
}
Gans.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
case 'google': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `${global.themeemoji} *Title* : ${g.title}\n`
teks += `${global.themeemoji} *Description* : ${g.snippet}\n`
teks += `${global.themeemoji} *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
case 'gimage': case 'googleimage': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply("What picture are you looking for??")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image 👀'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*| GOOGLE IMAGE |*

${global.themeemoji} Query : ${text}
${global.themeemoji} Media Url : ${images}`,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.ownername}`,
body:`${global.watermark}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `{global.websitex}`
}}
}
Gans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
	case 'igstoryxx': case 'instagramstoryxx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Example :\n${prefix + command} josephxeon13`)
try {
hx.igstory(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM STORY |*\n\n${global.themeemoji} Username : ${resed.user.username ? resed.user.name : "undefined"}\n${global.themeemoji} Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Select the media below to download_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
Gans.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
reply(String(err))
}
}
break
case 'igs2': case 'igstory2': case 'instagramstory2': {
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Where is the username?\nExample: ${prefix}igstory josephxeon13`)
                let urlnya = text
	            hx.igstory(urlnya)
	            .then(async(result) => {
		        var halo = 0		
	            Gans.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM STORY 」----*\n\n*${themeemoji} Username :* ${result.user.username}\n*${themeemoji} Fullname :* ${result.user.fullName}\n*${themeemoji} Followers :* ${result.user.followers}\n*${themeemoji} Following :* ${result.user.following}\n*${themeemoji} ID :* ${result.user.id}\n*${themeemoji} Filetype :* ${result.medias[0].fileType}\n*${themeemoji} Type :* ${result.medias[0].type}\n*${themeemoji} Media :* ${result.medias.length}\n*${themeemoji} Bio :* ${result.user.biography}\n\n*${botname}*` }, { quoted: m })	                                  	                      	            
		        for(let i of result.medias) {
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                Gans.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m }) 
                } else {
                    let link = await getBuffer(i.url)
                  Gans.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })                  
                }
            }
            }).catch((err) => reply(`Sorry username ${text} was not found or maybe he/she has no story uploaded in her id`))
            }	
			break
case 'ig2': case 'igdl2': case 'instagram2': {
               if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Where is the link bro`)
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(`The link you provided is not a instagram link`)             
                let urlnya = text
	            hx.igdl(urlnya)
	            .then(async(result) => {	  
	            var halo = 0		
	            Gans.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM DOWNLOADER 」----*\n\n*${themeemoji} Username :* ${result.user.username}\n*${themeemoji} Fullname :* ${result.user.fullName}\n*${themeemoji} Followers :* ${result.user.followers}\n*${themeemoji} Following :* ${result.user.following}\n*${themeemoji} ID :* ${result.user.id}\n*${themeemoji} Filetype :* ${result.medias[0].fileType}\n*${themeemoji} Type :* ${result.medias[0].type}\n*${themeemoji} Jumlah Media :* ${result.medias.length}\n*${themeemoji} Url :* ${text}\n\n*${botname}*` }, { quoted: m })	                                  	                      	            
		        for(let i of result.medias) {		
		        if(i.url.includes('mp4')){		           			    				
				let link = await getBuffer(i.url)
                Gans.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })
                } else {
                let link = await getBuffer(i.url)
                Gans.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })                      
               }
              }
            }).catch((err) => reply(mess.error))
            }		
			break
case 'igdl': case 'instagram': case 'instagramreels': case 'igreels': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n${global.themeemoji} Username : ${resed.user.username ? resed.user.name : "undefined"}\n${global.themeemoji} Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Select the media below to download_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
Gans.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
reply(String(err))
}
}
break
case 'ig': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args[0] === "mp4") {
Gans.sendMessage(from, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
Gans.sendMessage(from, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
} else {
reply("Error! ")
}
}
break
case 'mp4' : {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Where's the link ?`)
try {
Gans.sendMessage(from, {video:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.ownername}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
} catch {
reply("Link error!")
}
}
break
case 'jpeg': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Where's the link?`)
try {
Gans.sendMessage(from, {image:{url:args[0]}, caption:"Success", contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.ownername}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
} catch {
reply("Link error")
}
}
break
case 'igtv': {	            
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Where is the link boss?`)
                const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('*The link you provided is not valid*')
                instagramdlv3(`${text}`).then(async (data) => {            
                var buf = await getBuffer(data[0].thumbnail)        
                Gans.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m })
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
            case 'twitter': case 'td': case 'twitterdl': {     
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)	             
             if (!text) return reply(`Where is the link?`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`The link you provided is not valid`)
                xeonkey.Twitter(`${text}`).then(async (data) => {                    
                    let txt = `*TWITTER DOWNLOADER*\n\n`
                    txt += `*${themeemoji}TITLE :* ${data.title}\n`
                    txt += `*${themeemoji}QUALITY :* ${data.medias[1].quality}\n`
                    txt += `*${themeemoji}TYPE :* ${data.medias[1].extension}\n`
                    txt += `*${themeemoji}SIZE :* ${data.medias[1].formattedSize}\n`
                    txt += `*${themeemoji}DURATION :* ${data.medias.length}\n`
                    txt += `*${themeemoji}URL :* ${data.url}\n\n`
                    txt += `*${botname}*`
                buf = await getBuffer(data.thumbnail)    
                Gans.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })
                for (let i of data.medias) {
                Gans.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*${text}*`}, { quoted: m })
                }
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
            case 'twittermp3': case 'twitteraudio': { 
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)	             
             if (!text) return reply(`Where is the link?`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*The link you provided is not valid*`)
                xeonkey.Twitter(`${text}`).then(async (data) => {
                Gans.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4'}, { quoted: m })
                }).catch((err) => {
                    reply(mess.reply)
                })
            }
            break
case 'twitterxx': case 'twdlxx': case 'twmp4xx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Example :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
try {
let lotwit = await aiovideodl(args[0])
teks = `*| TWITTER DOWNLOADER |*

Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}

_Choose the video quality below by clicking the button_`
let buttons = [
{buttonId: `twddl ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `twddl ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:lotwit.title ? lotwit.title : "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
Gans.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Error link!")
}
}
break
case 'twddlxx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu 🐥'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body: "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
Gans.sendMessage(from, buttonMessage, {quoted:m})
}
break
case 'fbdl': case 'fb': case 'facebook': case 'fbmp4': {     	    
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
             if (!text) return reply(`Where is the link bro?\nExample: ${prefix}facebook https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is not valid`)
            let bocil = require('@bochilteam/scraper')  
                bocil.facebookdlv2(`${text}`).then(async (data) => {                   
                    let txt = `*FB DOWNLOADER*\n\n`
                    txt += `*${themeemoji}TITLE :* ${data.title}\n`
                    txt += `*${themeemoji}QUALITY :* ${data.result[0].quality}\n`
                    txt += `*${themeemoji}DESCRIPTION :* ${data.description}\n`
                    txt += `*${themeemoji}ID :* ${watermark}\n`
                    txt += `*${themeemoji}URL :* ${text}\n\n`
                buf = await getBuffer(data.thumbnail)    
                Gans.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         
                for (let i of data.result) {     
                Gans.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*${themeemoji} Quality :* ${i.quality}`}, { quoted: m })
                }          
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
            case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                  if (!text) return reply(`Where is the link?\nExample: ${prefix + command} https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is not valid`)
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (anu) => {  
  Gans.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })      
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
case 'facebookxx': case 'fbdlxxx': case 'fbmp4xxx': case 'fbxxx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
try {
let resd = await aiovideodl(args[0])
teks = `*| FACEBOOK DOWNLOADER |*

Type : video/${resd.medias[0].extension}
Quality : ${resd.medias[0].quality}
Size : ${resd.medias[0].formattedSize}

_For HD quality you can click the button below_`
let buttons = [
{buttonId: `fbddl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:"Facebook Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
Gans.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Link invalid!")
}
}
break
case 'fbddlxx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu 🐥'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body: " Facebook Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
Gans.sendMessage(from, buttonMessage, {quoted:m})
}
break
            case 'pinterest2': {
            	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                Gans.sendMessage(m.chat, { image: { url: result }, caption: '${themeemoji} Media Url : '+result }, { quoted: m })
            }
            break
case 'webtonsearch': case 'webtoon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply('What Are you Looking For??')
                await reply(mess.wait)
                xeonkey.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await reply(txt)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'wattpad': {
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!text) return reply(`Example : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/wattpad?query=$text}&apikey=hdiiofficial`)
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From query\n\n`
            capt += ` Title: ${judul}\n`
            capt += ` Read: ${dibaca}\n`
            capt += ` Vote: ${divote}\n`
            capt += ` Chapter: ${bab}\n`
            capt += ` Url: ${url}\n`
            capt += ` Description: ${description}`
            Gans.sendImage(m.chat, thumb, capt, m)
            }
            break
case 'apk': case 'apkmod': case 'apkdl': {      
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
  if (!text) return reply(`Use${prefix + command} whatsapp`) 
  let noh = require('./lib/myfunc2')                
  noh.rexdl(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data) {
  const list = {title: `${i.judul}`,
  rows: [
	    {
	     title: `${i.judul}`, 
	     rowId: `${prefix}donlod ${i.link}`,
	     description: `Category: ${i.kategori}\nPublish: ${i.upload_date}\nInfo: ${i.deskripsi}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  Gans.sendMessage(
      m.chat, 
      {
       text: `${ucapannya2} ${pushname} *Search Results From ${text} Click the button below to choose*`,
       footer: `${botname}`,
       title: "*APK DOWNLOADER,*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    reply(`*${text} Not found*`)
                })
            }
            break
case 'donlod': {                
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Use${prefix + command} whatsapp`)
                if (!isUrl(args[0]) && !args[0].includes('rexdl.com')) reply('*The link you provided is invalid*')
           let rex = require('./lib/ApkDown.js')
           rex.ApkDown(`${text}`).then(async (anu) => {        
           if (anu[0].size.split('MB')[0] >= 150) return reply('*File Over Limit* '+util.format(anu))
           for (let i of anu) {    
           linkye = `*APK DOWNLOAD*\n\n*Title:* ${i.title}\n*Updated:* ${i.up}\n*Version:* ${i.vers}\n*Size:* ${i.size}\n*Url:* \n*Desc:* ${i.desc}`         
                Gans.sendMessage(m.chat, { image: await getBuffer(i.thumb), jpegThumbnail: await getBuffer(i.thumb), caption: `${linkye}` }, { quoted: m })
                Gans.sendMessage(m.chat, {document: await getBuffer(i.link), mimetype: `application/vnd.android.package-archive`, fileName: `${i.title}`}, {quoted:m})  
                }  
                }).catch((err) => {
                    reply(mess.error)
                }) 
                }                          
                break
case 'tagme': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
Gans.sendMessage(m.chat, {text:`@${m.sender.split("@")[0]}`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
break
           case 'git': case 'gitclone':
           if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	reply(mess.wait)
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!args[0]) reply(`Use ${prefix}gitclone repo link\nExample: https://github.com/DGXeon/CheemsBot-MD4`)
    if (!regex1.test(args[0])) return reply(mess.linkm)
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Gans.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
			break

case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
 	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
              if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`) 
          
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                Gans.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname},For my Darling ` }, { quoted: m })
             }
             break
            case 'drakorxxx':
               if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply('What Are You Looking For??')
                await reply(mess.wait)
                xeonkey.Drakor(`${text}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'drakor': {
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!text) return reply(`Example : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/drakor?query=${text}&apikey=hdiiofficial`)
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `${themeemoji} Title: ${i.judul}\n`
            capt += `${themeemoji} Years: ${i.years}\n`
            capt += `${themeemoji} Genre: ${i.genre}\n`
            capt += `${themeemoji} Url: ${i.url}\n`
            capt += `${themeemoji} Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            Gans.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'animexxx':{
            	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`What Anime Are You Looking For??`)
                await reply(mess.wait)
                xeonkey.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Watch🎥",
						"url": `${websitex}`
						}
					}
				]
				await Gans.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
                }
            break
            case 'characterxxx': case 'karakterxxx':
               if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`What Anime Character Are You Looking For??`)
                await reply(mess.wait)
                xeonkey.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "YouTube📍",
						"url": `${websitex}`
						}
					}
				]
				await Gans.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'manga2':
               if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`What Manga Are You Looking For??`)
                await reply(mess.wait)
                xeonkey.Manga(`${text}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "YouTube📍",
						"url": `${websitex}`
						}
					}
				]
				await Gans.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
                case 'anime':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	    if(!q) return reply(`Which anime do you want to search?\nExample ${prefix}manga naruto`)
reply(mess.wait)						
const { Anime } =require("@shineiichijo/marika")
    const client = new Anime();
     let anime = await client.searchAnime(q)
    let result = anime.data[0];
    console.log(result)
   let details = `🎀 *Title: ${result.title}*\n`;
    details += `🎋 *Format: ${result.type}*\n`;
    details += `📈 *Status: ${result.status.toUpperCase().replace(/\_/g, " ")}*\n`;
    details += `🍥 *Total episodes: ${result.episodes}*\n`;
    details += `🎈 *Duration: ${result.duration}*\n`;
    details += `🧧 *Genres:*\n`;
    for (let i = 0; i < result.genres.length; i++) {
      details += `\t\t\t\t\t\t\t\t*${result.genres[i].name}*\n`;
    }
    details += `✨ *Based on: ${result.source.toUpperCase()}*\n`;
    details += `📍 *Studios:*\n`;
    for (let i = 0; i < result.studios.length; i++) {
      details += `\t\t\t\t\t\t\t\t*${result.studios[i].name}*\n`;
    }
    details += `🎴 *Producers:*\n`;
    for (let i = 0; i < result.producers.length; i++) {
      details += `\t\t\t\t\t\t\t\t\t\t*${result.producers[i].name}*\n`;
    }
    details += `💫 *Premiered on: ${result.aired.from}*\n`;
    details += `?? *Ended on: ${result.aired.to}*\n`;
    details += `🎐 *Popularity: ${result.popularity}*\n`;
    details += `🎏 *Favorites: ${result.favorites}*\n`;
    details += `🎇 *Rating: ${result.rating}*\n`;
    details += `🏅 *Rank: ${result.rank}*\n\n`;
    if (result.trailer.url !== null)
      details += `♦ *Trailer: ${result.trailer.url}*\n\n`;
    details += `🌐 *URL: ${result.url}*\n\n`;
    if (result.background !== null)
      details += `🎆 *Background:* ${result.background}*\n\n`;
    details += `❄ *Description:* ${result.synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`
Gans.sendMessage(m.chat,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:m})   
break
case 'manga':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!q) return reply(`Manga mana yang ingin kamu cari?\nExample ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
    let mang = `🎀 *Title: ${srh.data[0].title}*\n`;
    mang += `📈 *Status: ${srh.data[0].status}*\n`;
    mang += `🌸 *Total Volumes: ${srh.data[0].volumes}*\n`;
    mang += `🎗 *Total Chapters: ${srh.data[0].chapters}*\n`;
    mang += `🧧 *Genres:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
      mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
    }
    mang += `✨ *Published on: ${srh.data[0].published.from}*\n`;
    mang += `🌟 *Score: ${srh.data[0].scored}*\n`;
    mang += `🎐 *Popularity: ${srh.data[0].popularity}*\n`;
    mang += `🎏 *Favorites: ${srh.data[0].favorites}*\n`;
    mang += `✍ *Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
      mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
    }
    mang += `\n🌐 *URL: ${srh.data[0].url}*\n\n`;
    if (srh.data[0].background !== null)
      mang += `🎆 *Background:* ${srh.data[0].background}`;
    mang += `❄️ *Description:* ${srh.data[0].synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`;
Gans.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
break
            break
case 'lyrics': {
		            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	    if (!text) return reply(`Use example ${prefix}lyrics Despacito`)
	reply(mess.wait)
	const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
    const result = await lyricsv2(text).catch(async _ => await lyrics(text))
    reply(`
${themeemoji} Title : *${result.title}*
${themeemoji} Author : ${result.author}
${themeemoji} Lyrics : ${result.lyrics}
${themeemoji} Url : ${result.link}
`.trim())
}
break
case 'earthquake':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Time : ${Waktu}\nLatitude : ${Lintang}\nLongitude : ${Bujur}\nRegion : ${Wilayah}`
Gans.sendMessage(from, { image : { url : Map }, caption : captt})
break
case 'covidindo':
case 'covid':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
Gans.sendMessage(from, {text : `Case : ${kasus}\n\nDead : ${kematian}\n\nHealed : ${sembuh}`}, m)
break
case 'tvschedule':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply('Send orders *#tvschedule [channel]*')
reply(await jadwaltv(q))
break
case 'playstore': case 'apk':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply('what are you looking for?')
let play = await hx.playstore(q)
let storee = '❉─────────────────────❉\n'
for (let i of play){
storee += `\n*「 *PLAY STORE* 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(storee)
break
case 'film':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	reply(mess.wait)
if (!q) return reply(`What film you wanna search?\nExample: ${prefix}film Spiderman`)
xeonkey.Film(q)
    .then(data => {console.log(data)
    let krl = `*❒「  Film ${q} 」*\n*🌿 Author* : ${data[0].author}\n\n`
			    for (let i of data) {
                krl += (`\n────────────────────\n\n *📍Title :* ${i.judul}\n *📟 Quality :* ${i.quality}\n *🖥️ Type : ${i.type}*\n *⌛ Uploaded :* ${i.upload}\n *🌍 Source :* ${i.link}`)
                }
               Gans.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdocs })
});
break
case 'img':
case 'image': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                reply(mess.wait)
		let { pinterest } = require('./lib/scraperW')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                Gans.sendMessage(m.chat, { image: { url: result }, caption: ` ${themeemoji} Media Url : `+result }, { quoted: m })
            }
            break
case 'mcserver': case 'mcquery': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : \n${prefix + command} ip|port\nUses : \n${prefix + command} play.xeon.com|19132`)
const Query = require("minecraft-query");

const qury = args.join(" ")
const iphost = qury.split("|")[0];
const portnya = qury.split("|")[1];

if (!iphost) return replay(`Where's your ip?`)
if (!portnya) return replay(`Where's the port??`)

const q = new Query({host: iphost, port: portnya, timeout: 7500});

q.fullStat()
.then(success => {
replay(jsonformat(success));
return q.basicStat()
})
.then(success => {
replay(jsonformat(success));
q.close();
})
}
break
case 'mcpedl': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : ${prefix + command} shader`)
xeontod.mcpedl(args.join(" ")).then(async(res) => {
teks = `*| MCPEDL SEARCH |*`
for (let i of res) {
teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu🥀'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
Gans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'happymod': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : ${prefix + command} mobile legend`)
xeontod.happymod(args.join(" ")).then(async(res) => {
teks = '```「 HappyMod Search 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu🥀'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
Gans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'searchgc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return replay(`Example :\n${prefix}searchgc Classy Editor`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu🥀'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
Gans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'servermc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
xeontod.servermc().then(async(res) => {
let teks = '*| MINECRAFT SERVER |*\n\nhttps://minecraftpocket-servers.com/country/indonesia/\n\n'
let no = 1
for (let i of res) {
teks += `${themeemoji} Server To ${no++}\nip : ${i.ip}\nport : ${i.port}\nversi : ${i.versi}\nplayer : ${i.player}\n\n`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu🥀'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
Gans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'fajar-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
})
break
case "quotes":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
var res = await Quotes()
teks = "══════════════════"
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += "══════════════════"
replay(teks)
break
case "darkjoke":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
var res = await Darkjokes()
teks = "\nDarkjokes*"
Gans.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break
case 'cnn-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
CNNNews().then(res => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
})
break
case 'tvsearch':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply('Where is the title?') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
  no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += `══════════════════`
replay(teks) 
})
break
case 'cnbc-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
CNBCNews().then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
Gans.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'tribun-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
TribunNews().then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
Gans.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'indozone-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
IndozoneNews().then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
Gans.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'kompas-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
KompasNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
Gans.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'detik-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
DetikNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
Gans.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'daily-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
DailyNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
Gans.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break

case 'inews-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
iNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
})
break
case 'okezone-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
OkezoneNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
Gans.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break

case 'sindo-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
SindoNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
})
break
case 'tempo-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
TempoNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
Gans.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'antara-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
AntaraNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
Gans.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break

case "kontan-news":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  KontanNews().then(async (res) => {
    
    teks = "══════════════════"
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `News: ${i.berita}\n`
      teks += `Type: ${i.berita_jenis}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += "══════════════════"
    Gans.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  break
case "merdeka-news":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  MerdekaNews().then(async (res) => {
    
    teks = "══════════════════"
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `News: ${i.berita}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += "══════════════════"
    Gans.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  break

case "jalantikus-meme":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  var res = await JalanTikusMeme()
teks = "══════════════════"
teks += "\nLaughing out loud?🥴\n"
teks += `\nSource: ${res}\n`
teks += "══════════════════"
Gans.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break
            case 'cinemaschedule': {
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!text) return reply(`Example: ${prefix + command} jakarta`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/jadwalbioskop?kota=${text}&apikey=hdiiofficial`)
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += ` Title: ${i.title}\n`
            capt += ` Thumbnail: ${i.thumb}\n`
            capt += ` Url: ${i.url}\n\n──────────────────────\n`
            }
            Gans.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
case 'shortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(`*List*\n${prefix}shortstory Anak\n${prefix}shortstory Bahasa Daerah\n${prefix}shortstory Bahasa Inggris\n${prefix}shortstory Bahasa Jawa\n${prefix}shortstory Bahasa Sunda\n${prefix}shortstory Budaya\n${prefix}shortstory Cinta\n${prefix}shortstory Cinta Islami\n${prefix}shortstory Cinta Pertama\n${prefix}shortstory Cinta Romantis\n${prefix}shortstory Cinta Sedih\n${prefix}shortstory Cinta Segitiga\n${prefix}shortstory Cinta Sejati\n${prefix}shortstory Galau\n${prefix}shortstory Gokil\n${prefix}shortstory Inspiratif\n${prefix}shortstory Jepang\n${prefix}shortstory Kehidupan\n${prefix}shortstory Keluarga\n${prefix}shortstory Kisah Nyata\n${prefix}shortstory Korea\n${prefix}shortstory Kristen\n${prefix}shortstory Liburan\n${prefix}shortstory Lingkungan\n${prefix}shortstory Lucu\n${prefix}shortstory Malaysia\n${prefix}shortstory Mengharukan\n${prefix}shortstory Misteri\n${prefix}shortstory Motivasi\n${prefix}shortstory Nasihat\n${prefix}shortstory Nasionalisme\n${prefix}shortstory Olahraga\n${prefix}shortstory Patah Hati\n${prefix}shortstory Penantian\n${prefix}shortstory Pendidikan\n${prefix}shortstory Pengalaman Pribadi\n${prefix}shortstory Pengorbanan\n${prefix}shortstory Penyesalan\n${prefix}shortstory Perjuangan\n${prefix}shortstory Perpisahan\n${prefix}shortstory Persahabatan\n${prefix}shortstory Petualangan\n${prefix}shortstory Ramadhan\n${prefix}shortstory Remaja\n${prefix}shortstory Renungan\n${prefix}shortstory Rindu\n${prefix}shortstory Rohani\n${prefix}shortstory Romantis\n${prefix}shortstory Sastra\n${prefix}shortstory Sedih\n${prefix}shortstory Sejarah\n${prefix}shortstory Slice Of Life\n${prefix}shortstory Terjemahan\n${prefix}shortstory Thriller`)
let cerpe = await cerpen(q)
reply(`${global.themeemoji} _*Title :*_ ${cerpe.title}\n${global.themeemoji} _*Author :*_ ${cerpe.author}\n${global.themeemoji} _*Category :*_ ${cerpe.kategori}\n${global.themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${global.themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'loveshortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`Cinta segitiga`)
        reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'islamicshortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`Cinta segitiga`)
        reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'disturbingshorystoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`galau`)
       reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'friendshipshortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`persahabatan`)
        reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'sacrificeshortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`Pengorbanan`)
reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
	    case 'couplepp':  case 'ppcouple': {
		   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                Gans.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple cowo🙎🏻‍♂️` }, { quoted: m })
                Gans.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple cewe🙎🏻‍♀️` }, { quoted: m })
            }
	    break
            case 'animequotes': case 'animequote': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		let { quotesAnime } = require('./lib/scraperW')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Tekan Tombol Di Bawah',
                    buttons: buttons,
                    headerType: 2
                }
                Gans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'wallpaper': case 'animewallpaper': case 'animewall': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!args.join(" ")) return reply("Gambar apa yang kamu cari??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `.wallpaper ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                Gans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break

case 'wiki': case 'wikipedia':
 	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return reply('Apa yang sedang Kamu cari?? ')
const res2 = await GansWiki(q).catch(e => {
return reply('_[ ! ] Hasil Kesalahan Tidak Ditemukan_') 
}) 
const result2 = `*Title :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
Gans.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break
            case 'wikimedia': {
            	 	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Masukkan Judul`)
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`,
                    footer: Gans.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Gans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'animequotes': case 'animequote': case 'quoteanime': {
            	 	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                Gans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'nomerhoki': case 'nomorhoki': {
			   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!Number(text)) return reply(`Example : ${prefix + command} 916909137213`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Phone Number :* ${anu.message.nomer_hp}\n${themeemoji} *Shuzi Angka Figures :* ${anu.message.angka_shuzi}\n${themeemoji} *Positive Energy :*\n- Riches : ${anu.message.energi_positif.kekayaan}\n- Health : ${anu.message.energi_positif.kesehatan}\n- Love : ${anu.message.energi_positif.cinta}\n- Stability : ${anu.message.energi_positif.kestabilan}\n- Percentage : ${anu.message.energi_positif.persentase}\n${themeemoji} *Negative Energy :*\n- Dispute : ${anu.message.energi_negatif.perselisihan}\n- Lost : ${anu.message.energi_negatif.kehilangan}\n- Catastrophe : ${anu.message.energi_negatif.malapetaka}\n- Destruction : ${anu.message.energi_negatif.kehancuran}\n- Percentage : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Dream :* ${anu.message.mimpi}\n${themeemoji} *Meaning :* ${anu.message.arti}\n${themeemoji} *Solution :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Your Name :* ${anu.message.nama_Kamu.nama}\n${themeemoji} *Your Birth :* ${anu.message.nama_Kamu.tgl_lahir}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${themeemoji} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Your Name :* ${anu.message.nama_Kamu.nama}\n${themeemoji} *Your Birth :* ${anu.message.nama_Kamu.tgl_lahir}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${themeemoji} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Husband's Name :* ${anu.message.suami.nama}\n${themeemoji} *Husband Born :* ${anu.message.suami.tgl_lahir}\n${themeemoji} *Wife's Name :* ${anu.message.istri.nama}\n${themeemoji} *Born Wife :* ${anu.message.istri.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Your Name :* ${anu.message.nama_Kamu.nama}\n${themeemoji} *Your Birth :* ${anu.message.nama_Kamu.tgl_lahir}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${themeemoji} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${themeemoji} *Positive Side :* ${anu.message.sisi_positif}\n${themeemoji} *Negative Side :* ${anu.message.sisi_negatif}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika Ardianta`)
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Meaning :* ${anu.message.arti}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Life Path :* ${anu.message.life_path}\n${themeemoji} *Destiny :* ${anu.message.destiny}\n${themeemoji} *Destiny Desire :* ${anu.message.destiny_desire}\n${themeemoji} *Personality :* ${anu.message.personality}\n${themeemoji} *Percentage :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika|Novia`)
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                Gans.sendImage(m.chat,  anu.message.gambar, `${themeemoji} *Your Name :* ${anu.message.nama_Kamu}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan}\n${themeemoji} *Positive Side :* ${anu.message.sisi_positif}\n${themeemoji} *Negative Side :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 6, 12, 2020`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Wedding Date :* ${anu.message.tanggal}\n${themeemoji} *Characteristics :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix+ command} 28, 12, 2021`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.hari_lahir}\n${themeemoji} *Business :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.hari_lahir}\n${themeemoji} *Sustenance :* ${anu.message.rejeki}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.hari_lahir}\n?? *Profession :* ${anu.message.pekerjaan}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Analysis :* ${anu.message.analisa}\n${themeemoji} *Root Number :* ${anu.message.angka_akar}\n${themeemoji} *Nature :* ${anu.message.sifat}\n${themeemoji} *Element :* ${anu.message.elemen}\n${themeemoji} *Lucky Numbers :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Analysis :* ${anu.message.analisa}\n${themeemoji} *Sector :* ${anu.message.sektor}\n?? *Element :* ${anu.message.elemen}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Gans.sendImage(m.chat, anu.message.image, `${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Tarot Symbol :* ${anu.message.simbol_tarot}\n${themeemoji} *Meaning :* ${anu.message.arti}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Name, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tahun_lahir}\n${themeemoji} *Gender :* ${anu.message.jenis_kelamin}\n${themeemoji} *Kua Number :* ${anu.message.angka_kua}\n${themeemoji} *Group :* ${anu.message.kelompok}\n${themeemoji} *Character :* ${anu.message.karakter}\n${themeemoji} *Good Sector :* ${anu.message.sektor_baik}\n${themeemoji} *Bad Sector :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *When Challenged :* ${anu.message.kala_tinantang}\n${themeemoji} *Info :* ${anu.message.info}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Info :* ${anu.message.info}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Day Of Birth :* ${anu.message.hari_lahir}\n${themeemoji} *Date Of Birth :* ${anu.message.tgl_lahir}\n${themeemoji} *Fateful Day :* ${anu.message.hari_naas}\n${themeemoji} *Info :* ${anu.message.catatan}\n${themeemoji} *Notes :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Day Of Birth :* ${anu.message.hari_lahir}\n${themeemoji} *Date Of Birth :* ${anu.message.tgl_lahir}\n${themeemoji} *Dragon Day Direction :* ${anu.message.arah_naga_hari}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Day Of Birth :* ${anu.message.hari_lahir}\n${themeemoji} *Date Of Birth :* ${anu.message.tgl_lahir}\n${themeemoji} *Sustenance Direction :* ${anu.message.arah_rejeki}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Name, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Fortune Of The Year :* ${anu.message.peruntungan_tahun}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return (`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Date :* ${anu.message.tanggal}\n${themeemoji} *Number Of Neptune :* ${anu.message.jumlah_neptu}\n${themeemoji} *Day Character :* ${anu.message.watak_hari}\n${themeemoji} *Dragon Day :* ${anu.message.naga_hari}\n${themeemoji} *Good Hour :* ${anu.message.jam_baik}\n${themeemoji} *Birth Character :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Lifeline :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 12, 1, 2022`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Date :* ${anu.message.tgl_memancing}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return (`Example : ${prefix + command} 12, 1, 2022, 28\n\nCatatan : ${prefix + command} Siklus Haid Hari Pertama`)
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix+ command} 7 7 2005`)
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Zodiac :* ${anu.message.zodiak}\n${themeemoji} *Number :* ${anu.message.nomor_keberuntungan}\n${themeemoji} *Aroma :* ${anu.message.aroma_keberuntungan}\n${themeemoji} *Planet :* ${anu.message.planet_yang_mengitari}\n${themeemoji} *Flower :* ${anu.message.bunga_keberuntungan}\n${themeemoji} *Color :* ${anu.message.warna_keberuntungan}\n${themeemoji} *Stone :* ${anu.message.batu_keberuntungan}\n${themeemoji} *Element :* ${anu.message.elemen_keberuntungan}\n${themeemoji} *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                Gans.sendText(m.chat, `${themeemoji} *Results :* ${anu.message}`, m)
            }
            break
	    case 'tiktok':{
  	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
  if (!q) return reply('Mana linknya?')
  reply(mess.wait)
  if (!q.includes('tiktok')) return reply(`Itu bukan link tiktok!`)
   const musim_rambutan = await GansTiktok(`${q}`).catch(e => {
 reply(mess.error) 
} )
   console.log(musim_rambutan)
   const xeontiktokop = musim_rambutan.result.watermark
texttk = `Ingin mengunduh tanpa tKamu air atau audio?
_Silakan pilih tombol di bawah ini_`
let buttons = [
{buttonId: `ttnowm ${q}`, buttonText: {displayText: 'No Watermark ❌'}, type: 1},
{buttonId: `ttaud ${q}`, buttonText: {displayText: 'Audio 🎶'}, type: 1}
]
let buttonMessage = {
video: {url:xeontiktokop},
caption: texttk,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${ownername}`,
body: `${pushname}`,
thumbnail: log0,
mediaType:1,
mediaUrl: q,
sourceUrl: q
}}
}
Gans.sendMessage(from, buttonMessage, {quoted:m})
}
break
  case 'tiktoknowm': case 'ttnowm':{
  	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
  if (!q) return reply('Mana linknya?')
  reply(mess.wait)
  if (!q.includes('tiktok')) return reply(`Itu bukan link tiktok!`)
   const musim_rambutan = await GansTiktok(`${q}`).catch(e => {
 reply(mess.error) 
} )
   console.log(musim_rambutan)
   const xeonytiktoknowm = musim_rambutan.result.nowatermark
    Gans.sendMessage(from, { video: { url: xeonytiktoknowm }, caption: "Ini dia!" }, { quoted: m })
   }
  break
  case 'tiktokaudio':
case 'tiktokmusic':
case 'ttaud':{
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
  if (!q) return reply('Mana audionya?')
  if (!q.includes('tiktok')) return reply(`Itu bukan link tiktok!`)
   const musim_rambutan = await GansTiktok(`${q}`).catch(e => {
 reply(mess.error) 
} )
   console.log(musim_rambutan)
   const xeonytiktokaudio = musim_rambutan.result.nowatermark
    Gans.sendMessage(from, { audio: { url: xeonytiktokaudio }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break
	case 'music': case 'play': case 'song': case 'ytplay': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let ytvc = await hx.youtube(anu.url)
let buttons = [
{buttonId: `ytvd ${ytvc.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `ytad ${ytvc.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `*| YOUTUBE PLAY |*

${global.themeemoji} Title : ${anu.title}
${global.themeemoji} Ext : Search
${global.themeemoji} ID : ${anu.videoId}
${global.themeemoji} Duration : ${anu.timestamp}
${global.themeemoji} Viewers : ${anu.views}
${global.themeemoji} Uploaded : ${anu.ago}
${global.themeemoji} Author : ${anu.author.name}
${global.themeemoji} Channel : ${anu.author.url}
${global.themeemoji} Description : ${anu.description}
${global.themeemoji} Url : ${anu.url}`,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: anu.title,
body: `${global.botname}`,
thumbnail: log0,
mediaType:2,
mediaUrl: anu.url,
sourceUrl: anu.url
}}
}
Gans.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'getmusic': case 'getvideo': case 'yt': case 'youtube': case 'ytvideo': case 'ytmp3': case 'ytmp4': case 'ytmusic': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(mess.linkm)
try {
hx.youtube(args[0]).then(async(res) => {
textyt = `*| YOUTUBE DOWNLOADER |*

${global.themeemoji} Title : ${res.title}
${global.themeemoji} Size : ${res.size}
${global.themeemoji} Quality : ${res.quality}

_Pilih video atau audio dan tunggu beberapa saat_`
let buttons = [
{buttonId: `ytvd ${res.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `ytad ${res.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: {url:res.thumb},
caption: textyt,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: res.title,
body: `${global.ownername}`,
thumbnail: {url:res.thumb},
mediaType:2,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
Gans.sendMessage(from, buttonMessage, {quoted:m})
}).catch(_ => _)
} catch {
reply("Link error!")
}
}
break
case 'ytvd': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(mess.wait)
Gans.sendMessage(from, {video:{url:args[0]}, mimetype:"video/mp4", caption:"Success", contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.botname}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
}
break
case 'ytad': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(mess.wait)
Gans.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.botname}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
}
break
            case 'ytdl': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(mess.linkm)
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`Tautan yang Kamu berikan tidak valid`)
                anu = await fetchJson(`https://api.akuari.my.id/downloader/youtube?link=${text}`)        
                if (anu.filesize_video >= 999999) return reply('*File Melebihi Batas* '+util.format(anu))
                tummb = await getBuffer(anu.thumb)
                audio = await getBuffer(anu.audio)        
                Gans.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `${anu.title}`}, { quoted : m }).catch((err) => reply(mess.error))
                Gans.sendMessage(m.chat, { video: { url: anu.video }, jpegThumbnail:tummb, caption: `${util.format(anu)}`}, { quoted: m }).catch((err) => reply(mess.error))
            }
            break
case 'ytshorts': case 'shorts': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  if (!text) return reply(`*Use ${prefix + command} letakkan tautan short youtube*`)
  if (!isUrl(args[0]) && !args[0].includes('youtube')) return reply(`Tautan yang Kamu berikan tidak valid`)
  xeonkey.Youtube(`${text}`).then(async (data) => {
  if (data.medias[0].formattedSize.split('MB')[0] >= 999) return reply('*File Melebihi Batas* '+util.format(data)) 
  cap = `
*YOUTUBE SHORTS*

*${themeemoji}TITLE:* ${data.title}\n*${themeemoji}QUALITY:* ${data.medias[0].quality}\n*${themeemoji}SIZE:* ${data.medias[0].formattedSize}\n*${themeemoji}DURATION* ${data.duration}\n*${themeemoji}ID:* ${data.medias[0].cached}\n*${themeemoji}LINK:* ${data.url}\n\n*${botname}*`
  buf = await getBuffer(data.thumbnail)
  Gans.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
  Gans.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*${themeemoji}TITLE:* ${data.title}\n*${themeemoji}QUALITY:* ${data.medias[0].quality}\n*${themeemoji}SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })  
                }).catch((err) => {
                    reply(mess.reply)
                })
            }
            break
	  case 'pinterest': case 'pin': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply("Gambar apa yang kamu cari?")
try {
hx.pinterest(args.join(" ")).then(async(res) => {
imgnyee = res[Math.floor(Math.random() * res.length)]
let buttons = [
{buttonId: `pinterest ${args.join(" ")}`, buttonText: {displayText: 'Next Image 👀'}, type: 1}
]
let buttonMessage = {
image: { url: imgnyee },
caption:  `🔰 Title : ` + args.join(" ") + `\n🔰 Media Url : `+imgnyee,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.ownername}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}
}
Gans.sendMessage(m.chat, buttonMessage, { quoted: m })
}).catch(_ => _)
} catch {
reply("Error")
}
}
break
case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await Gans.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    Gans.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
case 'mediafire': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`Tautan yang Kamu berikan tidak valid`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Melebihi Batas* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
Gans.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break
            case 'umma': case 'ummadl': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	        if (!text) return reply(`Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
                let { umma } = require('./lib/scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '🎵Audio🎵'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '📽️Video📽️'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
${themeemoji} Title : ${anu.title}
${themeemoji} Author : ${anu.author.name}
${themeemoji} Like : ${anu.like}
${themeemoji} Caption : ${anu.caption}
${themeemoji} Url : ${anu.media[0]}
To Download Media, Please Click One Of The Buttons Below Or Enter The ytmp3/ytmp4 Command With The Url Above
`,
			footer: Gans.user.name,
			buttons,
			headerType: 4
		    }
		    Gans.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        Gans.sendMessage(m.chat, { image: { url }, caption: `${themeemoji} Title : ${anu.title}\n${themeemoji} Author : ${anu.author.name}\n${themeemoji} Like : ${anu.like}\n${themeemoji} Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
        	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
		if (!text) return reply(`Di mana nama nada dering noob?, Contoh : ${prefix + command} desah`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		Gans.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'tempo': {
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
var req = args.join(' ')
media = await Gans.downloadAndSaveMediaMessage(quoted, "tempo")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
Gans.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
Gans.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
fs.unlinkSync(ran)
})
} else {
reply("Send video/audio")
}
}
break
case 'volume': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
media = await Gans.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
Gans.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
Gans.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
reply("Send video/audio")
}
}
break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
		if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await Gans.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                Gans.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Balas Audio yang Ingin Kamu Ubah Dengan Caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!m.quoted) return reply(`Balas Pesan!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Hilang`)
                if (!text) return reply(`Untuk Apa Perintah?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`Kamu Tidak Memiliki Izin Untuk Mengubah Perintah Stiker Ini`)
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No Hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`Kamu Tidak Memiliki Izin Untuk Menghapus Perintah Stiker Ini`)
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                Gans.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`Balas Pesan!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Hilang`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply(`Hash Tidak Ditemukan Dalam Basis Data`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!m.quoted) return reply(`Balas Pesan yang Ingin Kamu Simpan Di Database`)
                if (!text) return reply(`Example : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Telah Terdaftar Di Daftar Pesan`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Berhasil Menambahkan Pesan Dalam Daftar Pesan Sebagai '${text}'
    
Access With ${prefix}getmsg ${text}

View List Of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} file name\n\nLihat Daftar Pesan Dengan ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Tidak Tercantum Dalam Daftar Pesan`)
                Gans.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
		delete msgs[text.toLowerCase()]
		reply(`Delete Successfully '${text}' From The Message list`)
            }
	    break
	    case 'anonymous': {
		if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'Start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                ]
                Gans.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await Gans.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, Gans.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Grup!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await Gans.sendButtonText(m.chat, buttons, `\`\`\`Kamu Tidak Berada Dalam Sesi Anonymous, Tekan Tombol Untuk Menemukan Partner \`\`\``)
                   reply(false)
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await Gans.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous \`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Grup!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await Gans.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Dalam Sesi Anonymous, Tekan Tombol Di Bawah Untuk Mengakhiri Sesi Anonim Kamu\`\`\``, Gans.user.name, m)
                    reply(false)
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '⏩Skip⏩' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await Gans.sendButtonText(room.a, buttons, `\`\`\`partner Berhasil Ditemukan, Sekarang Kamu Dapat Mengirim Pesan\`\`\``, Gans.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Gans.sendButtonText(room.b, buttons, `\`\`\`partner Berhasil Ditemukan, Sekarang Kamu Dapat Mengirim Pesan\`\`\``, Gans.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await Gans.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu, Mencari Partner\`\`\``, Gans.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Grup!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await Gans.sendButtonText(m.chat, buttons, `\`\`\`Kamu Tidak Dalam Sesi Anonymous, Tekan Tombol Untuk Menemukan Partner\`\`\``)
                    reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await Gans.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '⏩Skip⏩' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await Gans.sendButtonText(room.a, buttons, `\`\`\`Partner Berhasil Ditemukan, Sekarang Kamu Dapat Mengirim Pesan\`\`\``, Gans.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Gans.sendButtonText(room.b, buttons, `\`\`\`partner Berhasil Ditemukan, Sekarang Kamu Dapat Mengirim Pesan\`\`\``, Gans.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await Gans.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, Gans.user.name, m)
                }
                break
            }
            case 'public': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                Gans.public = true
                reply('Successful Change To Public Usage')
            }
            break
            case 'self': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                Gans.public = false
                reply('Successful Change To Self Usage')
            }
            break
case 'setstatuts':
case 'setbio':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply('Send orders *#setbio text*')
Gans.setStatus(`${q}`)
reply(mess.success)
break
case 'antitag': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return
if (args.length < 1) return replay(`Type on to enable\nType off to disable`)
if (args[0] === 'on') {
if (antitags === true) return
global.antitags = true
replay(`Successfully activated antitag!`)
} else if (args[0] === 'off') {
if (antitags === false) return
global.antitags = false
replay(`Successfully deactivated antitag!`)
} else {
replay('Choose on or off')
}
}
break
            case 'ping': case 'p': case 'botstatus': case 'statusbot': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Detik_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case 'speedtest': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                Gans.sendContact(m.chat, global.vcardowner, m)
            }
            break
  case 'setmenu': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!isCreator) return reply(mess.owner)
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateDocument = false
                reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                setbot.templateDocument = false
                reply(mess.success)
                } else if (args[0] === 'templateDocument'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateDocument = true
                reply(mess.success)
                } else {
                let sections = [
                {
                title: "😛GANTI MENU BOT😛",
                rows: [
                {title: "Image Menu", rowId: `setmenu templateImage`, description: `Ketuk untuk mengubah menu bot ke Menu Gambar`},
                {title: "Gif Menu", rowId: `setmenu templateGif`, description: `Ketuk untuk mengubah menu bot ke Menu Gif`},
                {title: "Video Menu", rowId: `setmenu templateVideo`, description: `Ketuk untuk mengubah menu bot ke Menu Video`},
                {title: "Document Menu", rowId: `setmenu templateDocument`, description: `Ketuk untuk mengubah menu bot ke Menu Dokumen`}
                ]
                },
                ]
                Gans.sendListMsg(m.chat, `Silakan pilih menu yang ingin Kamu ubah!`, ` `, Gans.user.name, `Click Here`, sections, m)
                }
            }
            break
case 'request': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : ${prefix + command} hello dev please add a downloader feature`)
teks = `*| REQUEST |*`
teks1 = `\n\nNumber : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks2 = `\n\nSuccessfully sent to owner`
for (let i of owner) {
Gans.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
Gans.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
                    case 'bug': case 'report': {
                    	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                    	if(!text) return reply(`Masukkan Bug\n\nExample: ${command} Menu Error`)
                    	Gans.sendMessage(`${owner}@s.whatsapp.net`, {text: `*Laporan Bug Dari:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Berhasil Dilaporkan Ke Pemilik\n\nPastikan Bugnya Valid, Jika Anda Bermain Dengan Ini, Gunakan Fitur Ini Lagi Dan Lagi Tanpa Alasan, Anda Akan Diblokir Secara Permanen !`)
                    }
                    break
case 'donasi':
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
Gans.sendMessage(from, { react: { text: `${global.reactmoji}`, key: m.key }})
	                let btn = [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: `${websitex}`
                                }
                            }, {
                                callButton: {
                                    displayText: 'Contact Owner',
                                    url: `+62 895-0996-0601`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'BACK TO MENU',
                                    id: 'menu'
                                }
                            }]
                        Gans.send5ButImg(m.chat, donasi, global.botname, global.donas, btn, global.donas)
      break
 case 'list': case 'menu': case 'help': case '?': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
Gans.sendMessage(from, { react: { text: `${global.reactmoji}`, key: m.key }})
	                let btn = [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: `${websitex}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'INSTAGRAM',
                                    url: `${iggw}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ALL MENU',
                                    id: 'allmenu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'List Menu',
                                    id: 'command'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        Gans.send5ButImg(m.chat, menulist, global.botname, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        Gans.send5ButGif(m.chat, menulist, global.botname, global.vidmenu, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        Gans.send5ButVid(m.chat, anu, global.botname, global.vidmenu, btn, global.thumb)
                        } else if (setbot.templateVideo) {
                        Gans.send5ButVid(m.chat, menulist, global.botname, global.vidmenu, btn, global.thumb)
                        } else if (setbot.templateLoc) {
                        Gans.send5ButLoc(m.chat, menulist, global.botname, global.thumb, btn)
                        /////////} else if (setbot.templateMsg) {
                        /////////Gans.send5ButMsg(m.chat, menulist, global.botname, btn)
                        } else if (setbot.templateDocument) {
                        let buttonmenu = [
        	{ urlButton: { displayText: `YouTube`, url : `${websitex}` } },
            { urlButton: { displayText: `INSTAGRAM`, url: `${iggw}` } },
            { quickReplyButton: { displayText: `All Menu`, id: 'allmenu'} },
            { quickReplyButton: { displayText: `List Menu`, id: 'command'} },
            { quickReplyButton: { displayText: `Owner`, id: 'owner'} }
        	]
        	Gans.sendMessage(m.chat, { caption: menulist, document: fs.readFileSync('./media/gambar/awokwok.xlsx'), mimetype: `${docs}`, fileName: `${ownername}`, templateButtons: buttonmenu, footer: `${botname}`, mentionedJid: [m.sender] })
                        }
                     }
            break
case 'sewa':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0] === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
m.reply(`Success`)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
m.reply(mess.success)
} else {
m.reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)}
break
case 'sewalist': case 'listsewa':
let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvippsewa = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
m.reply(txtnyee)
break
case 'sewacheck': case 'ceksewa': 
if (!m.isGroup) return m.reply('Fitur Ini Hanya Bisa Digunakan Di Grup')
if (!isSewa) return m.reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s)`
m.reply(sewanya)
break
     case 'listmenu':           case 'command': {
                	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname} ${ucapanWaktu}`,
                    description: `╭───❏ *❲* INFO USER *❳*
├◩Nama : ${pushname}
├◩Number : wa.me/${m.sender.split('@')[0]}
╰─────◩

╭───❏ *❲* INFO BOT *❳*
├◩Owner : ${global.ownername}
├◩Nama : ${global.botname}
├◩No Owner : wa.me${global.ownertag}
├◩Runtime : ${latensie.toFixed(4)} Detik
├◩Host Name : ${os.hostname()}
├◩Platform : ${os.platform()}
╰─────◩

╭─❏ *❲* INFO SERVER *❳*
├◩Tanggal : ${jangwak}
├◩Hari : ${janghar}, ${weton}
├◩Wib : ${moment().utcOffset('+0700').format('HH:mm')}
├◩Wita : ${moment().utcOffset('+0800').format('HH:mm')}
├◩Wit : ${moment().utcOffset('+0900').format('HH:mm')}
╰──────────❏`,
                    buttonText: "Menu",
                    footerText: `${global.botname}`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Fitur BOT",
								"rows": [
									{
										"title": "ALL MENU",
										"description": "",
										"rowId": `${prefix}allmenu`
									},
									{
											"title": "Owner Menu",
										"description": "",
										"rowId": `${prefix}ownermenu`
										},
										{
											"title": "Group Menu",
										"description": "",
										"rowId": `${prefix}groupmenu`
										},
										{
											"title": "Game Menu",
										"description": "",
										"rowId": `${prefix}gamemenu`
										},
										{
											"title": "Rpg Menu",
										"description": "",
										"rowId": `${prefix}rpgmenu`
										},
										{
											"title": "Anonymous Menu",
										"description": "",
										"rowId": `${prefix}anonymousmenu`
										},
								     	{
											"title": "Download Menu",
										"description": "",
										"rowId": `${prefix}downloadmenu`
										},
										{
											"title": "Image Effect Menu",
										"description": "",
										"rowId": `${prefix}imageeffectmenu`
										},
										{
											"title": "Maker Menu",
										"description": "",
										"rowId": `${prefix}makermenu`
										},
										{
											"title": "Stiker Menu",
										"description": "",
										"rowId": `${prefix}stickermenu`
										},
										{
											"title": "Emote Menu",
										"description": "",
										"rowId": `${prefix}emotemenu`
										},
										{
											"title": "Anime Menu",
										"description": "",
										"rowId": `${prefix}animemenu`
										},
										{
											"title": "Anime Stiker Menu",
										"description": "",
										"rowId": `${prefix}animestickermenu`
										},
										{
											"title": "NSFW Menu",
										"description": "",
										"rowId": `${prefix}nsfwmenu`
										},
										{
											"title": "Search Menu",
										"description": "",
										"rowId": `${prefix}searchmenu`
										},
										{
										
											"title": "Fun Menu",
										"description": "",
										"rowId": `${prefix}funmenu`
										},
										{
										
											"title": "Indo Menu",
										"description": "",
										"rowId": `${prefix}indomenu`
										},
										{
										
											"title": "Convert Menu",
										"description": "",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "Random Image Menu",
										"description": "",
										"rowId": `${prefix}randomimagemenu`
										},
										{
											"title": "Indo Horoscope Menu",
										"description": "",
										"rowId": `${prefix}indohoroscopemenu`
										},
										{
											"title": "Tool Menu",
										"description": "",
										"rowId": `${prefix}toolmenu`
										},
										{
											"title": "Database Menu",
										"description": "",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "Other Menu",
										"description": "",
										"rowId": `${prefix}othermenu`
										}
								]
							},
							{
					       			    "title": "Info BOT️",
								        "rows": [
								        {
										"title": "STATUS BOT",
										"description": "",
										"rowId": `${prefix}ping`
									},
									{
											"title": "RUNTIME",
										"description": "",
										"rowId": `${prefix}runtime`
										}
								]
							},
							{
								"title": "Credit ©️",
								"rows": [
								   {
											"title": "OWNER 🤴",
										"description": "Menampilkan Owner BOT",
										"rowId": `${prefix}owner`
										},
									{
										"title": "Thanks To ❤️",
										"description": "Menampilkan Daftar Kredit Bot!",
										"rowId": `${prefix}tqto`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            Gans.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'allmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'All Menu')
await Gans.send5ButImg(from, `
Hai ${pushname}👋 ${ucapanWaktu}😇
╭───❏ *❲* INFO USER *❳*
├◩Nama : ${pushname}
├◩Number : wa.me/${m.sender.split('@')[0]}
╰─────◩

╭───❏ *❲* INFO BOT *❳*
├◩Owner : ${global.ownername}
├◩Nama : ${global.botname}
├◩No Owner : wa.me/${global.ownertag}
├◩Runtime : ${latensie.toFixed(4)} Detik
├◩Host Name : ${os.hostname()}
├◩Platform : ${os.platform()}
╰─────◩

╭─❏ *❲* INFO SERVER *❳*
├◩Tanggal : ${jangwak}
├◩Hari : ${janghar}, ${weton}
├◩Wib : ${moment().utcOffset('+0700').format('HH:mm')}
├◩Wita : ${moment().utcOffset('+0800').format('HH:mm')}
├◩Wit : ${moment().utcOffset('+0900').format('HH:mm')}
╰───────────────❏

╭─────➣❲ *OWNER* ❳	
│┏✗ ${prefix}self
│┣✗ ${prefix}public
│┣✗ ${prefix}ban [add/del]
│┣✗ ${prefix}banchat [on/off]
│┣✗ ${prefix}join [link]
│┣✗ ${prefix}leavegc
│┣✗ ${prefix}setbio
│┣✗ ${prefix}bcgroup [text]
│┣✗ ${prefix}bcall [text]
│┣✗ ${prefix}bcimage [image]
│┣✗ ${prefix}bcvideo [video]
│┣✗ ${prefix}bcaudio [audio]
│┣✗ ${prefix}bcloc [text]
│┣✗ ${prefix}setppbot [image]
│┣✗ ${prefix}setexif
│┣✗ ${prefix}block [tag/number]
│┗✗ ${prefix}unblock [tag/number]
╰──────────────◩

╭─────➣❲ *GROUP* ❳	 
│┏✗ ${prefix}grousetting
│┣✗ ${prefix}grouplink
│┣✗ ${prefix}ephemeral [option]
│┣✗ ${prefix}setgcpp [image]
│┣✗ ${prefix}setname [text]
│┣✗ ${prefix}setdesc [text]
│┣✗ ${prefix}group 
│┣✗ ${prefix}resetgrouplink
│┣✗ ${prefix}editinfo [option]
│┣✗ ${prefix}add [user]
│┣✗ ${prefix}kick [reply/tag]
│┣✗ ${prefix}hidetag [text]
│┣✗ ${prefix}tagall [text]
│┣✗ ${prefix}antilinkgc [on/off]
│┣✗ ${prefix}antilinktg [on/off]
│┣✗ ${prefix}antilinktt [on/off]
│┣✗ ${prefix}antilinkytch [on/off]
│┣✗ ${prefix}antilinkytvid [on/off]
│┣✗ ${prefix}antilinkig [on/off]
│┣✗ ${prefix}antilinkfb [on/off]
│┣✗ ${prefix}antilinktwit [on/off]
│┣✗ ${prefix}antilinkall [on/off]
│┣✗ ${prefix}antivirus [on/off]
│┣✗ ${prefix}antitoxic [on/off]
│┣✗ ${prefix}antiwame [on/off]
│┣✗ ${prefix}autoreply [on/off]
│┣✗ ${prefix}nsfw [on/off]
│┣✗ ${prefix}promote [reply/tag]
│┣✗ ${prefix}demote [reply/tag]
│┣✗ ${prefix}react [reply emoji]
│┣✗ ${prefix}vote
│┣✗ ${prefix}devote
│┣✗ ${prefix}upvote
│┣✗ ${prefix}checkvote
│┗✗ ${prefix}delvote
╰──────────────◩

╭─────➣❲ *MAKER* ❳	 
│┏✗ ${prefix}candy
│┣✗ ${prefix}blackpinkneon
│┣✗ ${prefix}deepsea
│┣✗ ${prefix}scifi
│┣✗ ${prefix}fiction
│┣✗ ${prefix}berry
│┣✗ ${prefix}fruitjuice
│┣✗ ${prefix}biscuit
│┣✗ ${prefix}wood
│┣✗ ${prefix}chocolate
│┣✗ ${prefix}matrix
│┣✗ ${prefix}blood
│┣✗ ${prefix}halloween
│┣✗ ${prefix}wicker
│┣✗ ${prefix}darkgold
│┣✗ ${prefix}firework
│┣✗ ${prefix}skeleton
│┣✗ ${prefix}sand
│┣✗ ${prefix}glue
│┣✗ ${prefix}leaves
│┣✗ ${prefix}magma
│┣✗ ${prefix}lava
│┣✗ ${prefix}rock
│┣✗ ${prefix}bloodglas
│┣✗ ${prefix}underwater
│┣✗ ${prefix}textmaker
│┣✗ ${prefix}honey
│┣✗ ${prefix}ice
│┣✗ ${prefix}watercolor
│┣✗ ${prefix}multicolor
│┣✗ ${prefix}snow
│┣✗ ${prefix}harrypot
│┣✗ ${prefix}harrypotter
│┣✗ ${prefix}brokenglass
│┣✗ ${prefix}waterpipe
│┣✗ ${prefix}spooky
│┣✗ ${prefix}circuit
│┣✗ ${prefix}metallic
│┣✗ ${prefix}demon
│┣✗ ${prefix}sparklechristmas
│┣✗ ${prefix}christmas
│┣✗ ${prefix}3dchristmas
│┣✗ ${prefix}3dbox
│┣✗ ${prefix}waterdrop
│┣✗ ${prefix}lion2
│┣✗ ${prefix}papercut
│┣✗ ${prefix}transformer
│┣✗ ${prefix}neondevil
│┣✗ ${prefix}3davengers
│┣✗ ${prefix}3dstone
│┣✗ ${prefix}3dstone2
│┣✗ ${prefix}summertime
│┣✗ ${prefix}thunder
│┣✗ ${prefix}window
│┣✗ ${prefix}graffiti
│┣✗ ${prefix}graffitibike
│┣✗ ${prefix}pornhub
│┣✗ ${prefix}glitch
│┣✗ ${prefix}blackpink
│┣✗ ${prefix}glitch2
│┣✗ ${prefix}glitch3
│┣✗ ${prefix}3dspace
│┣✗ ${prefix}lion
│┣✗ ${prefix}3dneon
│┣✗ ${prefix}greenneon
│┣✗ ${prefix}bokeh
│┣✗ ${prefix}holographic
│┣✗ ${prefix}bear
│┣✗ ${prefix}wolf
│┣✗ ${prefix}joker
│┣✗ ${prefix}dropwater
│┣✗ ${prefix}dropwater2
│┣✗ ${prefix}thewall
│┣✗ ${prefix}neonlight
│┣✗ ${prefix}natural
│┣✗ ${prefix}carbon
│┣✗ ${prefix}pencil
│┣✗ ${prefix}blackpink2
│┣✗ ${prefix}neon
│┣✗ ${prefix}neonlight2
│┣✗ ${prefix}toxic
│┣✗ ${prefix}strawberry
│┣✗ ${prefix}discovery
│┣✗ ${prefix}1917
│┣✗ ${prefix}sci_fi
│┣✗ ${prefix}ancient
│┣✗ ${prefix}fabric
│┣✗ ${prefix}hoorror
│┣✗ ${prefix}whitebear
│┣✗ ${prefix}juice
│┣✗ ${prefix}batman
│┣✗ ${prefix}multicolor
│┣✗ ${prefix}collwall
│┣✗ ${prefix}wonderful
│┣✗ ${prefix}cool
│┣✗ ${prefix}sketch
│┣✗ ${prefix}marvel
│┣✗ ${prefix}foggy
│┣✗ ${prefix}writing
│┣✗ ${prefix}halloweenfire
│┣✗ ${prefix}halloween
│┣✗ ${prefix}watercolor
│┗✗ ${prefix}classic
╰──────────────◩

╭─────➣❲ *DOWNLOAD* ❳	 
│┏✗ ${prefix}instagram [url]
│┣✗ ${prefix}igtv [url]
│┣✗ ${prefix}igstory [username]
│┣✗ ${prefix}facebook [url]
│┣✗ ${prefix}fbmp3 [url]
│┣✗ ${prefix}twitter [url]
│┣✗ ${prefix}twittermp3 [url]
│┣✗ ${prefix}tiktok [url]
│┣✗ ${prefix}tiktokaudio[url]
│┣✗ ${prefix}tiktoknowm [url]
│┣✗ ${prefix}mediafire [url]
│┣✗ ${prefix}ytmp3 [url|quality]
│┣✗ ${prefix}ytmp4 [url|quality]
│┣✗ ${prefix}getmusic [yt link]
│┣✗ ${prefix}getvideo [yt link]
│┣✗ ${prefix}gitclone [repo link]
│┣✗ ${prefix}soundcloud [url]
│┗✗ ${prefix}zippyshare [url]
╰──────────────◩

╭─────➣❲ *SEARCH* ❳	 
│┏✗ ${prefix}play [query]
│┣✗ ${prefix}song [query]
│┣✗ ${prefix}yts [query]
│┣✗ ${prefix}lyrics [query]
│┣✗ ${prefix}google [query]
│┣✗ ${prefix}playstore [query]
│┣✗ ${prefix}gimage [query]
│┣✗ ${prefix}pinterest [query]
│┣✗ ${prefix}image [query]
│┣✗ ${prefix}film [query]
│┣✗ ${prefix}wallpaper [query]
│┣✗ ${prefix}searchgc [query]
│┣✗ ${prefix}happymod [query]
│┣✗ ${prefix}servermc
│┣✗ ${prefix}mcpedl [query]
│┣✗ ${prefix}tvsearch [query]
│┣✗ ${prefix}wikimedia [query]
│┣✗ ${prefix}ytsearch [query]
│┣✗ ${prefix}ringtone [query]
│┣✗ ${prefix}webtoon [query]
│┣✗ ${prefix}anime [query]
│┣✗ ${prefix}animestory [query]
│┣✗ ${prefix}manga [query]
│┣✗ ${prefix}wattpad [query]
│┣✗ ${prefix}mcserver [ip|port]
│┗✗ ${prefix}drakor [query]
╰──────────────◩

╭─────➣❲ *CONVERT* ❳	 
│┏✗ ${prefix}toimage [reply stick]
│┣✗ ${prefix}sticker [reply img|gif]
│┣✗ ${prefix}take [reply img|gif|stik]
│┣✗ ${prefix}smeme [reply img]
│┣✗ ${prefix}emoji [emoji]
│┣✗ ${prefix}tovideo [reply img]
│┣✗ ${prefix}togif [reply stick]
│┣✗ ${prefix}tourl [reply img]
│┣✗ ${prefix}tovn [reply aud]
│┣✗ ${prefix}tomp3 [reply vn]
│┣✗ ${prefix}toaudio [reply vid]
│┣✗ ${prefix}ebinary [reply txt]
│┣✗ ${prefix}dbinary [reply txt]
│┣✗ ${prefix}tinyurl [link]
│┣✗ ${prefix}styletext [text]
│┣✗ ${prefix}volume [reply aud]
│┣✗ ${prefix}tempo [reply aud]
│┣✗ ${prefix}bass [reply aud]
│┣✗ ${prefix}blown [reply aud]
│┣✗ ${prefix}deep [reply aud]
│┣✗ ${prefix}earrape [reply aud]
│┣✗ ${prefix}fast [reply aud]
│┣✗ ${prefix}fat [reply aud]
│┣✗ ${prefix}nightcore [reply aud]
│┣✗ ${prefix}reverse [reply aud]
│┣✗ ${prefix}robot [reply aud]
│┣✗ ${prefix}slow [reply aud]
│┗✗ ${prefix}squirrel [reply aud]
╰──────────────◩

╭─────➣❲ *IMG EFFECT* ❳	 
│┏✗ ${prefix}wanted
│┣✗ ${prefix}blur
│┣✗ ${prefix}framed
│┣✗ ${prefix}gayeffect
│┣✗ ${prefix}imagesketch
│┣✗ ${prefix}invert
│┣✗ ${prefix}burn
│┣✗ ${prefix}triggeredwebp
│┣✗ ${prefix}shit
│┣✗ ${prefix}rip
│┣✗ ${prefix}jail
│┣✗ ${prefix}beautifuleffect
│┣✗ ${prefix}deleteeffect
│┗✗ ${prefix}pixelate
╰──────────────◩

╭─────➣❲ *RANDOM IMG* ❳	 
│┏✗ ${prefix}coffee
│┣✗ ${prefix}bts
│┣✗ ${prefix}woof
│┣✗ ${prefix}meow
│┣✗ ${prefix}lizard
│┣✗ ${prefix}wallneon
│┣✗ ${prefix}wallpubg
│┣✗ ${prefix}wallml
│┣✗ ${prefix}wallrandom
│┣✗ ${prefix}wallcode
│┣✗ ${prefix}animewall [query]
│┗✗ ${prefix}animewall2 [query]
╰──────────────◩

╭─────➣❲ *EMOTE* ❳	 
│┏✗ ${prefix}instagramemoji
│┣✗ ${prefix}facebookemoji
│┣✗ ${prefix}iphoneemoji
│┣✗ ${prefix}samsungemoji
│┣✗ ${prefix}joyemoji
│┣✗ ${prefix}skypeemoji
│┣✗ ${prefix}twitteremoji
│┣✗ ${prefix}whatsappemoji
│┣✗ ${prefix}microsoftemoji
│┣✗ ${prefix}googleemoji
│┣✗ ${prefix}pediaemoji
│┗✗ ${prefix}microsoftemoji
╰──────────────◩

╭─────➣❲ *ANIME* ❳	 
│┏✗ ${prefix}naruto
│┣✗ ${prefix}boruto
│┣✗ ${prefix}mikey
│┣✗ ${prefix}yaoi
│┣✗ ${prefix}neko2
│┣✗ ${prefix}waifu
│┣✗ ${prefix}waifu2
│┣✗ ${prefix}awoo2
│┣✗ ${prefix}shinobu
│┣✗ ${prefix}waifu3
│┣✗ ${prefix}foxgirl
│┣✗ ${prefix}megumin2
│┣✗ ${prefix}loli
│┣✗ ${prefix}8ball
│┣✗ ${prefix}animenom
│┣✗ ${prefix}goose
│┣✗ ${prefix}avatar
│┣✗ ${prefix}tickle
│┣✗ ${prefix}gecg
│┣✗ ${prefix}feed
│┣✗ ${prefix}animeslap
│┣✗ ${prefix}animespank
│┣✗ ${prefix}animepat
│┣✗ ${prefix}animeneko
│┣✗ ${prefix}animekiss
│┣✗ ${prefix}animewlp
│┣✗ ${prefix}animecuddle
│┣✗ ${prefix}animecry
│┣✗ ${prefix}animekill
│┣✗ ${prefix}animelick
│┣✗ ${prefix}animebite
│┣✗ ${prefix}animeyeet
│┣✗ ${prefix}animebully
│┣✗ ${prefix}animebonk
│┣✗ ${prefix}animewink
│┣✗ ${prefix}animepoke
│┣✗ ${prefix}animesmile
│┣✗ ${prefix}animewave
│┣✗ ${prefix}animeawoo
│┣✗ ${prefix}animeblush
│┣✗ ${prefix}animesmug
│┣✗ ${prefix}animeglomp
│┣✗ ${prefix}animehappy
│┣✗ ${prefix}animedance
│┣✗ ${prefix}animecringe
│┣✗ ${prefix}animehighfive
│┣✗ ${prefix}animehandhold
│┣✗ ${prefix}animemegumin
│┣✗ ${prefix}smug2
│┗✗ ${prefix}couplepp
╰──────────────◩

╭─────➣❲ *STICKER* ❳	 
│┏✗ ${prefix}patrick
│┣✗ ${prefix}emoji
│┣✗ ${prefix}emojimix
│┣✗ ${prefix}attp
│┣✗ ${prefix}ttp
│┣✗ ${prefix}doge
│┗✗ ${prefix}lovesticker
╰──────────────◩

╭─────➣❲ *ANIME STICKER* ❳
│┏✗ ${prefix}loli
│┣✗ ${prefix}bully
│┣✗ ${prefix}cuddle
│┣✗ ${prefix}cry
│┣✗ ${prefix}hug
│┣✗ ${prefix}awoo
│┣✗ ${prefix}kiss
│┣✗ ${prefix}lick
│┣✗ ${prefix}pat
│┣✗ ${prefix}smug
│┣✗ ${prefix}bonk
│┣✗ ${prefix}yeet
│┣✗ ${prefix}blush
│┣✗ ${prefix}smile
│┣✗ ${prefix}wave
│┣✗ ${prefix}highfive
│┣✗ ${prefix}handhold
│┣✗ ${prefix}nom
│┣✗ ${prefix}glomp
│┣✗ ${prefix}bite
│┣✗ ${prefix}slap
│┣✗ ${prefix}kill
│┣✗ ${prefix}happy
│┣✗ ${prefix}wink
│┣✗ ${prefix}poke
│┣✗ ${prefix}dance
│┣✗ ${prefix}cringe
│┣✗ ${prefix}neko
│┗✗ ${prefix}gura
╰──────────────◩

╭─────➣❲ *NSFW* ❳	 
│┏✗ ${prefix}hentaivideo
│┣✗ ${prefix}yuri
│┣✗ ${prefix}masturbation
│┣✗ ${prefix}thighs
│┣✗ ${prefix}pussy
│┣✗ ${prefix}panties
│┣✗ ${prefix}orgy
│┣✗ ${prefix}ahegao
│┣✗ ${prefix}ass
│┣✗ ${prefix}bdsm
│┣✗ ${prefix}blowjob
│┣✗ ${prefix}cuckold
│┣✗ ${prefix}ero
│┣✗ ${prefix}gasm
│┣✗ ${prefix}cum
│┣✗ ${prefix}femdom
│┣✗ ${prefix}foot
│┣✗ ${prefix}gangbang
│┣✗ ${prefix}glasses
│┣✗ ${prefix}jahy
│┣✗ ${prefix}trap
│┣✗ ${prefix}blowjobgif
│┣✗ ${prefix}spank
│┣✗ ${prefix}hneko
│┗✗ ${prefix}nwaifu
╰──────────────◩

╭─────➣❲ *FUN* ❳	 
│┏✗ ${prefix}how [text
│┣✗ ${prefix}when [text]
│┣✗ ${prefix}where [text]
│┣✗ ${prefix}is [text]
│┣✗ ${prefix}what [text]
│┣✗ ${prefix}can [text]
│┣✗ ${prefix}rate [text]
│┣✗ ${prefix}wangy [text]
│┣✗ ${prefix}cantikcheck [tag]
│┣✗ ${prefix}luarbiasacheck [tag]
│┣✗ ${prefix}cantikcheck [tag]
│┣✗ ${prefix}lesbicheck [tag]
│┣✗ ${prefix}gaycheck [tag]
│┣✗ ${prefix}pakboy
│┣✗ ${prefix}imutcheck [tag]
│┣✗ ${prefix}jelekcheck [tag]
│┣✗ ${prefix}terangsangcheck [tag]
│┣✗ ${prefix}menyenangkancheck [tag]
│┣✗ ${prefix}jadian
│┣✗ ${prefix}jodohku
│┣✗ ${prefix}panas
│┣✗ ${prefix}sexy
│┣✗ ${prefix}bodoh
│┣✗ ${prefix}tampan
│┣✗ ${prefix}imut
│┣✗ ${prefix}cantik
│┣✗ ${prefix}lesbi
│┣✗ ${prefix}noob
│┣✗ ${prefix}bajingan
│┣✗ ${prefix}konyol
│┣✗ ${prefix}kutubuku
│┣✗ ${prefix}gay
│┣✗ ${prefix}pintar
│┣✗ ${prefix}anjing
│┣✗ ${prefix}terangsang
│┣✗ ${prefix}memek
│┣✗ ${prefix}wibu
│┣✗ ${prefix}sadboy
│┣✗ ${prefix}sadgirl
│┣✗ ${prefix}buaya
│┗✗ ${prefix}pakboy
╰──────────────◩

╭─────➣❲ *SOUND* ❳	 
│┏✗ ${prefix}sound1
│┣✗ ${prefix}sound2
│┣✗ ${prefix}sound3
│┣✗ ${prefix}sound4
│┣✗ ${prefix}sound5
│┣✗ ${prefix}sound6
│┣✗ ${prefix}sound7
│┣✗ ${prefix}sound8
│┣✗ ${prefix}sound9
│┣✗ ${prefix}sound10
│┣✗ ${prefix}sound11
│┣✗ ${prefix}sound12
│┣✗ ${prefix}sound13
│┣✗ ${prefix}sound14
│┣✗ ${prefix}sound15
│┣✗ ${prefix}sound16
│┣✗ ${prefix}sound17
│┣✗ ${prefix}sound18
│┣✗ ${prefix}sound19
│┣✗ ${prefix}sound20
│┣✗ ${prefix}sound21
│┣✗ ${prefix}sound22
│┣✗ ${prefix}sound23
│┣✗ ${prefix}sound24
│┣✗ ${prefix}sound25
│┣✗ ${prefix}sound26
│┣✗ ${prefix}sound27
│┣✗ ${prefix}sound28
│┣✗ ${prefix}sound29
│┣✗ ${prefix}sound30
│┣✗ ${prefix}sound31
│┣✗ ${prefix}sound32
│┣✗ ${prefix}sound33
│┣✗ ${prefix}sound34
│┣✗ ${prefix}sound35
│┣✗ ${prefix}sound36
│┣✗ ${prefix}sound37
│┣✗ ${prefix}sound38
│┣✗ ${prefix}sound39
│┣✗ ${prefix}sound40
│┣✗ ${prefix}sound41
│┣✗ ${prefix}sound42
│┣✗ ${prefix}sound43
│┣✗ ${prefix}sound44
│┣✗ ${prefix}sound45
│┣✗ ${prefix}sound46
│┣✗ ${prefix}sound47
│┣✗ ${prefix}sound48
│┣✗ ${prefix}sound49
│┣✗ ${prefix}sound50
│┣✗ ${prefix}sound51
│┣✗ ${prefix}sound52
│┣✗ ${prefix}sound53
│┣✗ ${prefix}sound54
│┣✗ ${prefix}sound55
│┣✗ ${prefix}sound56
│┣✗ ${prefix}sound57
│┣✗ ${prefix}sound58
│┣✗ ${prefix}sound59
│┣✗ ${prefix}sound60
│┣✗ ${prefix}sound61
│┣✗ ${prefix}sound62
│┣✗ ${prefix}sound63
│┣✗ ${prefix}sound64
│┣✗ ${prefix}sound65
│┣✗ ${prefix}sound66
│┣✗ ${prefix}sound67
│┣✗ ${prefix}sound68
│┣✗ ${prefix}sound69
│┣✗ ${prefix}sound70
│┣✗ ${prefix}sound71
│┣✗ ${prefix}sound72
│┣✗ ${prefix}sound73
│┣✗ ${prefix}sound74
│┣✗ ${prefix}sound75
│┣✗ ${prefix}sound76
│┣✗ ${prefix}sound77
│┣✗ ${prefix}sound78
│┣✗ ${prefix}sound79
│┣✗ ${prefix}sound80
│┣✗ ${prefix}sound81
│┣✗ ${prefix}sound82
│┣✗ ${prefix}sound83
│┣✗ ${prefix}sound84
│┣✗ ${prefix}sound85
│┣✗ ${prefix}sound86
│┣✗ ${prefix}sound87
│┣✗ ${prefix}sound88
│┣✗ ${prefix}sound89
│┣✗ ${prefix}sound90
│┣✗ ${prefix}sound91
│┣✗ ${prefix}sound92
│┣✗ ${prefix}sound93
│┣✗ ${prefix}sound94
│┣✗ ${prefix}sound95
│┣✗ ${prefix}sound96
│┣✗ ${prefix}sound97
│┣✗ ${prefix}sound98
│┣✗ ${prefix}sound99
│┣✗ ${prefix}sound100
│┣✗ ${prefix}sound101
│┣✗ ${prefix}sound102
│┣✗ ${prefix}sound103
│┣✗ ${prefix}sound104
│┣✗ ${prefix}sound105
│┣✗ ${prefix}sound106
│┣✗ ${prefix}sound107
│┣✗ ${prefix}sound108
│┣✗ ${prefix}sound109
│┣✗ ${prefix}sound110
│┣✗ ${prefix}sound111
│┣✗ ${prefix}sound112
│┣✗ ${prefix}sound113
│┣✗ ${prefix}sound114
│┣✗ ${prefix}sound115
│┣✗ ${prefix}sound116
│┣✗ ${prefix}sound117
│┣✗ ${prefix}sound118
│┣✗ ${prefix}sound119
│┣✗ ${prefix}sound120
│┣✗ ${prefix}sound121
│┣✗ ${prefix}sound122
│┣✗ ${prefix}sound123
│┣✗ ${prefix}sound124
│┣✗ ${prefix}sound125
│┣✗ ${prefix}sound126
│┣✗ ${prefix}sound127
│┣✗ ${prefix}sound128
│┣✗ ${prefix}sound129
│┣✗ ${prefix}sound130
│┣✗ ${prefix}sound131
│┣✗ ${prefix}sound132
│┣✗ ${prefix}sound133
│┣✗ ${prefix}sound134
│┣✗ ${prefix}sound135
│┣✗ ${prefix}sound136
│┣✗ ${prefix}sound137
│┣✗ ${prefix}sound138
│┣✗ ${prefix}sound139
│┣✗ ${prefix}sound140
│┣✗ ${prefix}sound141
│┣✗ ${prefix}sound142
│┣✗ ${prefix}sound143
│┣✗ ${prefix}sound144
│┣✗ ${prefix}sound145
│┣✗ ${prefix}sound146
│┣✗ ${prefix}sound147
│┣✗ ${prefix}sound148
│┣✗ ${prefix}sound149
│┣✗ ${prefix}sound150
│┣✗ ${prefix}sound151
│┣✗ ${prefix}sound152
│┣✗ ${prefix}sound153
│┣✗ ${prefix}sound154
│┣✗ ${prefix}sound155
│┣✗ ${prefix}sound156
│┣✗ ${prefix}sound157
│┣✗ ${prefix}sound158
│┣✗ ${prefix}sound159
│┣✗ ${prefix}sound160
│┗✗ ${prefix}sound161
╰──────────────◩

╭─────➣❲ *GAME* ❳	 
│┏✗ ${prefix}truth
│┣✗ ${prefix}dare
│┣✗ ${prefix}tictactoe
│┣✗ ${prefix}delttt
│┣✗ ${prefix}tebak [option]
│┣✗ ${prefix}caklontong
│┣✗ ${prefix}math [mode]
│┗  ${prefix}suitpvp [tag]
╰─────────────◩

╭───➣❲ *ANONYMOUS CHAT* ❳	 
│┏✗ ${prefix}anonymous
│┣✗ ${prefix}start
│┣✗ ${prefix}next
│┗✗ ${prefix}leave
╰──────────────◩

╭─────➣❲ *TOOL* ❳	 
│┏✗ ${prefix}translate [text]
│┣✗ ${prefix}fliptext [text]
│┗✗ ${prefix}toletter [number]
╰─────────────◩

╭─────➣❲ *DATABASE* ❳	 
│┏✗ ${prefix}setcmd
│┣✗ ${prefix}listcmd
│┣✗ ${prefix}delcmd
│┣✗ ${prefix}lockcmd
│┣✗ ${prefix}addmsg
│┣✗ ${prefix}listmsg
│┣✗ ${prefix}getmsg
│┗✗ ${prefix}delmsg
╰──────────────◩


╭─────➣❲ *lNDO* ❳	 
│┏✗ ${prefix}darkjoke
│┣✗ ${prefix}quotes
│┣✗ ${prefix}animequotes
│┣✗ ${prefix}jalantikus-meme
│┣✗ ${prefix}merdeka-news 
│┣✗ ${prefix}kontan-news 
│┣✗ ${prefix}cnbc-news 
│┣✗ ${prefix}tribun-news 
│┣✗ ${prefix}indozone-news 
│┣✗ ${prefix}kompas-news 
│┣✗ ${prefix}detik-news 
│┣✗ ${prefix}daily-news 
│┣✗ ${prefix}inews-news 
│┣✗ ${prefix}okezone-news 
│┣✗ ${prefix}sindo-news 
│┣✗ ${prefix}tempo-news 
│┣✗ ${prefix}antara-news 
│┣✗ ${prefix}cnn-news 
│┣✗ ${prefix}fajar-news 
│┣✗ ${prefix}cinemaschedule
│┣✗ ${prefix}wiki
│┣✗ ${prefix}covidindo
│┣✗ ${prefix}earthquake
│┗✗ ${prefix}tvschedule
╰──────────────◩

╭─────➣❲ *INDO HSCOPE* ❳	 
│┏✗ ${prefix}nomorhoki
│┣✗ ${prefix}artimimpi 
│┣✗ ${prefix}artinama 
│┣✗ ${prefix}ramaljodoh 
│┣✗ ${prefix}ramaljodohbali 
│┣✗ ${prefix}suamiistri 
│┣✗ ${prefix}ramalcinta 
│┣✗ ${prefix}cocoknama 
│┣✗ ${prefix}pasangan 
│┣✗ ${prefix}jadiannikah 
│┣✗ ${prefix}sifatusaha 
│┣✗ ${prefix}rezeki 
│┣✗ ${prefix}pekerjaan 
│┣✗ ${prefix}nasib 
│┣✗ ${prefix}penyakit 
│┣✗ ${prefix}tarot 
│┣✗ ${prefix}fengshui 
│┣✗ ${prefix}haribaik 
│┣✗ ${prefix}harisangar 
│┣✗ ${prefix}harisial
│┣✗ ${prefix}nagahari
│┣✗ ${prefix}arahrezeki
│┣✗ ${prefix}peruntungan 
│┣✗ ${prefix}weton 
│┣✗ ${prefix}karakter
│┣✗ ${prefix}keberuntungan
│┣✗ ${prefix}memancing
│┣✗ ${prefix}masasubur
│┣✗ ${prefix}zodiak
│┗✗ ${prefix}shio
╰──────────────◩

╭─────➣❲ *OTHER* ❳	 
│┏✗ ${prefix}afk
│┣✗ ${prefix}readmore [text]
│┣✗ ${prefix}toviewonce
│┣✗ ${prefix}chatinfo
│┣✗ ${prefix}alive
│┣✗ ${prefix}script
│┣✗ ${prefix}speedtest
│┣✗ ${prefix}ping
│┣✗ ${prefix}owner
│┣✗ ${prefix}menu
│┣✗ ${prefix}delete
│┣✗ ${prefix}chatinfo
│┣✗ ${prefix}quoted
│┣✗ ${prefix}listpc
│┣✗ ${prefix}listgc
│┣✗ ${prefix}donate
│┣✗ ${prefix}request
│┗✗ ${prefix}report [bug]
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'ownermenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Owner Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *OWNER* ❳	 
│┏✗ ${prefix}self
│┣✗ ${prefix}public
│┣✗ ${prefix}antitag
│┣✗ ${prefix}ban [add/del]
│┣✗ ${prefix}banchat [on/off]
│┣✗ ${prefix}join [link]
│┣✗ ${prefix}leavegc
│┣✗ ${prefix}setbio
│┣✗ ${prefix}block [user]
│┣✗ ${prefix}unblock [user]
│┣✗ ${prefix}bcgroup [text]
│┣✗ ${prefix}bcall [text]
│┣✗ ${prefix}bcimage [image]
│┣✗ ${prefix}bcvideo [video]
│┣✗ ${prefix}bcaudio [audio]
│┣✗ ${prefix}bcloc [text]
│┣✗ ${prefix}setppbot [image]
│┗✗ ${prefix}setexif
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'groupmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Group Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *GROUP* ❳	 
│┏✗ ${prefix}groupsetting
│┣✗ ${prefix}grouplink
│┣✗ ${prefix}ephemeral [option]
│┣✗ ${prefix}setgcpp [image]
│┣✗ ${prefix}setname [text]
│┣✗ ${prefix}setdesc [text]
│┣✗ ${prefix}group
│┣✗ ${prefix}botgroups
│┣✗ ${prefix}resetgrouplink
│┣✗ ${prefix}editinfo [option]
│┣✗ ${prefix}add [user]
│┣✗ ${prefix}kick [reply/tag]
│┣✗ ${prefix}hidetag [text]
│┣✗ ${prefix}tagall [text]
│┣✗ ${prefix}autosticker [on/off]
│┣✗ ${prefix}autostickerpc [on/off]
│┣✗ ${prefix}leveling [on/off]
│┣✗ ${prefix}antilinkgc [on/off]
│┣✗ ${prefix}antilinktg [on/off]
│┣✗ ${prefix}antilinktt [on/off]
│┣✗ ${prefix}antilinkytch [on/off]
│┣✗ ${prefix}antilinkytvid [on/off]
│┣✗ ${prefix}antilinkig [on/off]
│┣✗ ${prefix}antilinkfb [on/off]
│┣✗ ${prefix}antilinktwit [on/off]
│┣✗ ${prefix}antilinkall [on/off]
│┣✗ ${prefix}antivirus [on/off]
│┣✗ ${prefix}antitoxic [on/off]
│┣✗ ${prefix}antiwame [on/off]
│┣✗ ${prefix}nsfw [on/off]
│┣✗ ${prefix}promote [reply/tag]
│┣✗ ${prefix}demote [reply/tag]
│┣✗ ${prefix}react [reply emoji]
│┣✗ ${prefix}getpp [reply user]
│┣✗ ${prefix}vote
│┣✗ ${prefix}devote
│┣✗ ${prefix}upvote
│┣✗ ${prefix}checkvote
│┗✗ ${prefix}delvote
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'rpgmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Rpg Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *RPG* ❳	 
│┏✗ ${prefix}hunt
│┣✗ ${prefix}mine
│┣✗ ${prefix}fish
│┣✗ ${prefix}heal
│┣✗ ${prefix}blood
│┣✗ ${prefix}stab
│┣✗ ${prefix}buy
│┣✗ ${prefix}sell
│┣✗ ${prefix}profile
│┣✗ ${prefix}inventory
│┗✗ ${prefix}leaderboard
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'makermenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Maker Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *MAKER* ❳	 
│┏✗ ${prefix}candy
│┣✗ ${prefix}8bit
│┣✗ ${prefix}horror
│┣✗ ${prefix}hoorror
│┣✗ ${prefix}retro
│┣✗ ${prefix}blackpinkneon
│┣✗ ${prefix}deepsea
│┣✗ ${prefix}scifi
│┣✗ ${prefix}fiction
│┣✗ ${prefix}berry
│┣✗ ${prefix}fruitjuice
│┣✗ ${prefix}biscuit
│┣✗ ${prefix}wood
│┣✗ ${prefix}chocolate
│┣✗ ${prefix}matrix
│┣✗ ${prefix}blood
│┣✗ ${prefix}halloween
│┣✗ ${prefix}wicker
│┣✗ ${prefix}darkgold
│┣✗ ${prefix}firework
│┣✗ ${prefix}skeleton
│┣✗ ${prefix}sand
│┣✗ ${prefix}glue
│┣✗ ${prefix}leaves
│┣✗ ${prefix}magma
│┣✗ ${prefix}lava
│┣✗ ${prefix}rock
│┣✗ ${prefix}bloodglas
│┣✗ ${prefix}underwater
│┣✗ ${prefix}textmaker
│┣✗ ${prefix}honey
│┣✗ ${prefix}ice
│┣✗ ${prefix}watercolor
│┣✗ ${prefix}multicolor
│┣✗ ${prefix}snow
│┣✗ ${prefix}harrypot
│┣✗ ${prefix}harrypotter
│┣✗ ${prefix}brokenglass
│┣✗ ${prefix}waterpipe
│┣✗ ${prefix}spooky
│┣✗ ${prefix}circuit
│┣✗ ${prefix}metallic
│┣✗ ${prefix}demon
│┣✗ ${prefix}sparklechristmas
│┣✗ ${prefix}christmas
│┣✗ ${prefix}3dchristmas
│┣✗ ${prefix}3dbox
│┣✗ ${prefix}waterdrop
│┣✗ ${prefix}lion2
│┣✗ ${prefix}papercut
│┣✗ ${prefix}transformer
│┣✗ ${prefix}neondevil
│┣✗ ${prefix}3davengers
│┣✗ ${prefix}3dstone
│┣✗ ${prefix}3dstone2
│┣✗ ${prefix}summertime
│┣✗ ${prefix}thunder
│┣✗ ${prefix}window
│┣✗ ${prefix}graffiti
│┣✗ ${prefix}graffitibike
│┣✗ ${prefix}pornhub
│┣✗ ${prefix}glitch
│┣✗ ${prefix}blackpink
│┣✗ ${prefix}glitch2
│┣✗ ${prefix}glitch3
│┣✗ ${prefix}3dspace
│┣✗ ${prefix}lion
│┣✗ ${prefix}3dneon
│┣✗ ${prefix}greenneon
│┣✗ ${prefix}bokeh
│┣✗ ${prefix}holographic
│┣✗ ${prefix}bear
│┣✗ ${prefix}wolf
│┣✗ ${prefix}joker
│┣✗ ${prefix}dropwater
│┣✗ ${prefix}dropwater2
│┣✗ ${prefix}thewall
│┣✗ ${prefix}neonlight
│┣✗ ${prefix}natural
│┣✗ ${prefix}carbon
│┣✗ ${prefix}pencil
│┣✗ ${prefix}blackpink2
│┣✗ ${prefix}neon
│┣✗ ${prefix}neonlight2
│┣✗ ${prefix}toxic
│┣✗ ${prefix}strawberry
│┣✗ ${prefix}discovery
│┣✗ ${prefix}1917
│┣✗ ${prefix}sci_fi
│┣✗ ${prefix}ancient
│┣✗ ${prefix}fabric
│┣✗ ${prefix}hoorror
│┣✗ ${prefix}whitebear
│┣✗ ${prefix}juice
│┣✗ ${prefix}batman
│┣✗ ${prefix}multicolor
│┣✗ ${prefix}collwall
│┣✗ ${prefix}wonderful
│┣✗ ${prefix}cool
│┣✗ ${prefix}sketch
│┣✗ ${prefix}marvel
│┣✗ ${prefix}foggy
│┣✗ ${prefix}writing
│┣✗ ${prefix}halloweenfire
│┣✗ ${prefix}halloween
│┣✗ ${prefix}watercolor
│┗✗ ${prefix}classic
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'downloadmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Download Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *DOWNLOAD* ❳	 
│┏✗ ${prefix}instagram [url]
│┣✗ ${prefix}igtv [url]
│┣✗ ${prefix}igstory [username]
│┣✗ ${prefix}facebook [url]
│┣✗ ${prefix}fbmp3 [url]
│┣✗ ${prefix}twitter [url]
│┣✗ ${prefix}twittermp3 [url]
│┣✗ ${prefix}tiktok [url]
│┣✗ ${prefix}tiktokaudio [url]
│┣✗ ${prefix}tiktoknowm [url]
│┣✗ ${prefix}instagram [url]
│┣✗ ${prefix}igstory [url]
│┣✗ ${prefix}mediafire [url]
│┣✗ ${prefix}ytmp3 [url|quality]
│┣✗ ${prefix}ytmp4 [url|quality]
│┣✗ ${prefix}getmusic [yt link]
│┣✗ ${prefix}getvideo [yt link]
│┣✗ ${prefix}gitclone [repo link]
│┣✗ ${prefix}soundcloud [url]
│┗✗ ${prefix}zippyshare [url]
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'searchmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Search Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *SEARCH* ❳	 
│┏✗ ${prefix}play [query]
│┣✗ ${prefix}song [query]
│┣✗ ${prefix}yts [query]
│┣✗ ${prefix}lyrics [query]
│┣✗ ${prefix}google [query]
│┣✗ ${prefix}gimage [query]
│┣✗ ${prefix}pinterest [query]
│┣✗ ${prefix}image [query]
│┣✗ ${prefix}film [query]
│┣✗ ${prefix}playstore [query]
│┣✗ ${prefix}wallpaper [query]
│┣✗ ${prefix}searchgc [query]
│┣✗ ${prefix}happymod [query]
│┣✗ ${prefix}servermc
│┣✗ ${prefix}mcpedl [query]
│┣✗ ${prefix}tvsearch [query]
│┣✗ ${prefix}wikimedia [query]
│┣✗ ${prefix}ytsearch [query]
│┣✗ ${prefix}ringtone [query]
│┣✗ ${prefix}webtoon [query]
│┣✗ ${prefix}anime [query]
│┣✗ ${prefix}manga [query]
│┣✗ ${prefix}wattpad [query]
│┣✗ ${prefix}mcserver [ip|port]
│┗✗ ${prefix}drakor [query]
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'convertmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Convert Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *CONVERT* ❳	 
│┏✗ ${prefix}toimage [reply stick]
│┣✗ ${prefix}sticker [reply img|gif]
│┣✗ ${prefix}take [reply img|gif|stik]
│┣✗ ${prefix}smeme [reply img]
│┣✗ ${prefix}emoji [emoji]
│┣✗ ${prefix}tovideo [reply img]
│┣✗ ${prefix}togif [reply stick]
│┣✗ ${prefix}tourl [reply img]
│┣✗ ${prefix}tovn [reply aud]
│┣✗ ${prefix}tomp3 [reply vn]
│┣✗ ${prefix}toaudio [reply vid]
│┣✗ ${prefix}ebinary [reply txt]
│┣✗ ${prefix}dbinary [reply txt]
│┣✗ ${prefix}tinyurl [link]
│┣✗ ${prefix}styletext [text]
│┣✗ ${prefix}volume [reply aud]
│┣✗ ${prefix}tempo [reply aud]
│┣✗ ${prefix}bass [reply aud]
│┣✗ ${prefix}blown [reply aud]
│┣✗ ${prefix}deep [reply aud]
│┣✗ ${prefix}earrape [reply aud]
│┣✗ ${prefix}fast [reply aud]
│┣✗ ${prefix}fat [reply aud]
│┣✗ ${prefix}nightcore [reply aud]
│┣✗ ${prefix}reverse [reply aud]
│┣✗ ${prefix}robot [reply aud]
│┣✗ ${prefix}slow [reply aud]
│┗✗ ${prefix}squirrel [reply aud]
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'randomimagemenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Random Image Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *RANDOM IMG* ❳	 
│┏✗ ${prefix}coffee
│┣✗ ${prefix}bts
│┣✗ ${prefix}woof
│┣✗ ${prefix}meow
│┣✗ ${prefix}lizard
│┣✗ ${prefix}wallneon
│┣✗ ${prefix}wallpubg
│┣✗ ${prefix}wallml
│┣✗ ${prefix}wallrandom
│┣✗ ${prefix}wallcode
│┣✗ ${prefix}animewall [query]
│┗✗ ${prefix}animewall2 [query]
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break

case 'emotemenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Emote Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *EMOTE* ❳	 
│┏✗ ${prefix}instagramemoji
│┣✗ ${prefix}facebookemoji
│┣✗ ${prefix}iphoneemoji
│┣✗ ${prefix}samsungemoji
│┣✗ ${prefix}joyemoji
│┣✗ ${prefix}skypeemoji
│┣✗ ${prefix}twitteremoji
│┣✗ ${prefix}whatsappemoji
│┣✗ ${prefix}microsoftemoji
│┣✗ ${prefix}googleemoji
│┣✗ ${prefix}pediaemoji
│┗✗ ${prefix}microsoftemoji
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'imageeffectmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Image Effect Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *IMG EFFECT* ❳	 
│┏✗ ${prefix}wanted
│┣✗ ${prefix}blur
│┣✗ ${prefix}framed
│┣✗ ${prefix}gayeffect
│┣✗ ${prefix}imagesketch
│┣✗ ${prefix}invert
│┣✗ ${prefix}burn
│┣✗ ${prefix}triggeredwebp
│┣✗ ${prefix}shit
│┣✗ ${prefix}rip
│┣✗ ${prefix}jail
│┣✗ ${prefix}beautifuleffect
│┣✗ ${prefix}deleteeffect
│┗✗ ${prefix}pixelate
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'animemenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Anime Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *ANIME* ❳	 
│┏✗ ${prefix}naruto
│┣✗ ${prefix}boruto
│┣✗ ${prefix}mikey
│┣✗ ${prefix}yaoi
│┣✗ ${prefix}neko2
│┣✗ ${prefix}waifu
│┣✗ ${prefix}waifu3
│┣✗ ${prefix}shinobu
│┣✗ ${prefix}awoo2
│┣✗ ${prefix}waifu2
│┣✗ ${prefix}foxgirl
│┣✗ ${prefix}animenom
│┣✗ ${prefix}goose
│┣✗ ${prefix}8ball
│┣✗ ${prefix}avatar
│┣✗ ${prefix}tickle
│┣✗ ${prefix}gecg
│┣✗ ${prefix}feed
│┣✗ ${prefix}animeslap
│┣✗ ${prefix}animespank
│┣✗ ${prefix}animepat
│┣✗ ${prefix}animeneko
│┣✗ ${prefix}animekiss
│┣✗ ${prefix}animewlp
│┣✗ ${prefix}animecuddle
│┣✗ ${prefix}animecry
│┣✗ ${prefix}animekill
│┣✗ ${prefix}animelick
│┣✗ ${prefix}animebite
│┣✗ ${prefix}animeyeet
│┣✗ ${prefix}animebully
│┣✗ ${prefix}animebonk
│┣✗ ${prefix}animewink
│┣✗ ${prefix}animepoke
│┣✗ ${prefix}animesmile
│┣✗ ${prefix}animewave
│┣✗ ${prefix}animeawoo
│┣✗ ${prefix}animeblush
│┣✗ ${prefix}animesmug
│┣✗ ${prefix}animeglomp
│┣✗ ${prefix}animehappy
│┣✗ ${prefix}animedance
│┣✗ ${prefix}animecringe
│┣✗ ${prefix}animehighfive
│┣✗ ${prefix}animehandhold
│┣✗ ${prefix}animemegumin
│┣✗ ${prefix}megumin2
│┣✗ ${prefix}loli
│┗✗ ${prefix}couplepp
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'stickermenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Sticker Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *STICKER* ❳	 
│┏✗ ${prefix}patrick
│┣✗ ${prefix}emoji
│┣✗ ${prefix}emojimix
│┣✗ ${prefix}attp
│┣✗ ${prefix}ttp
│┣✗ ${prefix}doge
│┗✗ ${prefix}lovesticker
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'animestickermenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Anime Sticker Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *ANIME STICKER* ❳	 
│┏✗ ${prefix}loli
│┣✗ ${prefix}bully
│┣✗ ${prefix}cuddle
│┣✗ ${prefix}cry
│┣✗ ${prefix}hug
│┣✗ ${prefix}awoo
│┣✗ ${prefix}kiss
│┣✗ ${prefix}lick
│┣✗ ${prefix}pat
│┣✗ ${prefix}smug
│┣✗ ${prefix}bonk
│┣✗ ${prefix}yeet
│┣✗ ${prefix}blush
│┣✗ ${prefix}smile
│┣✗ ${prefix}wave
│┣✗ ${prefix}highfive
│┣✗ ${prefix}handhold
│┣✗ ${prefix}nom
│┣✗ ${prefix}glomp
│┣✗ ${prefix}bite
│┣✗ ${prefix}slap
│┣✗ ${prefix}kill
│┣✗ ${prefix}happy
│┣✗ ${prefix}wink
│┣✗ ${prefix}poke
│┣✗ ${prefix}dance
│┣✗ ${prefix}cringe
│┣✗ ${prefix}neko
│┗✗ ${prefix}gura
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'nsfwmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Nsfw Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *NSFW* ❳	 
│┏✗ ${prefix}hentaivideo
│┣✗ ${prefix}yuri
│┣✗ ${prefix}masturbation
│┣✗ ${prefix}thighs
│┣✗ ${prefix}pussy
│┣✗ ${prefix}panties
│┣✗ ${prefix}orgy
│┣✗ ${prefix}ahegao
│┣✗ ${prefix}ass
│┣✗ ${prefix}bdsm
│┣✗ ${prefix}blowjob
│┣✗ ${prefix}cuckold
│┣✗ ${prefix}ero
│┣✗ ${prefix}gasm
│┣✗ ${prefix}cum
│┣✗ ${prefix}femdom
│┣✗ ${prefix}foot
│┣✗ ${prefix}gangbang
│┣✗ ${prefix}glasses
│┣✗ ${prefix}jahy
│┣✗ ${prefix}trap
│┣✗ ${prefix}blowjobgif
│┣✗ ${prefix}spank
│┣✗ ${prefix}hneko
│┗✗ ${prefix}nwaifu
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'funmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Fun Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *Fun* ❳	 
│┏✗ ${prefix}how [text
│┣✗ ${prefix}when [text]
│┣✗ ${prefix}where [text]
│┣✗ ${prefix}is [text]
│┣✗ ${prefix}what [text]
│┣✗ ${prefix}can [text]
│┣✗ ${prefix}rate [text]
│┣✗ ${prefix}wangy [text]
│┣✗ ${prefix}cantikcheck [tag]
│┣✗ ${prefix}luarbiasacheck [tag]
│┣✗ ${prefix}cantikcheck [tag]
│┣✗ ${prefix}lesbicheck [tag]
│┣✗ ${prefix}gaycheck [tag]
│┣✗ ${prefix}imutcheck [tag]
│┣✗ ${prefix}jelekcheck [tag]
│┣✗ ${prefix}terangsangcheck [tag]
│┣✗ ${prefix}menyenangkancheck [tag]
│┣✗ ${prefix}jadian
│┣✗ ${prefix}jodohku
│┣✗ ${prefix}panas
│┣✗ ${prefix}sexy
│┣✗ ${prefix}bodoh
│┣✗ ${prefix}tampan
│┣✗ ${prefix}imut
│┣✗ ${prefix}cantik
│┣✗ ${prefix}lesbi
│┣✗ ${prefix}noob
│┣✗ ${prefix}bajingan
│┣✗ ${prefix}konyol
│┣✗ ${prefix}kutubuku
│┣✗ ${prefix}gay
│┣✗ ${prefix}pintar
│┣✗ ${prefix}anjing
│┣✗ ${prefix}terangsang
│┣✗ ${prefix}memek
│┣✗ ${prefix}wibu
│┣✗ ${prefix}pakboy
│┣✗ ${prefix}buaya
│┗✗ ${prefix}pakboy
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'soundmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Sound Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *Sound* ❳	 
│┏✗ ${prefix}sound1
│┣✗ ${prefix}sound2
│┣✗ ${prefix}sound3
│┣✗ ${prefix}sound4
│┣✗ ${prefix}sound5
│┣✗ ${prefix}sound6
│┣✗ ${prefix}sound7
│┣✗ ${prefix}sound8
│┣✗ ${prefix}sound9
│┣✗ ${prefix}sound10
│┣✗ ${prefix}sound11
│┣✗ ${prefix}sound12
│┣✗ ${prefix}sound13
│┣✗ ${prefix}sound14
│┣✗ ${prefix}sound15
│┣✗ ${prefix}sound16
│┣✗ ${prefix}sound17
│┣✗ ${prefix}sound18
│┣✗ ${prefix}sound19
│┣✗ ${prefix}sound20
│┣✗ ${prefix}sound21
│┣✗ ${prefix}sound22
│┣✗ ${prefix}sound23
│┣✗ ${prefix}sound24
│┣✗ ${prefix}sound25
│┣✗ ${prefix}sound26
│┣✗ ${prefix}sound27
│┣✗ ${prefix}sound28
│┣✗ ${prefix}sound29
│┣✗ ${prefix}sound30
│┣✗ ${prefix}sound31
│┣✗ ${prefix}sound32
│┣✗ ${prefix}sound33
│┣✗ ${prefix}sound34
│┣✗ ${prefix}sound35
│┣✗ ${prefix}sound36
│┣✗ ${prefix}sound37
│┣✗ ${prefix}sound38
│┣✗ ${prefix}sound39
│┣✗ ${prefix}sound40
│┣✗ ${prefix}sound41
│┣✗ ${prefix}sound42
│┣✗ ${prefix}sound43
│┣✗ ${prefix}sound44
│┣✗ ${prefix}sound45
│┣✗ ${prefix}sound46
│┣✗ ${prefix}sound47
│┣✗ ${prefix}sound48
│┣✗ ${prefix}sound49
│┣✗ ${prefix}sound50
│┣✗ ${prefix}sound51
│┣✗ ${prefix}sound52
│┣✗ ${prefix}sound53
│┣✗ ${prefix}sound54
│┣✗ ${prefix}sound55
│┣✗ ${prefix}sound56
│┣✗ ${prefix}sound57
│┣✗ ${prefix}sound58
│┣✗ ${prefix}sound59
│┣✗ ${prefix}sound60
│┣✗ ${prefix}sound61
│┣✗ ${prefix}sound62
│┣✗ ${prefix}sound63
│┣✗ ${prefix}sound64
│┣✗ ${prefix}sound65
│┣✗ ${prefix}sound66
│┣✗ ${prefix}sound67
│┣✗ ${prefix}sound68
│┣✗ ${prefix}sound69
│┣✗ ${prefix}sound70
│┣✗ ${prefix}sound71
│┣✗ ${prefix}sound72
│┣✗ ${prefix}sound73
│┣✗ ${prefix}sound74
│┣✗ ${prefix}sound75
│┣✗ ${prefix}sound76
│┣✗ ${prefix}sound77
│┣✗ ${prefix}sound78
│┣✗ ${prefix}sound79
│┣✗ ${prefix}sound80
│┣✗ ${prefix}sound81
│┣✗ ${prefix}sound82
│┣✗ ${prefix}sound83
│┣✗ ${prefix}sound84
│┣✗ ${prefix}sound85
│┣✗ ${prefix}sound86
│┣✗ ${prefix}sound87
│┣✗ ${prefix}sound88
│┣✗ ${prefix}sound89
│┣✗ ${prefix}sound90
│┣✗ ${prefix}sound91
│┣✗ ${prefix}sound92
│┣✗ ${prefix}sound93
│┣✗ ${prefix}sound94
│┣✗ ${prefix}sound95
│┣✗ ${prefix}sound96
│┣✗ ${prefix}sound97
│┣✗ ${prefix}sound98
│┣✗ ${prefix}sound99
│┣✗ ${prefix}sound100
│┣✗ ${prefix}sound101
│┣✗ ${prefix}sound102
│┣✗ ${prefix}sound103
│┣✗ ${prefix}sound104
│┣✗ ${prefix}sound105
│┣✗ ${prefix}sound106
│┣✗ ${prefix}sound107
│┣✗ ${prefix}sound108
│┣✗ ${prefix}sound109
│┣✗ ${prefix}sound110
│┣✗ ${prefix}sound111
│┣✗ ${prefix}sound112
│┣✗ ${prefix}sound113
│┣✗ ${prefix}sound114
│┣✗ ${prefix}sound115
│┣✗ ${prefix}sound116
│┣✗ ${prefix}sound117
│┣✗ ${prefix}sound118
│┣✗ ${prefix}sound119
│┣✗ ${prefix}sound120
│┣✗ ${prefix}sound121
│┣✗ ${prefix}sound122
│┣✗ ${prefix}sound123
│┣✗ ${prefix}sound124
│┣✗ ${prefix}sound125
│┣✗ ${prefix}sound126
│┣✗ ${prefix}sound127
│┣✗ ${prefix}sound128
│┣✗ ${prefix}sound129
│┣✗ ${prefix}sound130
│┣✗ ${prefix}sound131
│┣✗ ${prefix}sound132
│┣✗ ${prefix}sound133
│┣✗ ${prefix}sound134
│┣✗ ${prefix}sound135
│┣✗ ${prefix}sound136
│┣✗ ${prefix}sound137
│┣✗ ${prefix}sound138
│┣✗ ${prefix}sound139
│┣✗ ${prefix}sound140
│┣✗ ${prefix}sound141
│┣✗ ${prefix}sound142
│┣✗ ${prefix}sound143
│┣✗ ${prefix}sound144
│┣✗ ${prefix}sound145
│┣✗ ${prefix}sound146
│┣✗ ${prefix}sound147
│┣✗ ${prefix}sound148
│┣✗ ${prefix}sound149
│┣✗ ${prefix}sound150
│┣✗ ${prefix}sound151
│┣✗ ${prefix}sound152
│┣✗ ${prefix}sound153
│┣✗ ${prefix}sound154
│┣✗ ${prefix}sound155
│┣✗ ${prefix}sound156
│┣✗ ${prefix}sound157
│┣✗ ${prefix}sound158
│┣✗ ${prefix}sound159
│┣✗ ${prefix}sound160
│┗✗ ${prefix}sound161
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'gamemenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Game Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *GAME* ❳	 
│┏✗ ${prefix}truth
│┣✗ ${prefix}dare
│┣✗ ${prefix}tictactoe
│┣✗ ${prefix}delttt
│┣✗ ${prefix}guess [option]
│┣✗ ${prefix}caklontong
│┣✗ ${prefix}math [mode]
│┗✗ ${prefix}suitpvp [tag]
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'anonymousmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Anonymous Menu')
await Gans.send5ButImg(from, `╭───➣❲ *ANONYMOUS* ❳	 
│┏✗ ${prefix}anonymous
│┣✗ ${prefix}start
│┣✗ ${prefix}next
│┗✗ ${prefix}leave
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'toolmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Tool Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *TOOL 」	
│┣✗ ${prefix}translate [text]
│┣✗ ${prefix}fliptext [text]
│┗✗ ${prefix}toletter [number]
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'databasemenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Database Menu')
await Gans.send5ButImg(from, `╭───➣❲ *DATABASE* ❳	 
│┏✗ ${prefix}setcmd
│┣✗ ${prefix}listcmd
│┣✗ ${prefix}delcmd
│┣✗ ${prefix}lockcmd
│┣✗ ${prefix}addmsg
│┣✗ ${prefix}listmsg
│┣✗ ${prefix}getmsg
│┗✗ ${prefix}delmsg
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'indomenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Indo Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *INDO* ❳	 
│┏✗ ${prefix}darkjoke
│┣✗ ${prefix}quotes
│┣✗ ${prefix}animequotes
│┣✗ ${prefix}jalantikus-meme
│┣✗ ${prefix}merdeka-news 
│┣✗ ${prefix}kontan-news 
│┣✗ ${prefix}cnbc-news 
│┣✗ ${prefix}tribun-news 
│┣✗ ${prefix}indozone-news 
│┣✗ ${prefix}kompas-news 
│┣✗ ${prefix}detik-news 
│┣✗ ${prefix}daily-news 
│┣✗ ${prefix}inews-news 
│┣✗ ${prefix}okezone-news 
│┣✗ ${prefix}sindo-news 
│┣✗ ${prefix}tempo-news 
│┣✗ ${prefix}antara-news 
│┣✗ ${prefix}cnn-news 
│┣✗ ${prefix}fajar-news 
│┣✗ ${prefix}cinemaschedule
│┣✗ ${prefix}wiki
│┣✗ ${prefix}covidindo
│┣✗ ${prefix}earthquake
│┗✗ ${prefix}tvschedule
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'indohoroscopemenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Indo Horoscope Menu')
await Gans.send5ButImg(from, `╭──➣❲ *INDO HOROSCOPE* ❳	 
│┏✗ ${prefix}nomorhoki
│┣✗ ${prefix}artimimpi 
│┣✗ ${prefix}artinama 
│┣✗ ${prefix}ramaljodoh 
│┣✗ ${prefix}ramaljodohbali 
│┣✗ ${prefix}suamiistri 
│┣✗ ${prefix}ramalcinta 
│┣✗ ${prefix}cocoknama 
│┣✗ ${prefix}pasangan 
│┣✗ ${prefix}jadiannikah 
│┣✗ ${prefix}sifatusaha 
│┣✗ ${prefix}rezeki 
│┣✗ ${prefix}pekerjaan 
│┣✗ ${prefix}nasib 
│┣✗ ${prefix}penyakit 
│┣✗ ${prefix}tarot 
│┣✗ ${prefix}fengshui 
│┣✗ ${prefix}haribaik 
│┣✗ ${prefix}harisangar 
│┣✗ ${prefix}harisial
│┣✗ ${prefix}nagahari
│┣✗ ${prefix}arahrezeki
│┣✗ ${prefix}peruntungan 
│┣✗ ${prefix}weton 
│┣✗ ${prefix}karakter
│┣✗ ${prefix}keberuntungan
│┣✗ ${prefix}memancing
│┣✗ ${prefix}masasubur
│┣✗ ${prefix}zodiak
│┗✗ ${prefix}shio
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'othermenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Other Menu')
await Gans.send5ButImg(from, `╭─────➣❲ *OTHER* ❳	 
│┏✗ ${prefix}afk
│┣✗ ${prefix}readmore [text]
│┣✗ ${prefix}toviewonce
│┣✗ ${prefix}chatinfo
│┣✗ ${prefix}alive
│┣✗ ${prefix}script
│┣✗ ${prefix}speedtest
│┣✗ ${prefix}ping
│┣✗ ${prefix}owner
│┣✗ ${prefix}menu
│┣✗ ${prefix}delete
│┣✗ ${prefix}chatinfo
│┣✗ ${prefix}quoted
│┣✗ ${prefix}listpc
│┣✗ ${prefix}listgc
│┣✗ ${prefix}donate
│┣✗ ${prefix}request
│┗✗ ${prefix}report [bug]
╰──────────────◩` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "YouTube","url": `${websitex}`}},{"urlButton": {"displayText": "INSTAGRAM","url": `${iggw}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donasi'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'tqto': case 'thanksto': case 'tqtt': 
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(`╔════⳼❦Thanks Too❦⳹
║╭─◩
║├►Allah SWT
║├►My Fammily
║├►LORD BUDDHA
║├►hisoka Morou
║├►Zeeone OFC
║├►HyuuraBotz
║├►ALL My Friends
║╰─────────➣
❏
✗────────────✗
༺Speciall Thnks To༻
❲Xeon❳ (Cheems)`)
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			//anti-tag
const listTag = [`${global.ownertag}@s.whatsapp.net`]
const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''

		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    Gans.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
