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
    startButton.innerText = 'Relancer le BaptQuiz ?'
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
    question: "En quelle année débute l'histoire de Stranger Things?",
    answers: [
      { text: '1981', correct: true },
      { text: '1983', correct: false },
      { text: '1985', correct: false },
      { text: '1987', correct: false }
    ]
  },
  {
    question: "Quel film se partage les mêmes créateurs que la série Sense 8 ?",
    answers: [
      { text: 'Interstellar', correct: false },
      { text: 'Matrix', correct: true },
      { text: 'Scream', correct: false },
      { text: 'Mad Max', correct: false }
    ]
  },
  {
      question: "Sur quelle planète Luke est-il parti pour apprendre à devenir un véritable Jedi ?",
      answers: [
        { text: 'Coruscant', correct: false },
        { text: 'Mustafar', correct: false },
        { text: 'Naboo', correct: false },
        { text: 'Dagobah', correct: true }
      ]
  },
  {
    question: "Quel est le second film Disney juste après Blanche Neige ?",
    answers: [
      { text: 'Cendrillon', correct: false },
      { text: 'Pinocchio', correct: true },
      { text: 'Peter Pan', correct: false },
      { text: 'Alice au pays des merveilles ', correct: false }
    ]
  },
  {
    question: "De quel film provient cette OST ?",
    answers: [
      { text: 'Little Miss Sunshine', correct: false },
      { text: 'The Dark Knight', correct: false },
      { text: 'Blade Runner 2049', correct: false },
      { text: 'Dune', correct: true }
    ]
  },
  {
    question: "Dans retour vers le futur 2, quelle invention découvrent les héros ?",
    answers: [
      { text: 'Les toilettes connectés', correct: false },
      { text: 'les trotinettes électrique', correct: false },
      { text: 'Le cinéma 3D', correct: true },
      { text: 'Le Smartphone', correct: false }
    ]
  },
  {
    question: "Dans quel film américain Donald Trump joue-t-il son propre rôle ?",
    answers: [
      { text: "Chérie j'ai rétréci les gosses", correct: false },
      { text: "Maman, j'ai encore raté l'avion", correct: true },
      { text: "La nuit au musée", correct: false },
      { text: "Les Gremlins", correct: false }
    ]
  },
  {
    question: "Quel film raconte l’histoire d’un jeune homme qui va devenir tailleur de haie et coiffeur ?",
    answers: [
      { text: "Charlie et la chocolaterie", correct: false },
      { text: "Edward aux mains d'argent", correct: true },
      { text: "Forrest Gump", correct: false },
      { text: "Django Unchained", correct: false }
    ]
  },
  {
    question: "Katy Perry, Britney Spears, Jennifer Lopez, Enrique Iglesias ou encore Mike Tyson apparaissent dans des épisodes de…",
    answers: [
      { text: "Friends", correct: false },
      { text: "Brooklyn Nine Nine", correct: false },
      { text: "The Office", correct: false },
      { text: "How I met your Mother", correct: true }
    ]
  },
  {
    question: "Quelle est la série la plus téléchargé illégalement?",
    answers: [
      { text: "Game Of Thrones", correct: true },
      { text: "The Walking Dead", correct: false },
      { text: "Breaking Bad", correct: false },
      { text: "Arcane", correct: false }
    ]
  }
]