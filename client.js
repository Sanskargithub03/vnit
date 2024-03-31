const socket = io('http://localhost:8000')

const form = document.getElementByid('send-container');
const messageInput=Document.getElementbyid('messageInp')
const messagecontainer = document.querySelector(".container")
var audio =new Audio('ting.mp3');

const append = (message , position) =>{
    const messageElement = document.createElement('div');
    messageElement.innertext = message;
    messageElement.classListlist.add('message')
    messageElement.classList.add(position);
    messagecontainer.append(messageElement)
    if(position == 'left'){
    audio.play();
    }
}



form.addEventlistener('submit', (e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append('You,$(message)','right')
    socket.emit('send',message);
    messageInput.value = ''
    
})

const name = prompt("enter your name to join");
socket.emit(new user-joined, name);

socket.on('user-joined', name =>{
    append('${name} joined the chat','right')
})


socket.on('receive', data =>{
    append('${data.user} : ${data.message}','left')
})