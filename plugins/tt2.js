let fg = require('api-dylux')

const { tiktokdl, tiktokdlv2, tiktokdlv3 } = require ('@bochilteam/scraper')

let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `✳️ Masukkan tautan Tiktok\n\n 📌 Contoh: ${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`

if (!args[0].match(/tiktok/gi)) throw `❎ Periksa apakah tautannya dari tiktok`
try {
    let p = await fg.tiktok(args[0]) 
    let te = `

⊷ _*SERVER 1*_

• *Username:* ${p.author}
• *Description:* ${p.title}
`
    
    conn.sendFile(m.chat, p.nowm, 'tt.mp4', te, m)
    } catch {  	
    try { 

	const { author: { nickname }, video, description } = await tiktokdl(args[0])
         .catch(async _ => await tiktokdlv2(args[0]))
         .catch(async _ => await tiktokdlv3(args[0]))

    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw '❎ Kesalahan saat mengunduh video'

    let tex = `

┌─⊷ _*SERVER 2*_
▢ *Nickname:* ${nickname} ${description ? `\n
▢ *Description:* ${description}` : ''}

└───────────`

conn.sendFile(m.chat, url, 'tt.mp4', tex, m)
} catch {
    m.reply(`❎ Kesalahan saat mengunduh video `)

}

} 

}  

handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm|tt|tiktod|dltt)$/i
handler.limit = true
module.exports = handler