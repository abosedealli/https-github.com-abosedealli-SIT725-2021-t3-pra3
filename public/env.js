env.js
const testButtonFunction=()=>{
  alert('Thank you for clicking')
}
// connect to the socket
let socket = io();
socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
})
// connect to the socket

let socket = io();


socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
})

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
