var quoteRandom = document.createElement('P');
document.getElementsByClassName("quote")[0].append(quoteRandom);
var quoteAuthor = document.createElement('H4');
document.getElementsByClassName("quote")[0].append(quoteAuthor);

var myInit = {
  method: 'GET',
  headers: {
    'X-Theysaidso-Api-Secret': '_hCO1cAVkDiY_ScnlpegCAeF'
  }
}

fetch('http://quotes.rest/quote/random.json', myInit)
  .then((response) => {
      return response.json()
        .then((quoteFromSite) => {
          console.log(quoteFromSite);

          var quoteRandom = quoteFromSite.contents.quote;
          var quoteAuthor = quoteFromSite.contents.author;

          document.getElementsByTagName('P')[0].innerHTML = '"' + quoteRandom + '"';
          document.getElementsByTagName('H4')[0].innerHTML = quoteAuthor;
        })
      })
