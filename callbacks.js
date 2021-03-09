const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
  console.log("we are here");
  setTimeout(()=> {
    let output = '';
    posts.forEach((post, index)=> {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

//hypothetically we are working with server - so we use setTimeOut to mimic
function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

getPosts();

createPost({title: 'Post Three', body: 'This is post three'})

// we are not seeing post 3 - the reason is beacuse the createPost took longer than getPost. By the time
// it create post, DOM is already painted. It can't do anything beyond that point  this is where async programming comes in, and this is 
// when callbacks come in, which is one way to handle it 