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

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    const articleInfo = response.data.articles;
    Object.keys(articleInfo).forEach(topic => {
        articleInfo[topic].forEach(article => {
            newCards.appendChild(createCards(article))
        })
    })
})
    .catch(error => {
        console.log('This data was not returned', error);
    })

const newCards = document.querySelector('.cards-container');

function createCards(object) {

    const card = document.createElement('div');
    card.classList.add('card');
    const header = document.createElement('div');
    header.classList.add('headline');
    header.textContent = object.headline;
    card.appendChild(header)
    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    card.appendChild(authorDiv);
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('img-container');
    authorDiv.appendChild(imageDiv);
    const image = document.createElement('img');
    image.src = object.authorPhoto;
    imageDiv.appendChild(image);
    const span = document.createElement('span');
    span.textContent = `By: ${object.authorName}`;
    authorDiv.appendChild(span);

    return card
}