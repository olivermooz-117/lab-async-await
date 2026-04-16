// Write your code here!
async function displayPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  //sample code data
  const sampleData = [ 
    {
      title: "sunt aut facere repellat",  
      body:"quia et suscipit\nsuscipit"
    }
  ]
  // fetch data from the API
  const fakeFetch = () => {
    return Promise.resolve(
      { json: () => Promise.resolve(sampleData) }
    ) 
  }

  //fake fetch function
  try {
    const response = await fakeFetch();
    const posts = await response.json();
    const postList = document.getElementById('post-list');
     

     // for each post,
     posts.forEach(post => { 
     const li = document.createElement('li');
     const h1 = document.createElement('h1');
     h1.textContent = posts[0].title;
     const p = document.createElement('p');
     p.textContent = posts[0].body;
     
     li.appendChild(h1);
     li.appendChild(p);
     postList.appendChild(li);
  });
  } catch (error) {
    console.error('Error fetching posts:', error);
  } 
}

  displayPosts();