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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Solution 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}


createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
// So now it waited 2 sec and then show all of the post - still we can improve the delay in next solution

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Solution 2 - promises ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

function createPost(post) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      // to resolve
      const error = false;
      if(!error) {
        resolve();
      } else {
        reject('Error: Something went wrong!')
      }
    }, 2000);
  })
}


createPost({title: 'Post Three', body: 'This is post three'})
  .then(getPosts)
  .catch(err => console.log(err));