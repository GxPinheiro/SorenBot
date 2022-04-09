//Soren Bot API
const TeleBot = require('telebot');

const telekey = process.env.TELEBOT_KEY;
const bot = new TeleBot('telekey');


bot.on(/youtube.com/, (msg) => {
    return msg.reply.text ('seu gosto é um lixo mesmo', { asReply: true });
});

bot.on(/(boku\s)?hero academia*/, (msg) => {
    return msg.reply.text ('Shonen Generico', { asReply: true });
});

bot.on(/parabéns/, (msg) => {
    return msg.reply.text ('Obrigado!!', { asReply: true });
});

bot.on(/banana/, (msg) => {
    return msg.reply.text ('hahaha sdjhudshfujahjf!!', { asReply: true });
});


// bot.on('newChatTitle', (setChatTitle) => {
//     return setChatTitle.();
// });

bot.connect();
bot.start();
