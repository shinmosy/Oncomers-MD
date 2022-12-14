let handler = async m => m.reply(`
Aku Hadir ☝️🗿
`.trim()) // Tambah sendiri kalo mau

handler.help = ['apikey']

handler.tags = ['info']

handler.command = /^tes$/i
module.exports = handler