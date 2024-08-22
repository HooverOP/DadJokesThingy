const dadjokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "I only know 25 letters of the alphabet. I don't know y.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why did the coffee file a police report? It got mugged.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why did the math book look sad? Because it had too many problems.",
    "How does a penguin build its house?Igloos it together",
];

function joke() {
    const thejoke = document.querySelector('.joke');
    const randomjoke = dadjokes[Math.floor(Math.random() * dadjokes.length)];
    thejoke.textContent = randomjoke;
}

document.querySelector('.button button').addEventListener('click', joke);
