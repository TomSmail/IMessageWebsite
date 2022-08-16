/* 
1. Need to get messages from message box (user input)
2. Display user's message as a 'me' message
3. Create a selection of if statements that are able to recognise certain messages
4. On these specific messages send specific responses, answering the question
*/
let numberOfBadQuestions = 0;

function sendMessage(sender, message){
    const node = document.createElement('line');
    const element = document.createElement('message')
    element.classList.add(sender);
    const textNode = document.createTextNode(message);
    element.appendChild(textNode);
    node.appendChild(element);
    document.getElementById("messageArea").insertAdjacentElement('beforeBegin', node);
}
function recieveMessage(){
    let userMessage =  document.getElementById('inputMessage').value;
    console.log('Hello!');
    console.log(userMessage);
    sendMessage('me', userMessage);
    sendResponse(userMessage);
    document.getElementById('inputMessage').value = '';
}

function sendResponse(userMessage){
    console.log(userMessage);
    var simplifiedMessage = userMessage.toLowerCase();
    console.log(simplifiedMessage);
    let response = '';
    const possibleMessages = ['what is your favourite project?', 'what was your most difficult project?', 'which project did you learn the most from?'];
    switch (simplifiedMessage){
    case possibleMessages[0]:
        response = 'My favourite project was my emotion recognition app, that I built for my A-level coursework. This is because I learnt a lot about machine learning and it also scored me full marks!';
        sendMessage('you', response);
        break;
    case possibleMessages[1]:
        response = 'I would say the KURVS Dark Matter project was the most difficult as it required the most maths and complex physics.';
        sendMessage('you', response);
        break;
    case possibleMessages[2]:
        response = 'I learnt the most from building Swapify as it was my first hackathon project entry and therefore required me to work in a team. Thus, I learnt to work efficiently in a team as well as lots from my team members on programming technique.';
        sendMessage('you', response);
        break;
    case 'help!':
        response = 'You can ask these questions: ';
        possibleMessages.forEach(function(value){
            response += value;
            response += ', ';
        });
        sendMessage('you', response);
        break;
    default:
        const triggerNumberOfBadQuestions = 2;
        if (numberOfBadQuestions < triggerNumberOfBadQuestions){
        const responses = ['I dont understand what you are trying to say!', 'Try asking a different question, I don\'t understand what you mean!', 'I can\'t answer that, sorry!'];
        var randomNumber = Math.floor(Math.random() * responses.length);
        response = responses[randomNumber];
        }else{
            var randomNumber = Math.floor(Math.random() * possibleMessages.length);
            response = `Try asking: '${possibleMessages[randomNumber]}', or try asking for 'help!'`;
        }
        sendMessage('you', response);
        numberOfBadQuestions ++;
        break;
    }

}