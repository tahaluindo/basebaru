/**
   * Terima Kasih Telah Membeli Script Premium Kami
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api Tak Perlu Di Ganti Nanti Error
global.APIs = {
	zenz: 'https://zenzapi.xyz',
  bg: 'http://bochil.ddns.net',
  amel: 'https://melcanz.com',
  xteam: 'https://api.xteam.xyz',
  indonesiaapi: 'https://indonesiapi.herokuapp.com',
  alc: 'https://api-alc.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz'
}

// Apikey Website Api Tak Perlu Di Ganti Nanti Error
global.APIKeys = {
	'https://zenzapi.xyz': '4909faeb3e93',
  'https://melcanz.com': 'TeamMars',
  'https://api.xteam.xyz': 'db0e06bd9f096399',
  'https://api.lolhuman.xyz': 'eafcf901640d1c599ae71519',
  'https://indonesiaapi.herokuapp.com': 'kRdw3uhI',
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Untuk Owner Ganti Aja Number Phone 62nya
global.owner = ['62895369318181','62895369318181','62895369318181']
global.ownernumber = 'wa.me/62895369318181'
global.ownername = 'Koleksibot🔥'
global.botname = 'Koleksi-Bot🤖'
global.packname = '© Koleksibot'
global.ahmad = 'wa.me/6283830086398'
global.fatih = 'wa.me/6281382420312'
global.aku = 'wa.me/62895969318181'
global.ameliavoss = 'wa.me/6285215916046'
global.allfriend = 'All My Friends And All Creator Bot Wangsap'
global.quotes = 'Hati yang terluka mungkin masih membekas. Semoga di bulan suci Ramadan ini, kita dapat saling memaafkan. Selamat menunaikan ibadah puasa.'
global.author = 'Ig : @cyber_mrlinkerrorsystemoffical'
global.sessionName = 'nekell'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Ini Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Ini Khusus Pemilik Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '⌛ Sabar Loading...',
}
global.thumb = fs.readFileSync('./lib/nekell.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
