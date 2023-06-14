// Hilih

import { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
import yts from 'yt-search'

let handler = async (m, { conn, command, text, args, usedPrefix }) => {

  if (!text) throw `Use example ${usedPrefix}${command} naruto blue bird`
  
  await m.reply(md)

 //let vid = (await youtubeSearch(text)).video[0]
    let search = await yts(text)
    let vid = search.videos[Math.floor(Math.random() * search.videos.length)]
    if (!search) throw `Tidak di temukan, coba untuk membalikkan judul dan author nya`

let { author: { name }, videoId, thumbnail, title, description, ago, duration, views, url } = vid
                
//  const url = 'https://www.youtube.com/watch?v=' + videoId

let ats = `❏ ––––––『 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐋𝐀𝐘 』–––––– ❏`
 let foter = `
⫹⫺ 𝙽𝚊𝚖𝚊 𝙲𝚑𝚊𝚗𝚗𝚎𝚕: ${name}
⫹⫺ 𝙹𝚞𝚍𝚞𝚕:  ${title}
⫹⫺ 𝙳𝚞𝚛𝚊𝚜𝚒: ${duration}
⫹⫺ 𝚅𝚒𝚎𝚠𝚜: ${views}
⫹⫺ 𝚄𝚙𝚕𝚘𝚊𝚍: ${ago}
⫹⫺ 𝙻𝚒𝚗𝚔: ${url}

⫹⫺ 𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗: ${description}`

await conn.sendButton(m.chat, ats, foter, fp, [['Video', `.ytv ${url}`], ['Donasi', `.donasi`], ['Menu', `.menu`]],false, { quoted: m, 
 'document': { 'url': 'https://wa.me/6283861760785' },
 'mimetype': dpdf,
 'fileName': `Youtube Play || 𝐒𝐞𝐭𝐲𝐚𝐁𝐨𝐭𝐳 -MD`,
 'fileLength': fsizedoc,
 'pageCount': fpagedoc,
 contextInfo: {
 externalAdReply: {
 showAdAttributon: true,
 mediaType: 2,
 mediaUrl: url,
 title: `Audio Sedang Dikirim...`,
 body: bottime,
 sourceUrl: `https//wa.me/6283861760785`,
 thumbnail: await ( await conn.getFile(thumbnail)).data
} } } )

const yt = await youtubedlv2(url).catch(async _ => await youtubedl(url))

const link = await yt.audio['128kbps'].download()
let doc = {
 audio:
 {
 url: link
 },
 mimetype: 'audio/mp4',
 fileName: title, 
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 mediaType: 2,
 mediaUrl: url,
 title: title,
 body: wm,
 sourceUrl: url,
 thumbnail: await ( await conn.getFile(thumbnail)).data
} } }

return  await conn.sendMessage(m.chat, doc, { quoted: m})
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']

handler.command = /^(play)$/i

handler.exp = 0
handler.limit = true
handler.register = false
handler.limit = true
export default handler