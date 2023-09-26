/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6282144323683', 'DEN', true],
  ['6282144323683']
] // Nomor Owner

global.mods = ['6282144323683'] 
global.prems = ['6282144323683', '6282144323683']

// apikey
global.btc = 'PKZt99sC'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.botcahx.live. contohnya global.btc = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'mhdAnan',
  'https://api.botcahx.live': 'PKZt99sC'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  btc: 'https://api.botcahx.live'
}

// Watermark
global.nama = 'DEN OFFC' // nama owner
global.nomor = '6282144323683' // nomor owner
global.nans = 'DICODING OFFC' // nama bot 
global.thumb = 'https://i.ibb.co/m9YqsDr/neromdv3-2.jpg' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com' // link group yang ada di menu

// Sticker wm
global.packname = 'DICODING MD┃ᴮᴼᵀ' 
global.author = '@denisetiawan' 
global.fgig = 'https://www.instagram.com/deni' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/KINGXDENI' // bebas tapi jangan kosong
global.fgyt = 'https://dicodingbot.site/' // bebas tapi jangan kosong
global.fgpyp = 'https://dicodingbot.site' // bebas tapi jangan kosong
global.fglog = 'https://i.ibb.co/kXw4XhL/nansoffc-logo.jpg'

// Other
global.dana = '6282144323683'
global.qris = 'https://i.ibb.co/xGC5Y7j/20230712-173348.jpg'
global.web = 'https://dicodingbot.site'
global.email = 'dicodingbot@gmail.com'
global.lastm = 'ꜱɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙʏ ɴᴀɴꜱ ᴏꜰꜰᴄ'

global.wait = 'Tunggu sebentar....'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})