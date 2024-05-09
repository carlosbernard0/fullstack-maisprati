// Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.
const prompt = require('prompt-sync')();
let dates = [];

for (let i = 0; i < 5; i++) {
    let date = new Date();
    date.setHours(prompt('Escolha a hora: '));
    date.setMinutes(prompt('Escolha o minuto: '));
    date.setSeconds(prompt('Escolha o segundo: '));
    dates.push(date);
}

for (const date of dates) {
    console.log(`a datas no formato HH.MM.SS tem ${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}.`)   
}