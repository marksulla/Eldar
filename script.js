const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const telegramBtn = document.getElementById('telegram');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const nahuicoordinates = document.getElementById('coordinates');


const pageUrl = location.href;


/* let apiQuotes = [];
 */

//Show new quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
}

newQuote();


/* //get quotes from API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //catch error  here 
        alert(error);
    }
} */

//ON load
/* getQuotes(); 
 */








/* tweet quote  */

function telegramQuote() {
    const telegramUrl = `https://t.me/share/url?url=%20${quoteText.textContent} - ${authorText.textContent}%20${pageUrl}`;
    window.open(telegramUrl, '_blank');
}
function twitterQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=%20${quoteText.textContent} - ${authorText.textContent}%20${pageUrl}`;
    window.open(twitterUrl, '_blank');
}


// add random class to button to make a different sounds

let randomClass = [];


function getRandomClass() {
    const soundClasses = ['.sound_ohueniy', '.sound_pes','.sound_vam-smeshno','.sound_vova', '.sound_emotionalguy', '.sound_ofigel'];
    randomClass = soundClasses[Math.floor(Math.random() * soundClasses.length)];

}


// Event listeners
// newQuoteBtn.addEventListener('click', newQuote);
telegramBtn.addEventListener('click', telegramQuote);
telegramBtn.addEventListener('click', function(e) {
    const audiotelegram = document.querySelector('.sound_sendthispic');
    if(!audiotelegram) return;
    audiotelegram.play();
    audiotelegram.currentTime = 0;
});

twitterBtn.addEventListener('click', twitterQuote);
twitterBtn.addEventListener('click', function(e) {
    const audiotwitter = document.querySelector('.sound_sendthispic');
    if(!audiotwitter) return;
    audiotwitter.play();
    audiotwitter.currentTime = 0;
});

newQuoteBtn.addEventListener('click', newQuote);

newQuoteBtn.addEventListener('click', function(e) {
    getRandomClass();
    const audio = document.querySelector(randomClass);
    if(!audio) return; //stop function from running all together
    console.log(audio);
    
    audio.play();
    audio.currentTime = 0;


});

nahuicoordinates.addEventListener('click', function(e) {
    const audio = document.querySelector('.sound_coordinates');
    if(!audio) return; //stop function from running all together
    console.log(audio);
    
    audio.play();
    audio.currentTime = 0;


});

/* audio.currentTime = 0; */