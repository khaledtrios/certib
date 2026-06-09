import fs from 'fs'

const BASE = 'https://crtib-front.zfpyy7.easypanel.host'
const media = JSON.parse(fs.readFileSync('media_meta.json', 'utf8')).docs

let ok = 0, skip = 0, miss = 0, fail = 0
const missingList = []

for (const m of media) {
  const f = m.filename
  if (!f) continue
  const dest = 'media/' + f
  try {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) { skip++; continue }
  } catch {}
  try {
    const r = await fetch(`${BASE}/api/media/file/${encodeURIComponent(f)}`)
    if (r.ok) {
      const buf = Buffer.from(await r.arrayBuffer())
      fs.writeFileSync(dest, buf)
      ok++
    } else {
      miss++
      missingList.push(f + ' (' + r.status + ')')
    }
  } catch (e) {
    fail++
    missingList.push(f + ' (ERR)')
  }
}

console.log(`RE-DOWNLOAD: ${ok} récupérés, ${skip} déjà présents, ${miss} introuvables sur le live, ${fail} erreurs`)
console.log('Total fichiers dans media/: ' + fs.readdirSync('media').length)
if (missingList.length) {
  console.log('--- Introuvables sur le live (cassés là-bas aussi) ---')
  console.log(missingList.slice(0, 60).join('\n'))
}
