// READ IN URL
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let URL; 
rl.question('Enter URL', (answer) => {
    URL = answer;
})
// GET IMAGES FROM URL
const request = require('request'),
    cheerio = require('cheerio');

let images = [];
request(URL, (error, response, body) => {
    if (error) {
        console.log('error');
    } else if (response.statusCode === 200) {
        const $ = cheerio.load(body);
        $('img').each(() => {
            images.push($(this).attr('src'));
        })
    }
})
console.log(images);
// WRITE TO FILE
const sharp = require('sharp');