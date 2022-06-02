const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const purpleNeon = getComputedStyle(document.getElementById('cadre')).boxShadow

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  document.getElementById('cadre').style.boxShadow = purpleNeon
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
  heroes = ['batgirl', 'nightwing', 'hood', 'robin']
  items = document.getElementsByClassName("btn")
  for(i = 0; i < items.length; i++){
      items[i].classList.add(heroes[i])
  }
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  
  setStatusClass(document.getElementById("cadre"), correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
    if(button.dataset.correct){
        let style = document.querySelector('button.correct')
        let style2 = document.getElementById('cadre')
        style2.style.boxShadow = getComputedStyle(style).boxShadow
    }
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Retourner au menu ?'
    startButton.href = '../menu.html'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: "À quel anime appartient cette réplique : La passion et les rêves sont comme le temps, rien ne peut les arrêter, et il en sera ainsi tant qu'il y aura des hommes prêts à donner un sens au mot Liberté ",
    answers: [
      { text: "L'attaque des titans", correct: true },
      { text: "One Piece", correct: false },
      { text: "Chainsaw Man", correct: false },
      { text: "Naruto", correct: false }
    ]
},
{
  question: "Dans Jujutsu Kaisen, qui est le seul exorciste vivant à pouvoir presque rivaliser contre Gojo Satoru? ",
  answers: [
    { text: "Kento Nanami", correct: false },
    { text: "Yuta Okkotsu", correct: true },
    { text: "Maki Zenin", correct: false },
    { text: "Itadori Yuji", correct: false }
  ]
},
{
  question: "Quel studio d'animation a révolutionné le monde des animes avec Neon Genesis Evangelion ?",
  answers: [
    { text: "Trigger", correct: false },
    { text: "Mappa", correct: false },
    { text: "Gainax", correct: true },
    { text: "Unfotable", correct: false }
  ]
},
{
  question: " Lequel de ses mangas n'est pas écrit pas un ancien assistant de Fujimoto (Chainsaw Man)",
  answers: [
    { text: "Spy x Family", correct: false },
    { text: "Dandadan", correct: false },
    { text: "Hell's Paradise", correct: false },
    { text: "Sakamoto Days", correct: true }
  ]
},
{
  question: " Lequel de ces animes a le plus d'épisodes Filler ?",
  answers: [
    { text: "Naruto Shippuden", correct: false },
    { text: "Bleach", correct: false },
    { text: "Detective Conan", correct: true },
    { text: "Boruto", correct: false }
  ]
},
{
  question: "Comment s'appelle la mère de Eren Jäger ?",
  answers: [
    { text: "Natasha", correct: false },
    { text: "Nina", correct: false },
    { text: "Maria", correct: false },
    { text: "Carla", correct: true }
  ]
},
{
  question: "Dans Full Metal Alchimist, que sont les Homonculus ? ",
  answers: [
    { text: "Des êtres artificiels ayant pour noyau une pierre philosophale", correct: true },
    { text: "Des mutants", correct: true },
    { text: "Des alchimistes maudits", correct: false },
    { text: "wtf ça existe pas les homonculus trop bizarre toi", correct: false }
  ]
},
{
  question: "Dans quel anime une fille à une obsession malsaine pour un garçon qu'elle surnomme Yuki ? ",
  answers: [
    { text: "Another", correct: false },
    { text: "Erased", correct: false },
    { text: "Danganronpa", correct: false },
    { text: "Mirai Nikki", correct: true }
  ]
},
{
  question: "De quel anime provient cette OST ? ",
  answers: [
    { text: "Neon Genesis Evangelion", correct: false },
    { text: "Devilman Crybaby", correct: true },
    { text: "Jujutsu Kaisen", correct: false },
    { text: "Kill la Kill", correct: false }
  ]
},
{
  question: "De quel manga provient cet opening ? ",
  answers: [
    { text: "Mob Psycho 100", correct: true },
    { text: "Vinland Saga", correct: false },
    { text: "Fire Force", correct: false },
    { text: "Bleach", correct: false }
  ]
}
]