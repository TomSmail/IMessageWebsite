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
    console.log(userMessage);
    if (userMessage !== ''){
        sendMessage('me', userMessage);
    }else{
        console.log('Needs to have input populated!');
    }
    addLoadAnimation();
    document.getElementById('inputMessage').value = '';
    setTimeout(() => {removeLoadAnimation();
        sendResponse(userMessage);}, 1500);
}

function addLoadAnimation(){
    const node = document.createElement('div');
    node.classList.add('dot-flashing');
    document.getElementById("loadingArea").insertAdjacentElement('beforeEnd', node);
}

function removeLoadAnimation(){
    document.getElementById("loadingArea").innerHTML = "";
}

function normaliseString(string){
    let newString = string.toString();
    var regex = /[.,\/#!$%\^&\*;:{}=\-_`~()?]/g;
    var normalisedString = newString.toLowerCase();
    normalisedString = normalisedString.replace(regex, '')
    console.log('This is the normalised String: ' + normalisedString)
    return normalisedString
}
function sendResponse(userMessage){
    console.log(userMessage);
    var simplifiedMessage = normaliseString(userMessage);
    console.log(simplifiedMessage);
    let response = '';
    const possibleMessages = ['What is your favourite project?', 'What was your most difficult project?', 'Which project did you learn the most from?', 'How did you learn Java?', 'How did you learn JavaScript?', ];
    switch (simplifiedMessage){
    case normaliseString(possibleMessages[0]):
        response = 'My favourite project was my emotion recognition app, that I built for my A-level coursework. This is because I learnt a lot about machine learning and it also scored me full marks!';
        sendMessage('you', response);
        break;
    case normaliseString(possibleMessages[1]):
        response = 'I would say the KURVS Dark Matter project was the most difficult as it required the most maths and complex physics.';
        sendMessage('you', response);
        break;
    case normaliseString(possibleMessages[2]):
        var response1 = 'I learnt the most from building Swapify as it was my first hackathon project entry and therefore required me to work in a team.';
        var response2 = 'Thus, I learnt to work efficiently in a team as well as lots from my team members on programming technique.'
        sendMessage('you', response1);
        sendMessage('you', response2);
        break;
    case normaliseString(possibleMessages[3]):
        var response1 = 'First I did the Codecadamy course for Java, then I built a discord bot.';
        var response2 = 'You can find the discord bot by looking at my Github page, which can be found in my portfolio-profile!'
        sendMessage('you', response1);
        sendMessage('you', response2);
        break;
    case normaliseString(possibleMessages[4]):
        var response1 = 'I wrote the code that makes this website responsive!';
        var response2 = 'I also learnt a bit of it on Codecadamy.';
        sendMessage('you', response1);
        sendMessage('you', response2);
        break;
    case 'help':
        response = 'You can ask these questions: ';
        possibleMessages.forEach(function(value){
            response += value;
            response += ', ';
        });
        sendMessage('you', response);
        break;
    case '':
        break;
    case 'test scroll':
        response = 'Lorem ipsum dolor sit amet. Sit optio sint ex adipisci molestias aut voluptatem tenetur 33 minima distinctio? Qui laborum voluptatem aut velit porro et iure pariatur non dolor dolores et dolorem ipsum aut accusamus officiis hic facilis officiis. Ut modi autem ut autem deleniti et corrupti nobis.';
        sendMessage('you', response);
        sendMessage('you', response);
        sendMessage('you', response);
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
            response = `Try asking: '${possibleMessages[randomNumber]}', or try asking for 'help'`;
        }
        sendMessage('you', response);
        numberOfBadQuestions ++;
        break;
    }

}