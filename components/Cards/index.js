// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    const myCard = cardMaker(response);
    cards.appendChild(myCard);
  })
  .catch(error => {
    console.log("You got nothing---TRY AGAIN", error);
  });

  const card = document.querySelector('.cards-container');

  function cardMaker(object) {

    //create elements

    const artCard = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const container = document.createElement('div');
    const pic = document.createElement('img');
    const authorName = document.createElement('span');
//classes
    artCard.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    container.classList.add('img-container');
//structure

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(container)
    author.appendChild(authorName)
    container.appendChild(pic);
    card.appendChild(cardInfo);

//set text content
    pic.src = object.data.authorPhoto_url;
    headline.textContent = object.data.headline;
    author.textContent = object.data.authorName;


  }