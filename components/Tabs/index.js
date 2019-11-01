// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.

//  </div>
//      </div>
//  The tab component should look like this:
//    <div class="tab">topic here</div>
//GET DATA
const theTabs = document.querySelector('.topics');

axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response);
    response.data.articles.topics.forEach(item => {  
        const tab = tabMaker(response)     
        theTabs.apphendChild(item);
    });
  })
  .catch(error => {
    console.log("You got nothing---TRY AGAIN", error);
  });
 
  ///////////////////////////
  function tabMaker(tabs) {

    //create Element
    const tab = document.createElement('div');
    //add classes
    tab.classList.add('tab');
    //set text content
    tab.textContent = tabs;

  }