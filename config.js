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
global.owner = ['62895369318181','62895369318181','62895369318181']
global.ownernumber = 'wa.me/62895369318181'
global.ownername = 'Koleksibot'
global.botname = 'Base Baru'
global.packname = '© Koleksibot'
global.aku = 'wa.me/62895369318181'
global.ahmad = 'wa.me/62895369318181'
global.allfriend = 'All My Friends And All Creator Bot Wangsap'
global.quotes = '🔺Jangan pernah sombong dengan apa yang lu punya karna, itu semua hanyalah titipan yang akan hilang pada masa nya!.'
global.author = 'Ig : @cyber_mrlinkerrorsystemoffical'
global.sessionName = 'nekell'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success Bro',
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
