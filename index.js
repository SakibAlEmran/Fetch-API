/*--
    title: Fetch API
    description: play with API
    Author: Md.Sakib Al Emran
    Date: 16/11/2021
*/

//select element by id name
document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getAlbums').addEventListener('click', getAlbums);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);

//fuction to get the text file
function getText (){
    fetch('sample.txt')
        .then(res => res.text())
        .then(data => {
            document.getElementById('output').innerHTML = data;
        })
        .catch(err => console.log(err));
}

//get the users
function getUsers (){
    fetch('users.json')
        .then(res => res.json())
        .then((data) => {
            let output = "<h2> Users </h2>";
            data.forEach( (user) => {
                output += `
                    <ul>
                        <li> Name: ${user.name}</li>
                        <li> Email: ${user.email}</li>
                    </ul>
                `;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}

//get albums data from JSON PlaceHolder
function getAlbums (){
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then((data) => {
            let output = "<h2> Albums </h2>";
            data.forEach( (album) => {
                output += `
                    <div>
                        <h4>ID: ${album.id}</h4>
                        <p>Tittle: ${album.title}</p>
                    </div>
                `;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}

//get posts data
function getPosts (){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((data) => {
            let output = "<h2> Posts </h2>";
            data.forEach( (post) => {
                output += `
                    <div>
                        <h4>title: ${post.title}</h4>
                        <p>Body: ${post.body}</p>
                    </div>
                `;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}

//add post
function addPost (e){
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json"
        },
        body: JSON.stringify({title:title, body:body})         
    })
    .then(res => res.json())
    .then((data) => console.log(data))
    .catch(err => console.log(err));
}
