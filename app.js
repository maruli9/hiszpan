// ===================== HISTORY =====================

console.log("APP START");
console.log("quotes:", typeof quotes);

let currentSongIndex = 0;
let currentSongTitle = "Por fin";
let learningHistory = JSON.parse(localStorage.getItem("learningHistory")) || [];
console.log("HISTORY START:", learningHistory);

function saveHistory() {
  localStorage.setItem("learningHistory", JSON.stringify(learningHistory));
}

function addToHistory(quote) {
  if (!quote || !quote.words) return;

  const exists = learningHistory.some(q => q.text === quote.text);

  if (!exists) {
    learningHistory.push(quote);
    saveHistory();
  }
}

// ===================== QUOTE SYSTEM =====================

function getQuoteOfTheHour() {
  const now = new Date();
  const hour = now.getHours();

  if (hour < 8 || hour > 20) {
    return {
      text: "Czas odpoczynku 😴",
      translation: "To czas odpoczynku",
      words: []
    };
  }

  const index = (hour - 8) % quotes.length;
  const quote = quotes[index];

  addToHistory(quote);

  return quote;
}

let currentQuote;

if (typeof quotes !== "undefined" && quotes.length > 0) {
  currentQuote = getQuoteOfTheHour();
} else {
  currentQuote = {
    text: "Brak danych",
    translation: "",
    words: []
  };
}

// ===================== FAVORITES =====================

function saveFavorite() {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!currentQuote) return;

  const exists = favorites.some(f => f.text === currentQuote.text);

  if (!exists) {
    favorites.push(currentQuote);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  showFavorites();
}

function showFavorites() {
  const favDiv = document.getElementById("favorites");
  if (!favDiv) return;

  favDiv.innerHTML = "";

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  favorites.forEach((q, index) => {
    const div = document.createElement("div");

    const text = document.createElement("span");
    text.textContent = `${q.text || ""} - ${q.translation || ""}`;

    const btn = document.createElement("button");
    btn.textContent = "❌";

    btn.onclick = () => removeFavorite(index);

    div.appendChild(text);
    div.appendChild(btn);

    favDiv.appendChild(div);
  });
}

function removeFavorite(index) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  favorites.splice(index, 1);

  localStorage.setItem("favorites", JSON.stringify(favorites));

  showFavorites();
}

// ===================== QUIZ =====================

let score = 0;
let questionIndex = 0;
let quizQuestions = [];

function startQuiz() {
  score = 0;
  questionIndex = 0;

  const words = learningHistory
    .filter(q => q.words && q.words.length > 0)
    .flatMap(q => q.words);

  if (words.length === 0) {
    alert("Brak danych do quizu");
    return;
  }

  quizQuestions = words.map(word => {
    let options = [word.pl];

    while (options.length < 3) {
      const randomQuote = learningHistory[Math.floor(Math.random() * learningHistory.length)];
      const randomWord = randomQuote?.words?.[Math.floor(Math.random() * (randomQuote?.words?.length || 1))];

      if (randomWord?.pl && !options.includes(randomWord.pl)) {
        options.push(randomWord.pl);
      }
    }

    options.sort(() => Math.random() - 0.5);

    return {
      question: word.es,
      correct: word.pl,
      options
    };
  });

  showQuestion();
}

function showQuestion() {
  const quizDiv = document.getElementById("quiz");
  if (!quizDiv) return;

  quizDiv.innerHTML = "";

  if (questionIndex >= quizQuestions.length) {
    const scoreEl = document.getElementById("score");
    if (scoreEl) {
      scoreEl.textContent = `Wynik: ${score} / ${quizQuestions.length}`;
    }
    return;
  }

  const q = quizQuestions[questionIndex];

  const title = document.createElement("p");
  title.textContent = q.question;
  quizDiv.appendChild(title);

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;

    btn.onclick = () => {
      if (opt === q.correct) {
        score++;
        btn.classList.add("correct");
      } else {
        btn.classList.add("wrong");
      }

      setTimeout(() => {
        questionIndex++;
        showQuestion();
      }, 500);
    };

    quizDiv.appendChild(btn);
  });
}

// ===================== DISPLAY =====================

function showQuote() {
  const q = document.getElementById("quote");
  const t = document.getElementById("translation");

  if (!q || !t) return;

  q.textContent = currentQuote?.text || "";
  t.textContent = currentQuote?.translation || "";
}

function showBreakdown() {
  const el = document.getElementById("breakdown");
  if (!el) return;

  el.innerHTML = "";

  currentQuote?.words?.forEach(word => {
    const div = document.createElement("div");
    div.textContent = `${word.es} = ${word.pl}`;
    el.appendChild(div);
  });
}

// ===================== RANDOM =====================

function getRandomQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  currentQuote = quote;
  addToHistory(quote);

  showQuote();
  showBreakdown();
}

// ===================== VERBS =====================

