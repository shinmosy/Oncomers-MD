let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
╭─── *「 Kartu Intro 」*
│ _*Silahkan Isi Datamu*_
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Asal         :* 
╰──────────────
`.trim()) 
}
handler.command = /^(intro)$/i

module.exports = handler
