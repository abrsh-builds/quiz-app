const quizQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    id: 3,
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    id: 4,
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    id: 5,
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "Jane Austen",
    ],
    answer: "William Shakespeare",
  },
  {
    id: 6,
    question: "What is the chemical symbol for water?",
    options: ["O2", "H2O", "CO2", "NaCl"],
    answer: "H2O",
  },
  {
    id: 7,
    question: "Which animal is known as the King of the Jungle?",
    options: ["Tiger", "Elephant", "Lion", "Gorilla"],
    answer: "Lion",
  },
  {
    id: 8,
    question: "How many days are there in a leap year?",
    options: ["364", "365", "366", "367"],
    answer: "366",
  },
  {
    id: 9,
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
  {
    id: 10,
    question: "Which country is home to the kangaroo?",
    options: ["South Africa", "Brazil", "Australia", "India"],
    answer: "Australia",
  },
  {
    id: 11,
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Liver", "Skin", "Lungs"],
    answer: "Skin",
  },
  {
    id: 12,
    question: "In which year did World War II end?",
    options: ["1943", "1945", "1947", "1950"],
    answer: "1945",
  },
  {
    id: 13,
    question: "What is the currency of Japan?",
    options: ["Yuan", "Won", "Yen", "Ringgit"],
    answer: "Yen",
  },
  {
    id: 14,
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    id: 15,
    question: "How many players are on a standard soccer team on the field?",
    options: ["9", "10", "11", "12"],
    answer: "11",
  },
];
let questionNumberCounter = 0;
let score = 0;
let hasAnswered = false;
const questionCounter = document.querySelector(".question-counter");
const questionText = document.querySelector(".question-text");
const optionsList = document.querySelector(".options-list");
const option = document.querySelectorAll(".option");
const nextBtn = document.querySelector(".next");
const scoreTeller = document.querySelector(".score");

nextBtn.addEventListener("click", function () {
  if (questionNumberCounter < quizQuestions.length) {
    questionText.style.display = "block";
    optionsList.style.display = "grid";
    questionCounter.textContent = `Question ${quizQuestions[questionNumberCounter].id} of 15`;

    questionText.textContent = quizQuestions[questionNumberCounter].question;

    option[0].textContent = quizQuestions[questionNumberCounter].options[0];

    option[1].textContent = quizQuestions[questionNumberCounter].options[1];

    option[2].textContent = quizQuestions[questionNumberCounter].options[2];

    option[3].textContent = quizQuestions[questionNumberCounter].options[3];

    questionNumberCounter++;
    hasAnswered = false;

    option.forEach((option) => {
      option.style.backgroundColor = "";
      option.classList.remove("disabled");
    });
  } else {
    document.querySelector(".quiz-container").style.display = "none";
    document.querySelector(".score").style.display = "block";

    questionCounter.innerHTML = `The Quiz has ended, You scored ${score}/15 questions`;
    scoreTeller.innerHTML = "please refresh the page to restart the quiz... ";
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    nextBtn.click();
  }
});

option.forEach((option) => {
  {
    option.addEventListener("click", function () {
      if (hasAnswered === true) {
        return;
      }

      if (
        option.textContent === quizQuestions[questionNumberCounter - 1].answer
      ) {
        option.style.backgroundColor = "rgba(58, 146, 58, 0.484)";
        score++;
      } else {
        option.style.backgroundColor = "rgb(152, 50, 50)";
        forWrong();
      }
      hasAnswered = true;
      option.classList.toggle("disabled");
    });
  }
});

function forWrong() {
  option.forEach((option) => {
    if (
      option.textContent === quizQuestions[questionNumberCounter - 1].answer
    ) {
      option.style.backgroundColor = "rgba(58, 146, 58, 0.484)";
    }
  });
}
