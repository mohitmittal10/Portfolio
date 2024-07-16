


apikey = '0606492eaaab3b6b3305977debe17105';
url = 'https://gnews.io/api/v4/search?q=software AND engineering&lang=en&country=in&in=title&max=10&apikey=' + apikey;

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    articles = data.articles;

    for (i = 0; i < articles.length-1; i++) {
      // articles[i].title
      //console.log("Title: " + articles[i]['title']);
      // articles[i].description
      //console.log("Description: " + articles[i]['description']);
      //console.log("Content: " + articles[i]['content']);

      //creating card that displays blogs
      
      // You can replace {property} below with any of the article properties returned by the API.
      // articles[i].{property}
      // console.log(articles[i]['{property}']);

      // Delete this line to display all the articles returned by the request. Currently only the first article is displayed.
      

      //creating divs to display api call results
      //create main div with class name card
      const cardDiv = document.createElement("div");
      cardDiv.className = "card";

      // image element
      const imgElement = document.createElement("img");
      imgElement.id = "blog-img";
      if (articles[i]['image']) {
        imgElement.src = articles[i]['image'];
        console.log(articles[i]['image'])
      }
      
      imgElement.alt = "image"

      // Create the div for blog title
      const blogTitleDiv = document.createElement("div");
      blogTitleDiv.id = "blog-title";
      blogTitleDiv.innerHTML = articles[i]['title'];

      // Create the div for blog description
      const blogDescDiv = document.createElement("div");
      blogDescDiv.id = "blog-desc";

      cardDiv.appendChild(imgElement);
      cardDiv.appendChild(blogTitleDiv);
      cardDiv.appendChild(blogDescDiv);

      // Append the card div to the body or any other existing element
      const parent = document.getElementsByClassName("card-container")[0];
      parent.appendChild(cardDiv);

      //add event listner to each card which direct to respective url fetched by api
      // cardDiv.addEventListener("click", ()=>{

      //   window.location.href = articles[i]['source']['url']

      // })
      //console.log(articles[i]['source']['url'])
    }
  });