const verbConjugations = {
  ser: {
    yo: "soy",
    tú: "eres",
    él: "es",
    nosotros: "somos",
    vosotros: "sois",
    ellos: "son"
  },
  tener: {
    yo: "tengo",
    tú: "tienes",
    él: "tiene",
    nosotros: "tenemos",
    vosotros: "tenéis",
    ellos: "tienen"
  },
  ir: {
    yo: "voy",
    tú: "vas",
    él: "va",
    nosotros: "vamos",
    vosotros: "vais",
    ellos: "van"
  }
};

function showVerb(verb) {
  const conj = verbConjugations[verb];
  if (!conj) return;

  alert(Object.entries(conj).map(([k, v]) => `${k}: ${v}`).join("\n"));
}



let songProgress = JSON.parse(localStorage.getItem("songProgress")) || {};
function calculateSongProgress(songTitle) {
  const song = songs.find(s => s.title === songTitle);
  if (!song) return 0;

  const totalWords = song.lines.flatMap(l => l.words).length;

  const learned = songProgress[songTitle] || [];

  return Math.round((learned.length / totalWords) * 100);
}
function markWordLearned(songTitle, word) {
  if (!songProgress[songTitle]) {
    songProgress[songTitle] = [];
  }

  if (!songProgress[songTitle].includes(word)) {
    songProgress[songTitle].push(word);
  }

  localStorage.setItem("songProgress", JSON.stringify(songProgress));
}
function showSong(songTitle) {
  const container = document.getElementById("song");
  const progressEl = document.getElementById("songProgress");

  const song = songs.find(s => s.title === songTitle);
  if (!song) return;

  currentSongTitle = songTitle;

  const line = song.lines[currentSongIndex];

  container.innerHTML = "";

  const text = document.createElement("p");
  text.textContent = line.text;

  const translation = document.createElement("small");
  translation.textContent = line.translation;

  container.appendChild(text);
  container.appendChild(translation);

  const percent = calculateSongProgress(songTitle);
progressEl.textContent = `Linijka ${currentSongIndex + 1} / ${song.lines.length} | Opanowanie: ${percent}%`;
}
function nextLine() {
  const song = songs.find(s => s.title === currentSongTitle);
  if (!song) return;

  if (currentSongIndex < song.lines.length - 1) {
    currentSongIndex++;
  } else {
    currentSongIndex = 0; // 🔥 wraca na początek zamiast znikać
  }

  showSong(currentSongTitle);
}
function prevLine() {
  const song = songs.find(s => s.title === currentSongTitle);
  if (!song) return;

  if (currentSongIndex > 0) {
    currentSongIndex--;
  } else {
    currentSongIndex = song.lines.length - 1; // 🔥 skok na koniec
  }

  showSong(currentSongTitle);
}

let songQuiz = [];
let songQuizIndex = 0;
let songScore = 0;

function startSongQuiz(songTitle) {
  const song = songs.find(s => s.title === songTitle);
  if (!song) return;

  songQuiz = song.lines.map(line => {
    const words = line.text.split(" ");
    const hiddenIndex = Math.floor(Math.random() * words.length);

    const correct = words[hiddenIndex];

    let options = [correct];

    while (options.length < 3) {
      const randomLine = song.lines[Math.floor(Math.random() * song.lines.length)];
      const randomWord = randomLine.text.split(" ")[Math.floor(Math.random() * randomLine.text.split(" ").length)];

      if (!options.includes(randomWord)) {
        options.push(randomWord);
      }
    }

    options.sort(() => Math.random() - 0.5);

    words[hiddenIndex] = "_____";

    return {
      question: words.join(" "),
      correct,
      options
    };
  });

  songQuizIndex = 0;
  songScore = 0;

  showSongQuestion(songTitle);
}
function showSongQuestion(songTitle) {
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";

  if (songQuizIndex >= songQuiz.length) {
    quizDiv.innerHTML = `Wynik: ${songScore}/${songQuiz.length}`;
    return;
  }

  const q = songQuiz[songQuizIndex];

  const title = document.createElement("p");
  title.textContent = q.question;

  quizDiv.appendChild(title);

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;

    btn.onclick = () => {
      if (opt === q.correct) {
        songScore++;

        // 🔥 zapis progresu
        markWordLearned(songTitle, q.correct);

        btn.classList.add("correct");
      } else {
        btn.classList.add("wrong");
      }

      setTimeout(() => {
        songQuizIndex++;
        showSongQuestion(songTitle);
      }, 500);
    };

    quizDiv.appendChild(btn);
  });
}
// ===================== SPEECH =====================

function speakQuote() {
  if (!currentQuote) return;

  const utterance = new SpeechSynthesisUtterance(currentQuote.text);
  utterance.lang = "es-ES";
  utterance.rate = 0.9;

  speechSynthesis.speak(utterance);
}




// ===================== AUTO UPDATE =====================

setInterval(() => {
  currentQuote = getQuoteOfTheHour();
  showQuote();
  showBreakdown();
}, 60000);

// ===================== INIT =====================

window.addEventListener("load", () => {
  if (typeof quotes !== "undefined") {
    currentQuote = getQuoteOfTheHour();
    showQuote();
    showBreakdown();
  }

  showFavorites();
});