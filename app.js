const activate = document.querySelector(".activate");

function updateScroll() {
  var element = document.getElementById("divmain");
  element.scrollTop = element.scrollHeight;
}

let greetings = ["hello", "hi", "how are you", "howdy"];
let greetingsreply = ["i am good, how are you", "hey, how are you doing"];
let possibleGreetingsReply = [
  "i am good",
  "i am fine",
  "i'm fine",
  "fine",
  "i'm good",
  "good",
  "i am okay",
  "okay",
  "i'm okay",
];
let replyAfterGreeting = [
  "wonderful, how may i be of assistance to you",
  "that's excellent, what can i help you with",
  "great, do you need assistance with something",
  "that's great, always remember to stay happy, and how may i be of assistance to you ",
];

let modules = [
  "module",
  "my modules",
  "modules",
  "what modules do i take",
  "courses",
  "course",
];

let referencing = [
  "how do i reference",
  "reference",
  "referencing",
  "harvard referencing",
  "harvard reference",
  "harvard",
];

let programming = [
  "learn programming",
  "programming",
  "how to program",
  "can you teach me how to program",
  "how can i learn programming",
  "program",
];

let novelInteraction = [
  "Who takes novel interaction",
  "novel interaction details",
  "novel interaction room",
  "what room so i have novel interaction",
  "novel interaction",
  "novel",
  "interaction",
  "novel interaction lecturer",
];

let created = [
  "created",
  "who created you",
  "created you",
  "your creator",
  "who made you",
  "made you",
];

let reference;

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();

//recognition.interimResults = true;

const humanText = (text) => {
  const chatP = document.createElement("p");
  chatP.classList.add("message");

  const span = document.createElement("span");
  span.classList.add("float");

  let user = "USER: ";
  const spanText = document.createTextNode(user);
  span.appendChild(spanText);

  const chatText = document.createTextNode(text);
  chatP.appendChild(span);
  chatP.appendChild(chatText);

  //main.appendChild(chatP);
  return chatP;
};

const vaText = (text) => {
  const chatPVa = document.createElement("p");
  chatPVa.classList.add("reply");

  const spanVa = document.createElement("span");
  spanVa.classList.add("float");

  let assitant = " :ASSISTANT";
  const spanTextVa = document.createTextNode(assitant);
  spanVa.appendChild(spanTextVa);

  const chatTextVa = document.createTextNode(text);
  chatPVa.appendChild(chatTextVa);
  chatPVa.appendChild(spanVa);

  //main.appendChild(chatP);
  return chatPVa;
};

