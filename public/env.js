env.js
const testButtonFunction=()=>{
  alert('Thank you for clicking')
}
// connect to the socket
let socket = io();
socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
})

<<<<<<< HEAD
=======
// connect to the socket

let socket = io();


socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
})

>>>>>>> 4ebffd3203e1e037e99405d03f181e79e3556ff6
console.log('test')
$(document).ready(function(){
  console.log('Ready')
  
  //bind the button
  $('#testButton').click(testButtonFunction)

  //test get call
  $.get('/projects',(result)=>{
    console.log(result)
  })


})
