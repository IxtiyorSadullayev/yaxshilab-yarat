// Barcha ishlarni qilib bo`lgandan keyin 
// git add .
// git commit -m "Bu yerga habar yozasan"
// git push

const {Telegraf} = require('telegraf')
const token = ""
const bot = new Telegraf(token)




bot.start(msg =>{
    msg.reply('Hush kelibsiz.')
})




bot.launch()

