const request = require('request'),
    cheerio = require('cheerio');

const URL = 'http://www.netinstructions.com/how-to-make-a-simple-web-crawler-in-javascript-and-node-js/';

function Load() {
    const images = [];
    request(URL, (error, response, body) => {
        if (error) {
            alert('error');
        } else if (response.keyCode === 200) {
            const $ = cheerio.load(body);
        }
    });
    return images;
}


module.exports = Load;
