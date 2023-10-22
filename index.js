const Telegram = require('node-telegram-bot-api');
const token = '6561027053:AAG1eoSkMF53Dp_Wu1g7YYmLWiILlTipR8A'; // Replace with your actual bot token

const bot = new Telegram(token, { polling: true });

// Define the main keyboard
const mainKeyboard = {
    reply_markup: {
        keyboard: [['Inventory System', 'Collection System','Attandance', 'Employee Score']],
        resize_keyboard: true,
        one_time_keyboard: true,
    },
};

// Define the IMS keyboard
const imsKeyboard = {
    reply_markup: {
        keyboard: [['Danger Stock Level', 'Excess Stock Level', 'Back']],
        resize_keyboard: true,
        one_time_keyboard: true,
    },
};

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    // Handle main keyboard buttons
    if (text === 'IMS') {
        bot.sendMessage(chatId, 'Please select an option from IMS:', imsKeyboard);
    } else if (text === 'FMS') {
        bot.sendMessage(chatId, 'You selected FMS. Add your FMS logic here.');
    } else {
        bot.sendMessage(chatId, 'Please select an option:', mainKeyboard);
    }

    // Handle IMS keyboard buttons
    if (text === 'Danger Stock Level') {
        bot.sendMessage(chatId, 'You selected Danger Stock Level. Add your Danger Stock Level logic here.');
    } else if (text === 'Excess Stock Level') {
        bot.sendMessage(chatId, 'You selected Excess Stock Level. Add your Excess Stock Level logic here.');
    }
});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome to the Main Menu! Please select an option:', mainKeyboard);
});
