import genshin from 'genshin'

String.prototype.includesOneOf = function(arrayOfStrings) {
	if(!Array.isArray(arrayOfStrings)) {
	throw new Error('includesOneOf only accepts an array')
	}
	return arrayOfStrings.some(str => this.includes(str))
}

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	if (!text) throw `Example : *${usedPrefix + command} library*`
	try {
		let anu = await genshin.geographies(`${text}`)
		let ini_txt = `*Found : ${anu.name}*\n\n`
		ini_txt += `_"${anu.description}"_\n\n`
		ini_txt += `*Area :* ${anu.area}\n`
		ini_txt += `*Region :* ${anu.region}\n`
		ini_txt += `_sort order : ${anu.sortorder}_`
		m.reply(ini_txt)
	} catch (e) {
		console.log(e)
		let anu2 = await genshin.geographies(`names`, { matchCategories: true })
		m.reply(`*Not Found*\n\n*Available geographies is :*\n${anu2.join(", ")}`)
	}
}

handler.help = ['giarea <place>']
handler.tags = ['genshin']
handler.command = /^((gi|genshin)(areas?|geogra(fi|ph(y|ies?))))$/i

handler.limit = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)