/** Menu Untuk Whatsapp List Ringan 
 Udah gua buat biar ringan cuma gak manggil semua menu

Note:
Ini ada menu payment tujuan nya biar kalo lu run panel atau 
Run di platform yang kecil disk nya ( penyimpanan )
Agar terap bisa di gunakan dan tidak ada kendala seperti
[Error: ENOENT: no such file or directory, open ''] 
**/ 
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')

let path = require('path')
let fetch = require('node-fetch')
    let handler = async (m, { conn, text, usedPrefix, command }) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
    let ar = ['list', 'menu']
    let title = `*ONCOMERS MENU*

_Info : Private Chat Mode_ _*OFF*_
_Silahkan Gunakan bot di grup ONCOMERS_`
    let tmb = `CLICK HERE `
    const ftroli = {

	key : {

                          participant : '0@s.whatsapp.net'

                        },

       message: {

                    orderMessage: {

                            itemCount : 9999999999999,

                            status: 1,

                            surface : 1,

                            message: 'Shin Ryujin',

                            orderTitle: 'MENU',

                            thumbnail: await (await fetch('https://telegra.ph/file/ec97b879a70c2c66b3ca4.jpg')).buffer(),

                            sellerJid: '0@s.whatsapp.net'

          

                          }

                        }

                      }
    const sections = [ {
	title: `Aktif Selama ${uptime} || Waktu ${time} WIB`,
	rows: [
	{title: `Semua Perintah`, rowId: `.allmenu `},//, description: ``},
        {title: `MenuV2`, rowId: `.pay `},//, description: ``},
        {title: `Donasi`, rowId: `#donasi `},//, description: ``},
        {title: `Script`, rowId: `#sc `},//, description: ``},
        {title: `Group Official`, rowId: `#gcbot `},//, description: ``},
        {title: `Website Official`, rowId: `#web `},//, description: ``},
        {title: `Speed`, rowId: `#speed `},//, description: ``},
        {title: `List Texpro Maker`, rowId: `#textpro `},//, description: ``},
        {title: `Info`, rowId: `#info `},//, description: ``},
        {title: `Creator`, rowId: `#owner `},//, description: ``},
        ]
 } ]

const listMessage = {
  text: title,
  mentions: [m.sender],
  footer: '📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner',
buttonText: tmb,
    sections 
    }
















          








  if(!text) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!ar.includes(text)) throw conn.FakeReply(m.chat, listMessage, { quoted: m })
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.image) throw json
}

handler.help = ['Menu'].map((v) => v + ' <List>')
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.register = false

module.exports = handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
