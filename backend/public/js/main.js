const chatBox=document.getElementById("msg")
const chatbtn=document.getElementById("tick")
const msgContainer=document.querySelector(".containers")
const userlist=document.querySelector(".users")
const currentRoom=document.querySelector(".Roomname")



const {username,room}=Qs.parse(location.search,{
    ignoreQueryPrefix:true
})
console.log(username,room)
const socket= io()

socket.emit("joinroom",{username,room})
socket.on("roomUsers",({room,users})=>{
    getroomname(room)
    getusernames(users)
})

socket.on("message",message=>{
   
    console.log(message)
    showMessage(message,"right")
    msgContainer.scrollTop=msgContainer.scrollHeight

})

chatbtn.addEventListener("click",()=>{

const chats=msg.value;
socket.emit("chatMessage",chats)
msg.value=''

})

function showMessage(message,position){
    const div=document.createElement("div")
    div.classList.add("message")
    div.classList.add(position)
    div.innerHTML=`${message.username}: ${message.text}<p id="time">${message.time}</p>`
    msgContainer.appendChild(div)

}

function getroomname(room){
  currentRoom.innerHTML=room
}
function getusernames(users){
 userlist.innerHTML=`
 ${users.map(user=>`<div class="list">${user.username}</div>`).join('')}`
}