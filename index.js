const { Telegraf } = require("telegraf");
require('dotenv').config();
const token = process.env.TELEGRAM_TOKEN;
const client = new Telegraf(token);

client.use(require('./api/attack'));

console.log('Запущен');

client.start((message) => {

    message.reply('https://github.com/Problematik1');
})


if (token == 'production') {
    client.telegram.setWebhook(token);
    client.startWebhook('/', null, 5000);
} else {
    client.startPolling()
}
