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
global.owner = ['6283804343232','6283804343232','6283804343232']
global.ownernumber = 'wa.me/6283804343232'
global.ownername = 'Wanz'
global.botname = 'Bot-Ku'
global.packname = '© WANZ-MD'
global.aku = 'wa.me/6283830086398'
global.ahmad = 'wa.me/6281515474080'
global.allfriend = 'All My Friends And All Creator Bot Wangsap'
global.quotes = '🔺Jangan pernah sombong dengan apa yang lu punya karna, itu semua hanyalah titipan yang akan hilang pada masa nya!.'
global.author = 'Ig : @memes.lucu01'
global.sessionName = 'nekell'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success Sloerdddd',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '⌛ Sabar Sloerddd Loading...',
}
global.thumb = fs.readFileSync('./lib/nekell.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
