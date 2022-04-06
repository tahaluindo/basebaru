/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '4909faeb3e93',
}

// Other
global.owner = ['62895969318181','62895969318181','62895969318181']
global.ownernumber = 'wa.me/62895969318181'
global.ownername = 'Koleksibot🔥'
global.botname = 'Koleksi-Bot🤖'
global.packname = '© Koleksibot'
global.fatih = 'wa.me/6281382420312'
global.ahmad = 'wa.me/62895969318181'
global.ameliavoss = 'wa.me/6285215916046'
global.allfriend = 'All My Friends And All Creator Bot Wangsap'
global.quotes = 'Hati yang terluka mungkin masih membekas. Semoga di bulan suci Ramadan ini, kita dapat saling memaafkan. Selamat menunaikan ibadah puasa.'
global.author = 'Ig : @cyber_mrlinkerrorsystemoffical'
global.sessionName = 'nekell'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
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
