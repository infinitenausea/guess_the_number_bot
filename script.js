'use strict'

const getRandomIntNumberBot = function(min, max) {
    min = Math.floor(min);
    max = Math.ceil(max);
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    function isNumber (num) {
        return!isNaN(parseFloat(num) && isFinite(num));
    };

    function getPromptMessage () { 
        let startPrompt = prompt(`Угадай число от ${min} до ${max}`);
        
        if (startPrompt===null) {
            alert("Игра окончена");
         return;
        }
        if (!isNumber(startPrompt)) {
            alert("Введите число!");
            return getPromptMessage();
        }

        startPrompt = +(startPrompt.trim());

        if (startPrompt > randomNumber) {
            alert("Загаданное число меньше");
            return getPromptMessage(); 
        } else if (startPrompt < randomNumber) {
            alert("Загаданное число больше");
            return getPromptMessage();
        } else {
            alert("Поздравляю, вы угадали!");
        }
    }

    getPromptMessage()
};


getRandomIntNumberBot(2, 6);