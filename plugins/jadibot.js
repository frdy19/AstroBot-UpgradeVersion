let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
*❏––––––『 JADI 𝐁𝐎𝐓 』––––––❏*

SETYA BOTZ MELAYANI :
~~~~~~~~~~~~~~~~~~~~~~~~~~
JASA JADIBOT : 25K
SEWA BOT : 
PANEL.       :
SC BOT MD : 25K FREE PANEL 
SC PUSH KONTAK : 20K FREE PANEL 
SC CREATED PANEL : 15K FULL PENGAJARAN .
---------------------------------------------------------------------
NOTE : BISA NEGO < ASAL NGOTAK > 



⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
         ❨ ${namebot} ❩

${botdate}
`.trim()
  conn.sendFile(m.chat, 'https://telegra.ph/file/a7313a6cfa6dd2e73d60d.jpg', null, caption, m)
}
handler.help = ['jadibot']
handler.tags = ['jadibot']
handler.command = /^(jadibot)$/i;

handler.register = false
export default handler