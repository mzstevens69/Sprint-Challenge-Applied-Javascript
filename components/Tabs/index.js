// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//  <div class="tabs">
//      <div class="topics">
//          <span class="title">TRENDING TOPICS:</span>
//  </div>
//      </div>
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response);
    response.data.topics.forEach(item => {       
        headerContainer.apphendChild(tabMaker(item));
    });
  })
  .catch(error => {
    console.log("You got nothing---TRY AGAIN", error);
  });

  function tabMaker(tabs) {

    //create Element
    const tab = document.createElement('div');
    const topic = document.createElement('div');
    const title = document.createElement('span');
    //add classes
    tab.classList.add('tabs');
    topic.classList.add('topics');
    title.classList.add('title');
    //set text content
    tab.textContent = tabs.data.tab;
    tab.textContent = tabs.data.topic
    tab.textContent = tabs.data.title
    //structure els
    
    tab.apphendChild(topic);
    topic.apphendChild(title);




  }