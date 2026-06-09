 importer fs depuis "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(texte) {
  retour {
    texte : stylizedChar(texte),
    contextInfo: {
      externalAdReply: {
        titre : "Konsou",
        corps : "Konsou",
        vignette : fs.readFileSync("./database/DigiX.jpg"),
        sourceUrl: "https://whatsapp.com",
        type de média : 1,
        renderLargerThumbnail: false
      }
    }
  }
}