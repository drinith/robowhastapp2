
const wppconnect = require('@wppconnect-team/wppconnect');
const puppeteer = require('puppeteer');

puppeteer.launch({ args: ['--no-sandbox', '--disable--gpu', '--disable-setuid-sandbox'] });

(async () => {

    try {
        const cliente = await wppconnect.create((cliente) => {
            return cliente

        })
        start(cliente);
    } catch (err) {
        console.log(err)
    }
})()
const start = async (client) => {

    try {
        //usuário manda mensagem
        await client.onMessage(async (message) => {
            console.log('Mensagem digitada pelo usuário: ' + message.body);
            console.log("Body " + message)
            //stages(client,message)
            //const result = await client.sendText(message.from, 'PING! Mande um PONG para mim:')

        });
    } catch (err) {
        console.error('Error ', erro)
    }
}


// const stages = async(client,message)=>{

//     stage = userStages[message.from];
//     console.log(stage)
// }

// wppconnect.create()
//     .then((client) => start(client))
//     .catch((error) => console.log(error));


// function start(client) {
//     client.onMessage((message) => {
//         console.log('Mensagem digitada pelo usuário: ' + message.body);
//         client.sendText(message.from, 'PING! Mande um PONG para mim:')
//             .then((result) => {
//                 // console.log('SUCESSO: ', result); 
//             })
//             .catch((erro) => {
//                 console.error('ERRO: ', erro); 
//             });
//     });
// }