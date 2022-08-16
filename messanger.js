/* 
1. Need to get messages from message box (user input)
2. Display user's message as a 'me' message
3. Create a selection of if statements that are able to recognise certain messages
4. On these specific messages send specific responses, answering the question
*/

function sendMessage(sender, message){
    const node = document.createElement('line');
    const element = document.createElement('message')
    element.classList.add(sender);
    //const element = document.createElement(`div class='${sender}'`);
    const textNode = document.createTextNode(message);
    //node.appendChild(element);
    element.appendChild(textNode);
    node.appendChild(element);
    //`<message class=${sender}>${message}</message>`;
    document.getElementById("messageArea").insertAdjacentElement('beforeBegin', node);
}
function recieveMessage(){
    const userMessage =  document.getElementById('inputMessage').value;
    console.log('Hello!');
    console.log(userMessage);
    sendMessage("me", userMessage);
}