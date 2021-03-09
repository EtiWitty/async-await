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

getPosts();

