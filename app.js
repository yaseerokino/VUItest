const activate = document.querySelector(".activate");

function updateScroll() {
  var element = document.getElementById("divmain");
  element.scrollTop = element.scrollHeight;
}

//Modules

let undergraduate = [
  "Undergraduate individual project",
  "individual project",
  "Individual project",
  "final year project",
  "Final year project",
  "undergraduate individual project",
  "CST3990",
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
  "CST3140",
];

let business = [
  "Business intelligence",
  "business intelligence",
  "who takes business intelligence",
  "CST3340",
];

let projectManagement = [
  "Project management",
  "project management",
  "who takes project management",
  "CST2560",
];

let softwareEngineering = [
  "Software engineering",
  "software engineering",
  "who takes software engineering",
  "CST2550",
];

let webApplication = [
  "Web Application",
  "web application",
  "who takes web application",
  "CST2120",
];

let informationSystems = [
  "Information systems",
  "Information system",
  "information systems",
  "information system",
  "who takes information system",
  "CST2310",
];

let UserExperience = [
  "User experience",
  "user experience",
  "who takes user experience",
];

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

let modules = ["module", "modules", "courses", "course"];

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

let created = [
  "created",
  "who created you",
  "created you",
  "your creator",
  "who made you",
  "made you",
];

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

  //modules ******** courses********

  for (let i = 0; i < novelInteraction.length; i++) {
    if (userMessage.indexOf(novelInteraction[i]) > -1) {
      speech.text =
        "Novel Interaction is taken in room BG05 and is taught by Dr Girish Bekaroo, lecture time is always on tuesdays, from 1pm to 4pm, i just opened MDX My Learning for more detailed information";
      window.open(
        "https://mdx.mrooms.net/",
        "My Learning",
        "height=700,width=900"
      );
    }
  }

  for (let i = 0; i < undergraduate.length; i++) {
    if (userMessage.indexOf(undergraduate[i]) > -1) {
      speech.text =
        "Undergraduate Individual Project is taken in room CG03 and is taught by Dr Girish Bekaroo, lecture is scheduled for some thursdays, from 1pm to 2pm, i just opened MDX My Learning for more detailed information";
      window.open(
        "https://mdx.mrooms.net/",
        "My Learning",
        "height=700,width=900"
      );
    }
  }

  for (let i = 0; i < business.length; i++) {
    if (userMessage.indexOf(business[i]) > -1) {
      speech.text =
        "Business Intelligence is taken in room CG03 and is taught by Dr Suraj Juddo, lecture time is always on mondays, from 2pm to 3pm, i just opened MDX My Learning for more detailed information";
      window.open(
        "https://mdx.mrooms.net/",
        "My Learning",
        "height=700,width=900"
      );
    }
  }

  for (let i = 0; i < UserExperience.length; i++) {
    if (userMessage.indexOf(UserExperience[i]) > -1) {
      speech.text =
        "User Experience (UX) is taken in room CG03 and is taught by Dr Priscilla Ramsamy, lecture time is always on mondays, from 10am to 11am, i just opened MDX My Learning for more detailed information";
      window.open(
        "https://mdx.mrooms.net/",
        "My Learning",
        "height=700,width=900"
      );
    }
  }

  for (let i = 0; i < projectManagement.length; i++) {
    if (userMessage.indexOf(projectManagement[i]) > -1) {
      speech.text =
        "Project Management and Professional Practice is is taught by Waseemah Moedeen, i just opened MDX My Learning for more detailed information";
      window.open(
        "https://mdx.mrooms.net/",
        "My Learning",
        "height=700,width=900"
      );
    }
  }

  for (let i = 0; i < softwareEngineering.length; i++) {
    if (userMessage.indexOf(softwareEngineering[i]) > -1) {
      speech.text =
        "Project Management and Professional Practice is is taught by Aditya Santokhee, i just opened MDX My Learning for more detailed information";
      window.open(
        "https://mdx.mrooms.net/",
        "My Learning",
        "height=700,width=900"
      );
    }
  }

  for (let i = 0; i < referencing.length; i++) {
    if (userMessage.indexOf(referencing[i]) > -1) {
      speech.text =
        "Middlesex university uses the Harvard referencing standard, i just opened a page on a new tab, where you access documents on using harvard referencing";

      window.open(
        "https://www.citethisforme.com/citation-generator/harvard",
        "Harvard Referencing",
        "height=700,width=900"
      );
    }
  }

  for (let i = 0; i < modules.length; i++) {
    if (userMessage.indexOf(modules[i]) > -1) {
      speech.text = "Which Module do you want information on";
    }
  }

  if (
    userMessage.includes("dissertation") ||
    userMessage.includes("Dissertation")
  ) {
    speech.text =
      "MDX Leaning enhancement team can provide you with information in regards to writing your dissertations you can email them at n.rozah@mdx.ac.mu";
  }

  if (userMessage.includes("thank you")) {
    speech.text =
      "you are most welcome, is there anything else i can do for you";
  }

  if (userMessage.includes("yes") || userMessage.includes("Yes")) {
    speech.text =
      "Alright, don't forget to activate me when you need something";
  }

  if (userMessage.includes("no") || userMessage.includes("No")) {
    speech.text = "What else would you like me to do for you";
  }

  if (userMessage.includes("thank you")) {
    speech.text =
      "you are most welcome, is there anything else i can do for you";
  }

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

  if (
    userMessage.includes("programming") ||
    userMessage.includes("how to program") ||
    userMessage.includes("where can i program")
  ) {
    speech.text =
      "you can learn the programming on linkedIn learning, i just opened the Unihub login page on a new browser window, enter your valid credentials, and you will be redirected to LinkedIn learning, from there you can just search programming and you will see a variety of courses and tutorials, If it's not good enough, you can always search youtube.com";
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
    window.open(url, "Antonym | Synonym", "height=500,width=700");
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
