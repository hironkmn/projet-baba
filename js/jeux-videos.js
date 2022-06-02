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
    question: "Quel jeu Zelda sépare la timeline en 3 ? ",
    answers: [
      { text: "Majora's Mask", correct: false },
      { text: "Ocarina of Time", correct: true },
      { text: "Skyward Sword", correct: false },
      { text: "Link's Awakening", correct: false }
    ]
},
{
  question: "Quel est le nom de la map zombie de Call of Duty qui se passe dans un théatre ? ",
  answers: [
    { text: "Verruckt", correct: false },
    { text: "Call of the dead", correct: false },
    { text: "Shi no numa", correct: false },
    { text: "Kino Der Toten", correct: true }
  ]
},
{
  question: "L'idée de base de The Last of Us a été développé après que ses créateurs ont vue : ",
  answers: [
    { text: "Un documentaire  sur les fourmis", correct: true },
    { text: "Un documentaire apocalypse sur la guerre", correct: false },
    { text: "Un documentaire sur l’impact écologique de l’Homme", correct: false },
    { text: "Un documentaire sur les différentes espèce de champignon", correct: false }
  ]
},
{
  question: "Red dead Redemption fait suite à quel jeu ? ",
  answers: [
    { text: "Red Dead Colt", correct: false },
    { text: "Red Dead West", correct: false },
    { text: "Red Dead Revolver", correct: true },
    { text: "Red Dead Imagination", correct: false }
  ]
},
{
  question: "Le créateur de Zelda a donné ce nom à cette princesse car : ",
  answers: [
    { text: "Sa fille se nomme Zelda", correct: false },
    { text: "Il voulait rendre hommage à la femme d'un auteur", correct: true },
    { text: "Sa mère s'appelait Zelda", correct: false },
    { text: "Il avait juste envie comme ça sonnait bien", correct: false }
  ]
},
{
  question: "Quel est le nom de la ville sous marine dans Bioshock ? ",
  answers: [
    { text: "Colombia", correct: false },
    { text: "Aquatic", correct: false },
    { text: "Rapture", correct: true },
    { text: "Lav'O Baleine", correct: false }
  ]
},
{
  question: "Combien d'enfants à Bowser ",
  answers: [
    { text: "6", correct: false },
    { text: "7", correct: false },
    { text: "8", correct: true },
    { text: "9", correct: false }
  ]
},
{
  question: "Quel est le nom de l'ennemi juré du Professeur Layton dans la 1er trilogie ",
  answers: [
    { text: "Don paolo", correct: true },
    { text: "Don Pablo Picasso", correct: false },
    { text: "Don Pedro", correct: false },
    { text: "Don parmigiano", correct: false }
  ]
},
{
  question: "Dans God of War de quel dieu Kratos est-il le serviteur avant de se retourner contre lui ? ",
  answers: [
    { text: "Hades", correct: false },
    { text: "Zeus", correct: false },
    { text: "Ares", correct: true },
    { text: "Chronos", correct: false }
  ]
},
{
  question: "Quelle saga n'a jamais eu le droit à son adaptation en jeu LEGO ",
  answers: [
    { text: "Le Hobbit", correct: false },
    { text: "Batman", correct: false },
    { text: "Jurassic World", correct: false },
    { text: "Retour vers le futur", correct: true }
  ]
}
]