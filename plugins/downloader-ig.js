import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!args[0]) throw `🚩 *Example:* ${usedPrefix+command} https://www.instagram.com/reel/Co18PSBAmkh/?igshid=MmJiY2I4NDBkZg==`
conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}}) 
  let res = await fetch(`https://api.shinoa.xyz/api/downloader/instagram?url=${args[0]}&apikey=rul`)
  if (res.status != 200) throw `Terjadi kesalahan. Status: ${res.status}`
  let json = await res.json()

  conn.sendFile(m.chat, json.data[0].url, 'instagram.mp4', footer, m)
}
handler.help = ['igdl', 'instagram']
handler.tags = ['downloader']
handler.command = /^(igdl|instagram|ig)$/i
handler.limit = true
export default handler