const vaVoice = (userMessage) => {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "Sorry I did not understand that";

  for (let i = 0; i < greetings.length; i++) {
    if (userMessage.indexOf(greetings[i]) > -1) {
      let randomGreeting =
        greetingsreply[Math.floor(Math.random() * greetingsreply.length)];
      speech.text = randomGreeting;
    }
  }
  for (let i = 0; i < possibleGreetingsReply.length; i++) {
    if (userMessage.indexOf(possibleGreetingsReply[i]) > -1) {
      speech.text =
        replyAfterGreeting[
          Math.floor(Math.random() * replyAfterGreeting.length)
        ];
    }
  }
  for (let i = 0; i < created.length; i++) {
    if (userMessage.indexOf(created[i]) > -1) {
      speech.text = "I was created by Yaseer Okino, @yaseerokino ";
    }
  }

  for (let i = 0; i < novelInteraction.length; i++) {
    if (userMessage.indexOf(novelInteraction[i]) > -1) {
      speech.text =
        "Novel Interaction is taken in room BG03 and is taught by Dr Girish Bekaroo, lecture time is always on tuesdays, from 1pm to 4pm";
    }
  }

  for (let i = 0; i < referencing.length; i++) {
    if (userMessage.indexOf(referencing[i]) > -1) {
      speech.text =
        "Middlesex university uses the Harvard referencing standard, i just opened a page on a new tab, where you access documents on using harvard referencing";
      window.open("https://www.w3schools.com");
    }
  }

  for (let i = 0; i < modules.length; i++) {
    if (userMessage.indexOf(modules[i]) > -1) {
      speech.text =
        "Your modules include, CST3140 - Novel Interaction, CST3340 - Business Intelligence, CST3180 - User Experience and Design, and finally CST3990 - Information Technology Project, which caters for your individual undergraduate project., will that be all";
    }
  }

  if (userMessage.includes("thank you")) {
    speech.text =
      "you are most welcome, is there anything else i can do for you";
  }

  // if (userMessage.includes("Java") || userMessage.includes("java")) {
  //   speech.text =
  //     "you can learn the JAVA programming language on linkedIn learning, i just opened the Unihub login page on a new browser window, enter your valid credentials, and you will be redirected to LinkedIn learning, if you don't want use linkedIn learning.";
  //   window.open(
  //     "https://www.linkedin.com/checkpoint/enterprise/login/42408908?application=learning",
  //     "LinkedIn Learning",
  //     "height=500,width=700"
  //   );
  // }

  if (
    userMessage.includes("Javascript") ||
    userMessage.includes("javascript") ||
    userMessage.includes("JavaScript")
  ) {
    speech.text =
      "you can learn the Javascript programming language on linkedIn learning, i just opened the Unihub login page on a new browser window, enter your valid credentials, and you will be redirected to LinkedIn learning, from there you can just search javascript and you will see a variety of courses and tutorials, If it's not good enough, you can always search youtube.com";
    window.open(
      "https://www.linkedin.com/checkpoint/enterprise/login/42408908?application=learning",
      "LinkedIn Learning",
      "height=500,width=700"
    );
  }

  if (userMessage.includes("search") || userMessage.includes("Search")) {
    speech.text =
      "Alright i will " +
      userMessage +
      ".... i just opened a browser window with the results";
    url = "http://www.google.com/search?q=" + userMessage;
    window.open(url, "Search", "height=500,width=700");
  }

  if (userMessage.includes("synonym") || userMessage.includes("Synonym")) {
    speech.text =
      "okay, i am checking for the " +
      userMessage +
      ".... i just opened a browser window with the results";
    url = "http://www.google.com/search?q=" + userMessage;
    window.open(url, "Search", "height=500,width=700");
  }

  if (userMessage.includes("antonym") || userMessage.includes("antonym")) {
    speech.text =
      "alright, i am checking for the " +
      userMessage +
      ".... i just opened a browser window with the results";
    url = "http://www.google.com/search?q=" + userMessage;
    window.open(url, "Search", "height=500,width=700");
  }

  if (userMessage.includes("Python") || userMessage.includes("python")) {
    speech.text =
      "you can learn the Python programming language on linkedIn learning, i just opened the Unihub login page on a new browser window, enter your valid credentials, and you will be redirected to LinkedIn learning, if you don't want use linkedIn learning.";
    window.open(
      "https://www.linkedin.com/checkpoint/enterprise/login/42408908?application=learning",
      "LinkedIn Learning",
      "height=500,width=700"
    );
  }

  //   if (userMessage.includes("how are you")) {
  //     speech.text = "I am fine, thanks. How are you ?";
  //   }
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  let main = document.querySelector(".main");
  main.appendChild(vaText(speech.text));
  updateScroll();
};

recognition.onstart = () => {
  console.log("voice activated");
  // const speech = new SpeechSynthesisUtterance();
  // speech.text =
  //   "Hello, i am your persona virtual assistant, how may i be of help";
  // window.speechSynthesis.speak(speech);
  // let main = document.querySelector(".main");
  // main.appendChild(vaText(speech.text));
};

recognition.onresult = (event) => {
  console.log(event);
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  //msg.textContent = transcript;
  let main = document.querySelector(".main");
  main.appendChild(humanText(transcript));
  vaVoice(transcript);
};

activate.addEventListener("click", () => {
  recognition.start();
});

// const main = document.querySelector(".main");

// let greetings = ["hello", "hi", "good day"];

// window.SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new window.SpeechRecognition();
// recognition.interimResults = true;

// let p = document.createElement("p");

// recognition.addEventListener("result", (e) => {
//   const text = Array.from(e.results)
//     .map((result) => result[0])
//     .map((result) => result.transcript)
//     .join("");

//   p.innerHTML = text;
//   main.appendChild(p);

//   if (e.results[0].isFinal) {
//     for (let i = 0; i < greetings.length; i++) {
//       if (text.indexOf(greetings[i]) > -1) {
//         p = document.createElement("p");
//         p.classList.add("right");
//         p.innerText = "Welcome my name is VA";
//         main.appendChild(p);
//       } else if (text.includes("are you")) {
//         p = document.createElement("p");
//         p.classList.add("right");
//         p.innerText = "i am your virtual assitant";
//         main.appendChild(p);
//       }
//     }

//     p = document.createElement("p");
//   }
//   console.log(text);
// });

// recognition.addEventListener("end", () => {});

// const appStart = () => {
//   recognition.start();
// };
