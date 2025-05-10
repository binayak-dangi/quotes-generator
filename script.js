const quotesByCategory = {
    science: [
        "The most beautiful thing we can experience is the mysterious. - Albert Einstein",
        "Nothing in life is to be feared, it is only to be understood. - Marie Curie",
        "Science is not only a disciple of reason but also of romance and passion. - Stephen Hawking",
        "We are all connected; to each other, biologically. To the earth, chemically. To the rest of the universe, atomically. - Neil deGrasse Tyson"
    ],
    inspiration: [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "Your limitation—it's only your imagination. - Unknown",
      "Push yourself, because no one else is going to do it for you. - Unknown"
    ],
    life: [
      "Life is what happens when you're busy making other plans. - John Lennon",
      "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
      "Get busy living or get busy dying. - Stephen King",
      "You only live once, but if you do it right, once is enough. - Mae West"
    ],
    love: [
        "Love is when the other person's happiness is more important than your own. - H. Jackson Brown Jr.",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr. Seuss",
        "The best thing to hold onto in life is each other. - Audrey Hepburn",
        "Love isn't something you find. Love is something that finds you. - Loretta Young"
    ]
  };

  const categorySelect = document.getElementById('categorySelect');
  const quoteDisplay = document.getElementById('quoteDisplay');

  let currentCategory = 'science';
  categorySelect.addEventListener('change', (event) => {
    currentCategory = event.target.value;
    currentQuotes = quotesByCategory[currentCategory];
    currentQuoteIndex = Math.floor(Math.random() * currentQuotes.length);
    quoteDisplay.innerText = currentQuotes[currentQuoteIndex];
  });

  let currentQuoteIndex = 0;
  let currentQuotes = quotesByCategory[currentCategory];

  quoteDisplay.innerText = currentQuotes[currentQuoteIndex]


  const randomQuote = () => {
    currentQuoteIndex=(Math.random())*currentQuotes.length;
    currentQuoteIndex = Math.floor(currentQuoteIndex);
    quoteDisplay.innerText = currentQuotes[currentQuoteIndex];
    
  }
  const nextQuote = () => {
    currentQuoteIndex=currentQuoteIndex + 1;
    if (currentQuoteIndex == currentQuotes.length) {
        currentQuoteIndex = 0;
    }
    quoteDisplay.innerText = currentQuotes[currentQuoteIndex];
    
  }
  const prevQuote = () => {
    currentQuoteIndex=currentQuoteIndex - 1;
    if (currentQuoteIndex <= 0) {
        currentQuoteIndex = currentQuotes.length - 1;
    }
    quoteDisplay.innerText = currentQuotes[currentQuoteIndex];
    
  }

//   for theme
let theme = "light";
        let image = ["brightness.jpeg", "dark.jpeg"];
        let index = 0;
        const mode = () => {
            if (theme == "light") {
                theme = "dark"
                document.getElementById("turnOn").style.backgroundColor = `black`;
                document.getElementById("quoteDisplay").style.backgroundColor = `black`;
                document.getElementById("turnOn").style.color = `white`;
                document.getElementById("btn").src = image[1];
            } else {
                theme = "light"
                document.getElementById("turnOn").style.backgroundColor = `white`;
                document.getElementById("quoteDisplay").style.backgroundColor = `white`;
                document.getElementById("turnOn").style.color = `black`;
                document.getElementById("btn").src = image[0];
            }
        }
  

        // font size increase and decrease
        let fontSize = 17;
        const fontIncrease = () => {
            if (fontSize < 28){
                fontSize= fontSize + 1;
                document.getElementById("quoteDisplay").style.fontSize = `${fontSize}px`;
            }
        }
        const fontDecrease = () => {
            if (fontSize > 11){
                fontSize= fontSize - 1;
                document.getElementById("quoteDisplay").style.fontSize = `${fontSize}px`;
            }
        }
