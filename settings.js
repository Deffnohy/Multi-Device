//Subscribe Surviv OFc

const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

global.APIKeys = {
	'https://zenzapis.xyz': 'apikey lu',
}


global.autoTyping = true 
global.autoreadpmngc = false 
global.autoReadGc = false 
global.autoRecord = false
global.available = true


global.vidmenu = fs.readFileSync("./media/gambar/gege.mp4") 

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

global.vcardowner = ['6289509960601'] 
global.ownername = "Deffri Gans" 
global.ytname = "Deffri Gans" 
global.socialm = "GitHub: deffrigans" 
global.location = "Indonesia" 

//bot bomdy 
global.owner = ['6289509960601']
global.ownertag = '6289509960601' 
global.botname = 'GansBOTz' 
global.linkz = "https://youtu.be/rdRTbOIQVVs" 
global.websitex = "https://youtu.be/rdRTbOIQVVs" 
global.iggw = 'https://instagram.com/b4c00t.dtz'
global.reactmoji = "😘" 
global.themeemoji = "🔰" 
global.packname = "GansBOTz\n" 
global.author = "Deffri Gans" 

//Bot theme media
global.thum = fs.readFileSync("./media/gambar/awokwok.jpg") 
global.donas = fs.readFileSync("./media/file/donasi.jpg") 
global.tes = fs.readFileSync("./src/Test.jpg") 
global.log0 = fs.readFileSync("./media/gambar/awokwok.jpg") 
global.err4r = fs.readFileSync("./media/gambar/awokwok.jpg") 
global.thumb = fs.readFileSync("./media/gambar/awokwok.jpg") 

//damtabase
global.premium = ['6289509960601'] 
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿','/','+','@','#','£','_','&','%','≠','~','•']
global.sp = '⭔'
global.mess = {
    success: 'Selesai ✓',
    admin: 'Fitur Ini Hanya Untuk Admin!',
    botAdmin: 'Bot Harus Menjadi Admin Dulu!',
    owner: 'Fitur Ini Hanya Untuk Owner!',
    group: 'Fitur Hanya Digunakan Untuk Grup!',
    private: 'Fitur Hanya Digunakan Untuk Chatt Pribadi!',
    bot: 'Fitur Ini Hanya Untuk Bot',
    wait: 'Sabar Bro Masih Diproses...',
    linkm: 'Mana linknya Eek?',
    error: 'Maaf Bro Lagi Error!!',
    endLimit: 'Limit Harian Anda Telah Kedaluwarsa, Batas Akan Direset Setiap 12 Jam',
    ban: 'Anda telah diblokir oleh Owner, jika Anda ingin di unblokir, chat Owner.',
    nsfw: 'Fitur nsfw belum di aktifkan silahkan hubungi admin untuk Mengaktifkan Fitur NSFW',
    banChat: 'Bot diblokir di grup ini, harap hubungi Owner untuk membatalkan pemblokiran'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 10000000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./media/gambar/awokwok.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
