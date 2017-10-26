var quoteOfTheDay = document.createElement('P');
document.getElementsByClassName("quote")[0].append(quoteOfTheDay);
var quoteAuthor = document.createElement('H4');
document.getElementsByClassName("quote")[0].append(quoteAuthor);
console.log();
fetch('http://quotes.rest/qod.json')
  .then((response) => {
    return response.json()
      .then((quoteFromSite) => {

        var quoteOfTheDay = quoteFromSite.contents.quotes["0"].quote;
        var quoteAuthor = quoteFromSite.contents.quotes["0"].author;

        document.getElementsByTagName('p')[0].innerHTML = '"' + quoteOfTheDay + '"';
        document.getElementsByTagName('H4')[0].innerHTML = quoteAuthor;
      })
  })
