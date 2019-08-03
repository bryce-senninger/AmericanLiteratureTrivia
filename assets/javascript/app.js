let correct = 0;

let incorrect = 0;

let questionIndex = 0;

let countStart = 30;

let card = $("#questionContent");

let questions = [{
        question: "Famous for classics such as 'The Old Man and the Sea' and 'For Whom The Bell Tolls', this American Author tragically committed suicide on July 2, 1961.",
        options: ["William Faulkner", "Herman Melville", "Jack London", "Ernest Hemingway"],
        answer: "Ernest Hemingway"
    }, {
        question: "Which of these books was NOT written by F. Scott Fitzgerald?",
        options: ["This Side of Paradise'", "The Curious Case of Benjamin Button", "The Great Gatsby", "Fahrenheit 451"],
        answer: "Fahrenheit 451"
    }, {
        question: "Where did Henry David Thoreau stay while writing 'Walden'?",
        options: ["A cabin near Walden pond", "A room in Walden Hotel", "A town called Walden in Vermont", "Walden Manor, a large coutryside estate in the rural Midwest"],
        answer: "A cabin near Walden pond"
    }, {
        question: "John Steinbeck is famous for writing, among others, this American literary classic.",
        options: ["The Catcher in the Rye", "Of Mice and Men", "The Crucible", "The Red Badge of Courage"],
        answer: "Of Mice and Men"
    }, {
        question: "What American author's birthname was actually Samuel Langhorne Clemens?",
        options: ["Richard Wright", "Mark Twain", "Nathaniel Hawthorne", "Stephen Crane"],
        answer: "Mark Twain"
    }, {
        question: "Famous for an unconventional writing style such as that demonstrated in 'Slaughterhouse-Five', this author wrote many books inspired by his experiences as a soldier in WWII.",
        options: ["Ray Bradbury", "Truman Capote", "Joseph Heller", "Kurt Vonnegut"],
        answer: "Kurt Vonnegut"
    }, {
        question: "Quoth the _______, 'nevermore.'",
        options: ["Crow", "Raven", "Hawk", "Eagle"],
        answer: "Raven"
    }, {
        question: "What American classic was written by female author Harper Lee?",
        options: ["To Kill a Mockingbird", "A Raisin in the Sun", "The Jungle", "A Farewell to Arms"],
        answer: "To Kill a Mockingbird"
    }, {
        question: "Which of the following poems was written by Walt Whitman?",
        options: ["Brahma", "The Road Not Taken", "Because I Could Not Stop Death", "Leaves of Grass"],
        answer: "Leaves of Grass"
    }, {
        question: "How old was Sylvia Plath when she published her first poem?",
        options: ["8 years old", "12 years old", "34 years old", "41 years old"],
        answer: "8 years old"
}];

$(document).on("click", "#start", function() {
     $("#questionContent").empty();
     $("#question").html("<p>Hello</p>");
})