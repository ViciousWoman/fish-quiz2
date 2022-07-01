// gett some elements
const image = document.querySelector('#fish-img');
const choices = Array.from(document.querySelectorAll('choice-text'));

let currentImage = {}; //Image in guestion 
let imageCounter = 0; // Will ceep track of the images
let acceptingAnswers = true;

// image/choices available
let imageInQuestion = [
    {
        imageExample: /workspace/FishQuiz/assets/images/carp (2).jpg,
        answer1: 'Carp',
        answer2: 'Perch',
        answer3: 'Roach',
        answer4: 'Koi',
        answer: 1,
    },
    {
        imageExample: /workspace/FishQuiz/assets/images/pearch.jpg,
        answer1: 'Largemouth Bass',
        answer2: 'Minnow',
        answer3: 'Zander',
        answer4: 'Perch',
        answer: 4,
    },
    {
        imageExample: /workspace/FishQuiz/assets/images/rainbow.jpg,
        answer1: 'Guppy',
        answer2: 'Rainbow Trout',
        answer3: 'Brown Trout',
        answer4: 'Tiger Trout',
        answer: 2,
    },
    {
        imageExample: /workspace/FishQuiz/assets/images/tench.jpg,
        answer1: 'Alligator Gar',
        answer2: 'Bream',
        answer3: 'Greayling',
        answer4: 'Tench',
        answer: 3,
    }
]