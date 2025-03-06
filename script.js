'use strict'

const getRandomIntNumberBot = function(min, max, maxAttempts) {
    min = Math.floor(min);
    max = Math.ceil(max);
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let attempts = 0;

    function isNumber (num) {
        return!isNaN(parseFloat(num) && isFinite(num));
    };

    function getPromptMessage () { 

        if(attempts >= maxAttempts) {
            alert(`Вы исчерпали все попытки. Загаданное число было: ${randomNumber}`);

            if (confirm("Хотите сыграть еще?")) {
                attempts = 0;
                randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                return getPromptMessage();
            } else {
                alert("Спасибо за игру!");
                return;
            }
        }

        let remainigAttempts = maxAttempts - attempts;
        let startPrompt = prompt(`Угадай число от ${min} до ${max}. Осталось попыток ${remainigAttempts}`);
        
        if (startPrompt===null) {
            alert("Игра окончена");
         return;
        }

        attempts++

        if (startPrompt.trim() === ""){
            alert("Вы ничего не ввели! Введите число!");
            return getPromptMessage();
        } else if (!isNumber(startPrompt)){
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


getRandomIntNumberBot(1, 100, 10);