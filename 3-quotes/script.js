
const quotes = [
    {
        name:'Stephen King',
        quote:'Get busy living or get busy dying.'
    },
    {
        name:'John F.Kennedy',
        quote:'Those who dare to fail miserably can achieve greatly'
    },
    {
        name: 'Abraham Lincoln',
        quote:'I\'m a success today because I had a friend who believed in me and I'
    },
    {
        name:'quote-1',
        quote:'author-1'
    },
    {
        name:'quote-2',
        quote:'author-2'
    },
    {
        name:'quote-3',
        quote:'author-3'
    }
  ]

const btnQuote = document.querySelector('#btnQuote');
const txtquote = document.querySelector('#quote')
const txtQuoteAuthor = document.querySelector('#quoteAuthor');

btnQuote.addEventListener('click', changeQuote);
function changeQuote(){
    let quoteNum = Math.floor(Math.random() * quotes.length)
    txtquote.innerHTML = quotes[quoteNum].name
    txtQuoteAuthor.innerHTML = quotes[quoteNum].quote
}