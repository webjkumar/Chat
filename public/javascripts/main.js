//var socket = io()
//socket.on("chat", endChat)
$(() => {
    if ($("#send").length > 0) {
        //getChats()
    }


    $("#send1").on("click", function () {
        var chatMessage = {
            name: $("#txtName").val(), chat: $("#txtMessage").val()
        }
        console.log("chatMessage", chatMessage);
        postChat(chatMessage)
    });


})

function postChat(chat) {
    console.log("/chats/set", chat);
    $.post("http://localhost:9090/chatslist", chat)
}

function getChats() {
    $.get("/chats/list", (chats) => {
        chats.forEach(addChat)
    })
}

function addChat(chatObj) {
    $("#messages").append(`<h5>${chatObj.name} </h5><p>${chatObj.chat}</p>`);
}

function endChat(chatObj) {
    addChat(chatObj);
    //socket.emit('end');
}