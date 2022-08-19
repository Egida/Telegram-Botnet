const { Composer} = require('telegraf');
const composer = new Composer();
const https = require('https');


composer.command('/api', (message) => {

    let args = message.update.message.text.split(' ') 

    let host = args[1]; // Это для запроса к апи ( пример: https://botnet.api?host=host&port=port)
    let port = args[2]; // Это для запроса к апи ( пример: https://botnet.api?host=host&port=port)

   if(!host || !port) return message.reply('❌ Неверный аргумент');

    const opt = {
        hostname: 'github.com', // После https://
        port: 443, // Порт ( 80 - http/443 - https )
        // path: `` Путь (Метод, токен),
        method: 'GET', // Get или Post
      };
    
    const re = https.request(opt, r => {
        if (r.statusCode != 200 ) {
         return message.reply('❌ Упс... Ошибка: ' + r.statusCode)
        } else {
            message.reply('🚀 Атака отправлена')
        } 
        
    })
    re.end();
})

module.exports = composer