//Soren Bot API
const TeleBot = require('telebot');

const bot = new TeleBot('413868618:AAGU_Ua75t9jqa0RxeUl2sDB4DuGuuUx-RE');


bot.on(/youtube.com/, (msg) => {
    return msg.reply.text ('seu gosto é um lixo mesmo', { asReply: true });
});

bot.on(/(boku\s)?hero academia*/, (msg) => {
    return msg.reply.text ('Shonen Generico', { asReply: true });
});
<<<<<<< HEAD
 
=======

bot.on(/parabéns/, (msg) => {
    return msg.reply.text ('Obrigado!!', { asReply: true });
});

// bot.on('newChatTitle', (setChatTitle) => {
//     return setChatTitle.();
// });

>>>>>>> 5caece6d15ed76bce6337b555238485e01b95c40
bot.connect();
bot.start();