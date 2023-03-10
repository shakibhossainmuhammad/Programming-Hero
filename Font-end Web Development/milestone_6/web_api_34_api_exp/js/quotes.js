const loadQuate = () => {
  fetch('https://api.kanye.rest/')
  .then(res => res.json())
  .then(data)
}


// const loadQuate = () => {
//   fetch('https://api.kanye.rest/')
//     .then((res) => res.json())
//     .then((data) => displayQuate(data));
// };

// const displayQuate = (quote) => {
//   const blockQuote = document.getElementById('quote');
//   blockQuote.innerHTML = quote.quote;
// };

// loadQuate();

// const loadQuate = () => {
//   fetch('https://api.kanye.rest/')
//     .then((res) => res.json())
//     .then((data) => displayQuate(data));
// };

// const displayQuate = (quote) => {
//   const blockQuate = document.getElementById('quote');
//   blockQuate.innerHTML = quote.quote;
// };
// loadQuate();

// const loadQuate = () => {
//   fetch('https://api.kanye.rest/')
//     .then((res) => res.json())
//     .then((data) => displayQuate(data));
// };

// const displayQuate = (quote) => {
//   const blockQuote = document.getElementById('quote');
//   blockQuote.innerHTML = quote.quote;
// };
// loadQuate();
