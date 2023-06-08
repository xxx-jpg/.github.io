var playerName = prompt("Voer je naam in:");
var playerPoints = 0;
var currentQuestionIndex = 0;
var resultText = document.getElementById("result");
var questionText = document.getElementById("question");
var answerInput = document.getElementById("answer");
var playerNameElement = document.getElementById("player-name");
var playerPointsElement = document.getElementById("player-points");

playerNameElement.textContent = playerName;

var questions = [
  {
    question: "Welke planeet uit ons zonnestelsel staat het dichtst bij de zon?",
    answer: "Mercurius"
  },
  {
    question: "Welk beroemd schilderij wordt ook wel La Jocombe genoemd?",
    answer: "Mona Lisa"
  },
  {
    question: "Waar staat de afkorting cc voor in emails?",
    answer: "Carbon Copy"
  },
  {
    question: "Hoe luidt de stelling van Pythagoras?",
    answer: "a^2 + b^2 = c^2"
  },
  {
    question: "Wat zijn de eerste drie letters van het Griekse alfabet?",
    answer: "Alpha Beta Gamma"
  },
  {
    question: "Welk Chinese stad wordt gezien als oorsprong van het Coronavirus?",
    answer: "Wuhan"
  },
  {
    question: "Welke populaire social media app heeft een spookje in het logo?",
    answer: "Snapchat"
  },
  {
    question: "Welke Nederlandse stad wordt ook wel de sleutelstad genoemd?",
    answer: "Leiden"
  },
  {
    question: "Wat is de naam van het proces waarbij planten zonlicht omzetten in voedsel?",
    answer: "Fotosynthese"
  },
  {
    question: "Hoe wordt Breda tijdens Carnaval genoemd?",
    answer: "Kielegat"
  },
  {
    question: "Welk Zwitser ontdekte in 1938 de hallucinogene stof lsd?",
    answer: "Albert Hofmann"
  },
  {
    question: "Waar staat de afkorting BOB voor als we het hebben over iemand die niet drinkt?",
    answer: "Bewust Onbeschonken Bestuurder"
  },
  {
    question: "Waar staat de afkorting WiFi voor?",
    answer: "Wireless Fidelity"
  },
  {
    question: "Welk land heeft het grootste inwoneraantal in Europa?",
    answer: "Rusland"
  },
  {
    question: "Hoeveel kleuren zitten er in een regenboog?",
    answer: "7"
  },
  {
    question: "In hoeveel dagen draait de Aarde een keer volledig rond de zon?",
    answer: "365"
  },
  {
    question: "Welke waterkering tussen de provincies Noord-Holland en Friesland is 32.5 km lang?",
    answer: "Afsluitdijk"
  },
  {
    question: "Wat is de munteenheid in Irak?",
    answer: "Iraakse dinar"
  },
  {
    question: "Wat is de laatste letter van het Griekse alfabet?",
    answer: "Omega"
  },
  {
    question: "Met welk woord wordt de letter T in het NAVO-spellingsalfabet aangeduid?",
    answer: "Tango"
  },
  {
    question: "Wat is het symbool voor het scheikundig element zilver?",
    answer: "Ag"
  },
  {
    question: "Met welke fobie wordt pleinvrees bedoeld?",
    answer: "Agorafobie"
  },
  {
    question: "In welke stad werd John F. Kennedy vermoord?",
    answer: "Dallas"
  },
  {
    question: "Waar staat het acroniem NASA voor?",
    answer: "National Aeronautics and Space Administration"
  },
  {
    question: "Wat is de naam van het SNCF-vlaggenschip van de Franse hogesnelheidstrein?",
    answer: "TGV (Train à Grande Vitesse)"
  },
  {
    question: "Wat is de hoogst mogelijke score bij een potje bowlen?",
    answer: "300"
  },
  {
    question: "Wie speelde de rol van James Bond in de film 'Casino Royale' uit 2006?",
    answer: "Daniel Craig"
  },
  {
    question: "Welk Nieuwe Wereldwonder vind je in Mexico?",
    answer: "Chichén Itzá"
  },
  {
    question: "Hoe noem je een groep uilen bij elkaar?",
    answer: "Een parlement"
  },
  {
    question: "Welke noot wordt ook wel 'brazil nut' genoemd?",
    answer: "Paranoot"
  },
  {
    question: "Welke rivier stroomt door Berlijn?",
    answer: "De Spree"
  },
  {
    question: "Uit hoeveel leden bestond de boyband Backstreet Boys?",
    answer: "5"
  },
  {
    question: "Wat is de beste combinatie van vijf kaarten in een spel poker?",
    answer: "Royal Flush"
  },
  {
    question: "Welk dier staat bekend als de 'koning van de jungle'?",
    answer: "Leeuw"
  },
  {
    question: "Wat is het hoogste gebouw ter wereld?",
    answer: "Burj Khalifa"
  },
  {
    question: "Wat is de hoofdstad van Iran?",
    answer: "Teheran"
  },
  {
    question: "Van welke soort fruit heb je Fuji, Jazz en Kanzi?",
    answer: "Appel"
  },
  {
    question: "Tussen welke 2 steden liep de eerste spoorlijn in Nederland?",
    answer: "Amsterdam en Haarlem"
  },
  {
    question: "Waar werd Napoleon in 1815 definitief verslagen?",
    answer: "Waterloo"
  },
  {
    question: "Hoe heet het gebouw waar de Amerikaanse president werkt?",
    answer: "Het Witte Huis"
  },
  {
    question: "Welke social media app daagt je uit om je 'echte' leven te delen en stuurt elke dag op een willekeurig moment een melding, waarna je twee minuten de tijd krijgt om een foto te maken?",
    answer: "Snapchat"
  },
  {
    question: "Waar staat de afkorting LCD voor als we het hebben over beeldschermen?",
    answer: "Liquid Crystal Display"
  },
  {
    question: "In welke stad vind je het Teylers Museum?",
    answer: "Haarlem"
  },
  {
    question: "Met welk woord wordt de letter R in het NAVO-spellingsalfabet aangeduid?",
    answer: "Romeo"
  },
  {
    question: "Wie was de eerste president van de Verenigde Staten?",
    answer: "George Washington"
  },
  {
    question: "In welk jaar werd de Verenigde Naties opgericht?",
    answer: "1945"
  },
  {
    question: "Van welke Amerikaanse staat was Arnold Schwarzenegger van 2003 tot 2011 gouverneur?",
    answer: "Californië"
  },
  {
    question: "Wat is de naam van de 16e-eeuwse voorspeller die volgens zijn aanhangers onder meer de Wereldoorlogen, Hitler en het communisme heeft voorspeld?",
    answer: "Nostradamus"
  },
  {
    question: "Welke bloedgroep mag bloedtransfusies van elke bloedgroep ontvangen?",
    answer: "Bloedgroep AB"
  },
  {
    question: "Wat is het Romeins cijfer 'C'?",
    answer: "100"
  },
  {
    question: "Wat is de naam van de internationale organisatie voor hoogbegaafden?",
    answer: "Mensa"
  },
  {
    question: "Welke kleuren hebben de ringen in het symbool van de Olympische Spelen?",
    answer: "Blauw, geel, zwart, groen en rood"
  },
  {
    question: "Welke Amerikaanse feestdag wordt elk jaar gevierd op de vierde donderdag van november?",
    answer: "Thanksgiving"
  },
  {
    question: "Hoe lang is een olympisch zwembad in meters?",
    answer: "50"
  },
  {
    question: "Wie was de eerste vrouw die een Nobelprijs won (in 1903)?",
    answer: "Marie Curie"
  },
  {
    question: "Wat is de hoofdstad van Canada?",
    answer: "Ottawa"
  },
  {
    question: "Wie schreef het boek '1984'?",
    answer: "George Orwell"
  },
  {
    question: "Hoeveel snaren heeft een ukelele doorgaans?",
    answer: "4"
  },
  {
    question: "Hoe worden de officiële inwoners van Dubai genoemd?",
    answer: "Emiratis"
  },
  {
    question: "Wat is de bekendste Italiaanse voetbalclub?",
    answer: "Juventus"
  },
  {
    question: "Welk bekend speelgoedmerk heeft een themapark in Denemarken?",
    answer: "LEGO"
  },
  {
    question: "Wie schilderde de Mona Lisa?",
    answer: "Leonardo da Vinci"
  }
];

function checkAnswer() {
  var userAnswer = answerInput.value.trim();
  var currentQuestion = questions[currentQuestionIndex];
  
  if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
    playerPoints++;
    resultText.textContent = "Goed antwoord!";
    playerPointsElement.textContent = "Punten: " + playerPoints;
  } else {
    resultText.textContent = "Fout antwoord!";
  }
  
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    showNextQuestion();
  } else {
    showEndScreen();
  }
}

function showNextQuestion() {
  var nextQuestion = questions[currentQuestionIndex];
  questionText.textContent = nextQuestion.question;
  answerInput.value = "";
  resultText.textContent = "";
}

function showEndScreen() {
  questionText.textContent = "Quiz beëindigd!";
  answerInput.style.display = "none";
  resultText.textContent = "Je hebt " + playerPoints + " punten behaald!";
}

showNextQuestion();

