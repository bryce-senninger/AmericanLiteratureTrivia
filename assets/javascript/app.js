let correct = 0;

let incorrect = 0;

let unanswered = 0;

let questionIndex = 0;

let countStart = 30;

let timer;

let questions = [{
        question: 'Famous for classics such as "The Old Man and the Sea" and "For Whom The Bell Tolls", this American Author tragically commit suicide on July 2, 1961.',
        options: ["William Faulkner", "Herman Melville", "Jack London", "Ernest Hemingway"],
        answer: "Ernest Hemingway",
        image: "assets/images/hemingway.gif"
    }, {
        question: "Which of these books was NOT written by F. Scott Fitzgerald?",
        options: ["This Side of Paradise", "The Curious Case of Benjamin Button", "The Great Gatsby", "Fahrenheit 451"],
        answer: "Fahrenheit 451",
        image: "assets/images/fitzgerald.gif"
    }, {
        question: '"Walden" by Henry David Thorea is named after his time spent at what location?',
        options: ["Walden Pond", "Walden Hotel", "Walden, a town in Vermont", "Walden Manor"],
        answer: "Walden Pond",
        image: "assets/images/thoreau.gif"
    }, {
        question: "John Steinbeck is famous for writing, among others, this American literary classic.",
        options: ["The Catcher in the Rye", "Of Mice and Men", "The Crucible", "The Red Badge of Courage"],
        answer: "Of Mice and Men",
        image: "assets/images/steinbeck.gif"
    }, {
        question: "What American author's birthname was actually Samuel Langhorne Clemens?",
        options: ["Richard Wright", "Mark Twain", "Nathaniel Hawthorne", "Stephen Crane"],
        answer: "Mark Twain",
        image: "assets/images/twain.gif"
    }, {
        question: 'Famous for an unconventional writing style such as that demonstrated in "Slaughterhouse-Five", this author wrote many books inspired by his experiences as a soldier in WWII.',
        options: ["Ray Bradbury", "Truman Capote", "Joseph Heller", "Kurt Vonnegut"],
        answer: "Kurt Vonnegut",
        image: "assets/images/vonnegut.gif"
    }, {
        question: 'Quoth the _______, "nevermore."',
        options: ["Crow", "Raven", "Hawk", "Eagle"],
        answer: "Raven",
        image: "assets/images/poe.gif"
    }, {
        question: "What American classic was written by female author Harper Lee?",
        options: ["To Kill a Mockingbird", "A Raisin in the Sun", "The Jungle", "A Farewell to Arms"],
        answer: "To Kill a Mockingbird",
        image: "assets/images/lee.gif"
    }, {
        question: "Which of the following poems was written by Walt Whitman?",
        options: ["Brahma", "The Road Not Taken", "Because I Could Not Stop Death", "Leaves of Grass"],
        answer: "Leaves of Grass",
        image: "assets/images/whitman.gif"
    }, {
        question: "How old was Sylvia Plath when she published her first poem?",
        options: ["8 years old", "12 years old", "34 years old", "41 years old"],
        answer: "8 years old",
        image: "assets/images/plath.gif"
}];

$(document).on("click", "#start", function() {
     $("#questionContent").empty();
     displayQuestion();
});

function displayQuestion() {
    countStart = 30;
    $("#questionContent").empty();
    $("#questionContent").append("<h2 id='timer'>Time Remaining: " + countStart + "</h2>");
    $("#questionContent").append("<p>" + questions[questionIndex].question + "</p>");
    for (i = 0; i < questions[questionIndex].options.length; i++) {
        $("#questionContent").append("<button id='options' value='" + questions[questionIndex].options[i] + "'>" + questions[questionIndex].options[i] + "</button>");
    };
    countDown();
};

function checkAnswer() {
    if (guess === questions[questionIndex].answer) {
        correctAnswer();
    } else {
        incorrectAnswer();
    };
};

let guess;

$(document).on("click", "#options", function() {
    guess = this.value;
    checkAnswer();
});

function correctAnswer() {
    $("#questionContent").empty();
    $("#questionContent").append("<h2>Correct! Nicely done!</h2>");
    $("#questionContent").append("<img src=" + questions[questionIndex].image + ">");
    stopFunction();
    questionIndex++;
    correct++;
    setTimeout(checkIfOver, 4000);
};

function incorrectAnswer() {
    $("#questionContent").empty();
    $("#questionContent").append("<h2>Incorrect, the correct answer was " + '"' + questions[questionIndex].answer + '"</h2>');
    $("#questionContent").append("<img src=assets/images/incorrect3.gif>")
    stopFunction();
    questionIndex++;
    incorrect++;
    setTimeout(checkIfOver, 4000);
};

function outOfTime() {
    $("#questionContent").empty();
    $("#questionContent").append("<h2>Out of time! The correct answer was " + '"' + questions[questionIndex].answer + '"</h2>');
    $("#questionContent").append("<img src=assets/images/time.gif>")
    stopFunction();
    questionIndex++;
    unanswered++;
    setTimeout(checkIfOver, 4000);
};

function countDown() {
    if (countStart > 0) {
        timer = setTimeout(updateTimer, 1000);
    } else {
        outOfTime();
    };
};

function updateTimer() {
    countStart--;
    $("#timer").html("Time Remaining: " + countStart);
    countDown();
};

function stopFunction() {
    clearTimeout(timer);
};

function gameOver() {
    $("#questionContent").empty();
    $("#questionContent").append("<h2>Game over! Here's how you did!</h2>");
    $("#questionContent").append("<p>Correct answers: " + correct + "</p>");
    $("#questionContent").append("<p>Incorrect answers: " + incorrect + "</p>");
    $("#questionContent").append("<p>Unanswered questions: " + unanswered + "</p>");
    $("#questionContent").append("<button id='startOver'>Start Over?</button>");
}

function checkIfOver() {
    if (questionIndex === 10) {
        gameOver();
    } else {
        displayQuestion();
    };
};

$(document).on("click", "#startOver", function() {
    $("#questionContent").empty();
    questionIndex = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    displayQuestion();
});