const quotes = [
  {
    text: "La vida es bella",
    translation: "Życie jest piękne",
    words: [
      { es: "La", pl: "the" },
      { es: "vida", pl: "życie" },
      { es: "es", pl: "jest" },
      { es: "bella", pl: "piękne" }
    ]
  },
  {
    text: "Todo es posible",
    translation: "Wszystko jest możliwe",
    words: [
      { es: "Todo", pl: "wszystko" },
      { es: "es", pl: "jest" },
      { es: "posible", pl: "możliwe" }
    ]
  },
  {
    text: "El tiempo vuela",
    translation: "Czas leci",
    words: [
      { es: "El", pl: "the" },
      { es: "tiempo", pl: "czas" },
      { es: "vuela", pl: "leci" }
    ]
  },
  {
    text: "Nunca te rindas",
    translation: "Nigdy się nie poddawaj",
    words: [
      { es: "Nunca", pl: "nigdy" },
      { es: "te", pl: "się" },
      { es: "rindas", pl: "poddawaj" }
    ]
  },
  {
    text: "El amor es vida",
    translation: "Miłość to życie",
    words: [
      { es: "El", pl: "the" },
      { es: "amor", pl: "miłość" },
      { es: "es", pl: "jest" },
      { es: "vida", pl: "życie" }
    ]
  },
  {
    text: "Vive el momento",
    translation: "Żyj chwilą",
    words: [
      { es: "Vive", pl: "żyj" },
      { es: "el", pl: "the" },
      { es: "momento", pl: "chwila" }
    ]
  },
  {
    text: "Hoy es un buen día",
    translation: "Dziś jest dobry dzień",
    words: [
      { es: "Hoy", pl: "dziś" },
      { es: "es", pl: "jest" },
      { es: "un", pl: "a" },
      { es: "buen", pl: "dobry" },
      { es: "día", pl: "dzień" }
    ]
  },
  {
    text: "El saber es poder",
    translation: "Wiedza to potęga",
    words: [
      { es: "El", pl: "the" },
      { es: "saber", pl: "wiedza" },
      { es: "es", pl: "jest" },
      { es: "poder", pl: "potęga" }
    ]
  },
  {
    text: "Haz lo mejor",
    translation: "Rób co najlepsze",
    words: [
      { es: "Haz", pl: "rób" },
      { es: "lo", pl: "to" },
      { es: "mejor", pl: "najlepsze" }
    ]
  },
  {
    text: "La práctica hace al maestro",
    translation: "Praktyka czyni mistrza",
    words: [
      { es: "La", pl: "the" },
      { es: "práctica", pl: "praktyka" },
      { es: "hace", pl: "czyni" },
      { es: "al", pl: "do" },
      { es: "maestro", pl: "mistrz" }
    ]
  },
  {
    text: "Todo tiene solución",
    translation: "Wszystko ma rozwiązanie",
    words: [
      { es: "Todo", pl: "wszystko" },
      { es: "tiene", pl: "ma" },
      { es: "solución", pl: "rozwiązanie" }
    ]
  },
  {
    text: "Cree en ti",
    translation: "Wierz w siebie",
    words: [
      { es: "Cree", pl: "wierz" },
      { es: "en", pl: "w" },
      { es: "ti", pl: "ciebie" }
    ]
  },
  {
    text: "El cambio es bueno",
    translation: "Zmiana jest dobra",
    words: [
      { es: "El", pl: "the" },
      { es: "cambio", pl: "zmiana" },
      { es: "es", pl: "jest" },
      { es: "bueno", pl: "dobra" }
    ]
  },
  {
    text: "Aprende cada día",
    translation: "Ucz się każdego dnia",
    words: [
      { es: "Aprende", pl: "ucz się" },
      { es: "cada", pl: "każdy" },
      { es: "día", pl: "dzień" }
    ]
  },
  {
    text: "El éxito llega",
    translation: "Sukces przychodzi",
    words: [
      { es: "El", pl: "the" },
      { es: "éxito", pl: "sukces" },
      { es: "llega", pl: "przychodzi" }
    ]
  },
  {
    text: "Sigue adelante",
    translation: "Idź naprzód",
    words: [
      { es: "Sigue", pl: "idź" },
      { es: "adelante", pl: "naprzód" }
    ]
  },
  {
    text: "El miedo pasa",
    translation: "Strach mija",
    words: [
      { es: "El", pl: "the" },
      { es: "miedo", pl: "strach" },
      { es: "pasa", pl: "mija" }
    ]
  },
  {
    text: "Todo comienza hoy",
    translation: "Wszystko zaczyna się dziś",
    words: [
      { es: "Todo", pl: "wszystko" },
      { es: "comienza", pl: "zaczyna się" },
      { es: "hoy", pl: "dziś" }
    ]
  },
  {
    text: "La paciencia gana",
    translation: "Cierpliwość wygrywa",
    words: [
      { es: "La", pl: "the" },
      { es: "paciencia", pl: "cierpliwość" },
      { es: "gana", pl: "wygrywa" }
    ]
  },
  {
    text: "Disfruta la vida",
    translation: "Ciesz się życiem",
    words: [
      { es: "Disfruta", pl: "ciesz się" },
      { es: "la", pl: "the" },
      { es: "vida", pl: "życie" }
    ]
  },
  {
  text: "La vida cambia",
  translation: "Życie się zmienia",
  words: [
    { es: "La", pl: "the" },
    { es: "vida", pl: "życie" },
    { es: "cambia", pl: "zmienia się" }
  ]
},
{
  text: "El sol brilla",
  translation: "Słońce świeci",
  words: [
    { es: "El", pl: "the" },
    { es: "sol", pl: "słońce" },
    { es: "brilla", pl: "świeci" }
  ]
},
{
  text: "Todo va bien",
  translation: "Wszystko idzie dobrze",
  words: [
    { es: "Todo", pl: "wszystko" },
    { es: "va", pl: "idzie" },
    { es: "bien", pl: "dobrze" }
  ]
},
{
  text: "La mente crea",
  translation: "Umysł tworzy",
  words: [
    { es: "La", pl: "the" },
    { es: "mente", pl: "umysł" },
    { es: "crea", pl: "tworzy" }
  ]
},
{
  text: "El trabajo da frutos",
  translation: "Praca daje owoce",
  words: [
    { es: "El", pl: "the" },
    { es: "trabajo", pl: "praca" },
    { es: "da", pl: "daje" },
    { es: "frutos", pl: "owoce" }
  ]
},
{
  text: "La calma ayuda",
  translation: "Spokój pomaga",
  words: [
    { es: "La", pl: "the" },
    { es: "calma", pl: "spokój" },
    { es: "ayuda", pl: "pomaga" }
  ]
},
{
  text: "El esfuerzo vale",
  translation: "Wysiłek się opłaca",
  words: [
    { es: "El", pl: "the" },
    { es: "esfuerzo", pl: "wysiłek" },
    { es: "vale", pl: "wart jest" }
  ]
},
{
  text: "La fe mueve montañas",
  translation: "Wiara przenosi góry",
  words: [
    { es: "La", pl: "the" },
    { es: "fe", pl: "wiara" },
    { es: "mueve", pl: "porusza" },
    { es: "montañas", pl: "góry" }
  ]
},
{
  text: "El tiempo cura",
  translation: "Czas leczy",
  words: [
    { es: "El", pl: "the" },
    { es: "tiempo", pl: "czas" },
    { es: "cura", pl: "leczy" }
  ]
},
{
  text: "Todo empieza hoy",
  translation: "Wszystko zaczyna się dziś",
  words: [
    { es: "Todo", pl: "wszystko" },
    { es: "empieza", pl: "zaczyna się" },
    { es: "hoy", pl: "dziś" }
  ]
},
{
  text: "La fuerza está en ti",
  translation: "Siła jest w tobie",
  words: [
    { es: "La", pl: "the" },
    { es: "fuerza", pl: "siła" },
    { es: "está", pl: "jest" },
    { es: "en", pl: "w" },
    { es: "ti", pl: "tobie" }
  ]
},
{
  text: "El cambio empieza",
  translation: "Zmiana się zaczyna",
  words: [
    { es: "El", pl: "the" },
    { es: "cambio", pl: "zmiana" },
    { es: "empieza", pl: "zaczyna się" }
  ]
},
{
  text: "La vida sigue",
  translation: "Życie toczy się dalej",
  words: [
    { es: "La", pl: "the" },
    { es: "vida", pl: "życie" },
    { es: "sigue", pl: "idzie dalej" }
  ]
},
{
  text: "El amor crece",
  translation: "Miłość rośnie",
  words: [
    { es: "El", pl: "the" },
    { es: "amor", pl: "miłość" },
    { es: "crece", pl: "rośnie" }
  ]
},
{
  text: "Todo tiene sentido",
  translation: "Wszystko ma sens",
  words: [
    { es: "Todo", pl: "wszystko" },
    { es: "tiene", pl: "ma" },
    { es: "sentido", pl: "sens" }
  ]
},
{
  text: "La luz llega",
  translation: "Światło przychodzi",
  words: [
    { es: "La", pl: "the" },
    { es: "luz", pl: "światło" },
    { es: "llega", pl: "przychodzi" }
  ]
},
{
  text: "El camino importa",
  translation: "Droga ma znaczenie",
  words: [
    { es: "El", pl: "the" },
    { es: "camino", pl: "droga" },
    { es: "importa", pl: "ma znaczenie" }
  ]
},
{
  text: "La verdad importa",
  translation: "Prawda ma znaczenie",
  words: [
    { es: "La", pl: "the" },
    { es: "verdad", pl: "prawda" },
    { es: "importa", pl: "ma znaczenie" }
  ]
},
{
  text: "El presente es hoy",
  translation: "Teraźniejszość jest dziś",
  words: [
    { es: "El", pl: "the" },
    { es: "presente", pl: "teraźniejszość" },
    { es: "es", pl: "jest" },
    { es: "hoy", pl: "dziś" }
  ]
},
{
  text: "La vida enseña",
  translation: "Życie uczy",
  words: [
    { es: "La", pl: "the" },
    { es: "vida", pl: "życie" },
    { es: "enseña", pl: "uczy" }
  ]
},
{
  text: "La vida es un regalo",
  translation: "Życie jest darem",
  words: [
    { es: "La", pl: "the" },
    { es: "vida", pl: "życie" },
    { es: "es", pl: "jest" },
    { es: "un", pl: "a" },
    { es: "regalo", pl: "dar" }
  ]
},
{
  text: "Cada día cuenta",
  translation: "Każdy dzień się liczy",
  words: [
    { es: "Cada", pl: "każdy" },
    { es: "día", pl: "dzień" },
    { es: "cuenta", pl: "liczy się" }
  ]
},
{
  text: "El mundo es grande",
  translation: "Świat jest duży",
  words: [
    { es: "El", pl: "the" },
    { es: "mundo", pl: "świat" },
    { es: "es", pl: "jest" },
    { es: "grande", pl: "duży" }
  ]
},
{
  text: "No hay límites",
  translation: "Nie ma ograniczeń",
  words: [
    { es: "No", pl: "nie" },
    { es: "hay", pl: "ma" },
    { es: "límites", pl: "ograniczeń" }
  ]
},
{
  text: "La mente es poderosa",
  translation: "Umysł jest potężny",
  words: [
    { es: "La", pl: "the" },
    { es: "mente", pl: "umysł" },
    { es: "es", pl: "jest" },
    { es: "poderosa", pl: "potężna" }
  ]
},
{
  text: "El amor nunca muere",
  translation: "Miłość nigdy nie umiera",
  words: [
    { es: "El", pl: "the" },
    { es: "amor", pl: "miłość" },
    { es: "nunca", pl: "nigdy" },
    { es: "muere", pl: "umiera" }
  ]
},
{
  text: "Sigue tus sueños",
  translation: "Podążaj za swoimi marzeniami",
  words: [
    { es: "Sigue", pl: "podążaj" },
    { es: "tus", pl: "twoje" },
    { es: "sueños", pl: "marzenia" }
  ]
},
{
  text: "La vida es corta",
  translation: "Życie jest krótkie",
  words: [
    { es: "La", pl: "the" },
    { es: "vida", pl: "życie" },
    { es: "es", pl: "jest" },
    { es: "corta", pl: "krótkie" }
  ]
},
{
  text: "Todo es aprendizaje",
  translation: "Wszystko jest nauką",
  words: [
    { es: "Todo", pl: "wszystko" },
    { es: "es", pl: "jest" },
    { es: "aprendizaje", pl: "nauka" }
  ]
},
{
  text: "El esfuerzo construye éxito",
  translation: "Wysiłek buduje sukces",
  words: [
    { es: "El", pl: "the" },
    { es: "esfuerzo", pl: "wysiłek" },
    { es: "construye", pl: "buduje" },
    { es: "éxito", pl: "sukces" }
  ]
},
{
  text: "La vida es ahora",
  translation: "Życie jest teraz",
  words: [
    { es: "La", pl: "the" },
    { es: "vida", pl: "życie" },
    { es: "es", pl: "jest" },
    { es: "ahora", pl: "teraz" }
  ]
},
{
  text: "El silencio habla",
  translation: "Cisza mówi",
  words: [
    { es: "El", pl: "the" },
    { es: "silencio", pl: "cisza" },
    { es: "habla", pl: "mówi" }
  ]
},
{
  text: "La verdad libera",
  translation: "Prawda wyzwala",
  words: [
    { es: "La", pl: "the" },
    { es: "verdad", pl: "prawda" },
    { es: "libera", pl: "wyzwala" }
  ]
},
{
  text: "Todo es energía",
  translation: "Wszystko jest energią",
  words: [
    { es: "Todo", pl: "wszystko" },
    { es: "es", pl: "jest" },
    { es: "energía", pl: "energia" }
  ]
},
{
  text: "El tiempo enseña",
  translation: "Czas uczy",
  words: [
    { es: "El", pl: "the" },
    { es: "tiempo", pl: "czas" },
    { es: "enseña", pl: "uczy" }
  ]
},
{
  text: "La vida fluye",
  translation: "Życie płynie",
  words: [
    { es: "La", pl: "the" },
    { es: "vida", pl: "życie" },
    { es: "fluye", pl: "płynie" }
  ]
},
{
  text: "El amor cura todo",
  translation: "Miłość leczy wszystko",
  words: [
    { es: "El", pl: "the" },
    { es: "amor", pl: "miłość" },
    { es: "cura", pl: "leczy" },
    { es: "todo", pl: "wszystko" }
  ]
},
{
  text: "La mente decide",
  translation: "Umysł decyduje",
  words: [
    { es: "La", pl: "the" },
    { es: "mente", pl: "umysł" },
    { es: "decide", pl: "decyduje" }
  ]
},
{
  text: "El destino cambia",
  translation: "Przeznaczenie się zmienia",
  words: [
    { es: "El", pl: "the" },
    { es: "destino", pl: "przeznaczenie" },
    { es: "cambia", pl: "zmienia się" }
  ]
},
{
  text: "La fuerza te guía",
  translation: "Siła cię prowadzi",
  words: [
    { es: "La", pl: "the" },
    { es: "fuerza", pl: "siła" },
    { es: "te", pl: "cię" },
    { es: "guía", pl: "prowadzi" }
  ]
},
{
  text: "El camino enseña",
  translation: "Droga uczy",
  words: [
    { es: "El", pl: "the" },
    { es: "camino", pl: "droga" },
    { es: "enseña", pl: "uczy" }
  ]
},
{
  text: "La vida es un viaje hermoso",
  translation: "Życie jest piękną podróżą",
  words: [
    { es: "La", pl: "the" },
    { es: "vida", pl: "życie" },
    { es: "es", pl: "jest" },
    { es: "un", pl: "a" },
    { es: "viaje", pl: "podróż" },
    { es: "hermoso", pl: "piękna" }
  ]
},
{
  text: "Cada día es una nueva oportunidad",
  translation: "Każdy dzień jest nową szansą",
  words: [
    { es: "Cada", pl: "każdy" },
    { es: "día", pl: "dzień" },
    { es: "es", pl: "jest" },
    { es: "una", pl: "jedna" },
    { es: "nueva", pl: "nowa" },
    { es: "oportunidad", pl: "szansa" }
  ]
},
{
  text: "La felicidad está en las pequeñas cosas",
  translation: "Szczęście jest w małych rzeczach",
  words: [
    { es: "La", pl: "the" },
    { es: "felicidad", pl: "szczęście" },
    { es: "está", pl: "jest" },
    { es: "en", pl: "w" },
    { es: "las", pl: "the" },
    { es: "pequeñas", pl: "małe" },
    { es: "cosas", pl: "rzeczy" }
  ]
},
{
  text: "El conocimiento abre muchas puertas",
  translation: "Wiedza otwiera wiele drzwi",
  words: [
    { es: "El", pl: "the" },
    { es: "conocimiento", pl: "wiedza" },
    { es: "abre", pl: "otwiera" },
    { es: "muchas", pl: "wiele" },
    { es: "puertas", pl: "drzwi" }
  ]
},
{
  text: "La disciplina crea grandes resultados",
  translation: "Dyscyplina tworzy wielkie rezultaty",
  words: [
    { es: "La", pl: "the" },
    { es: "disciplina", pl: "dyscyplina" },
    { es: "crea", pl: "tworzy" },
    { es: "grandes", pl: "wielkie" },
    { es: "resultados", pl: "rezultaty" }
  ]
},
{
  text: "El éxito viene con el tiempo",
  translation: "Sukces przychodzi z czasem",
  words: [
    { es: "El", pl: "the" },
    { es: "éxito", pl: "sukces" },
    { es: "viene", pl: "przychodzi" },
    { es: "con", pl: "z" },
    { es: "el", pl: "the" },
    { es: "tiempo", pl: "czas" }
  ]
},
{
  text: "La paciencia es una gran virtud",
  translation: "Cierpliwość jest wielką cnotą",
  words: [
    { es: "La", pl: "the" },
    { es: "paciencia", pl: "cierpliwość" },
    { es: "es", pl: "jest" },
    { es: "una", pl: "jedną" },
    { es: "gran", pl: "wielką" },
    { es: "virtud", pl: "cnota" }
  ]
},
{
  text: "El esfuerzo diario trae resultados",
  translation: "Codzienny wysiłek przynosi rezultaty",
  words: [
    { es: "El", pl: "the" },
    { es: "esfuerzo", pl: "wysiłek" },
    { es: "diario", pl: "codzienny" },
    { es: "trae", pl: "przynosi" },
    { es: "resultados", pl: "rezultaty" }
  ]
},
{
  text: "La mente positiva cambia todo",
  translation: "Pozytywny umysł zmienia wszystko",
  words: [
    { es: "La", pl: "the" },
    { es: "mente", pl: "umysł" },
    { es: "positiva", pl: "pozytywny" },
    { es: "cambia", pl: "zmienia" },
    { es: "todo", pl: "wszystko" }
  ]
},
{
  text: "El amor verdadero nunca se olvida",
  translation: "Prawdziwej miłości się nigdy nie zapomina",
  words: [
    { es: "El", pl: "the" },
    { es: "amor", pl: "miłość" },
    { es: "verdadero", pl: "prawdziwy" },
    { es: "nunca", pl: "nigdy" },
    { es: "se", pl: "się" },
    { es: "olvida", pl: "zapomina" }
  ]
},
{
  text: "Cada paso te acerca a tu meta",
  translation: "Każdy krok zbliża cię do celu",
  words: [
    { es: "Cada", pl: "każdy" },
    { es: "paso", pl: "krok" },
    { es: "te", pl: "cię" },
    { es: "acerca", pl: "zbliża" },
    { es: "a", pl: "do" },
    { es: "tu", pl: "twój" },
    { es: "meta", pl: "cel" }
  ]
},
{
  text: "La vida siempre encuentra un camino",
  translation: "Życie zawsze znajduje drogę",
  words: [
    { es: "La", pl: "the" },
    { es: "vida", pl: "życie" },
    { es: "siempre", pl: "zawsze" },
    { es: "encuentra", pl: "znajduje" },
    { es: "un", pl: "a" },
    { es: "camino", pl: "droga" }
  ]
},
{
  text: "El cambio comienza dentro de ti",
  translation: "Zmiana zaczyna się w tobie",
  words: [
    { es: "El", pl: "the" },
    { es: "cambio", pl: "zmiana" },
    { es: "comienza", pl: "zaczyna się" },
    { es: "dentro", pl: "wewnątrz" },
    { es: "de", pl: "z" },
    { es: "ti", pl: "tobie" }
  ]
},
{
  text: "La confianza en ti mismo es clave",
  translation: "Wiara w siebie jest kluczem",
  words: [
    { es: "La", pl: "the" },
    { es: "confianza", pl: "zaufanie" },
    { es: "en", pl: "w" },
    { es: "ti", pl: "tobie" },
    { es: "mismo", pl: "sam" },
    { es: "es", pl: "jest" },
    { es: "clave", pl: "klucz" }
  ]
},
{
  text: "El tiempo revela la verdad",
  translation: "Czas ujawnia prawdę",
  words: [
    { es: "El", pl: "the" },
    { es: "tiempo", pl: "czas" },
    { es: "revela", pl: "ujawnia" },
    { es: "la", pl: "the" },
    { es: "verdad", pl: "prawda" }
  ]
},
{
  text: "La vida es más bonita con amor",
  translation: "Życie jest piękniejsze z miłością",
  words: [
    { es: "La", pl: "the" },
    { es: "vida", pl: "życie" },
    { es: "es", pl: "jest" },
    { es: "más", pl: "bardziej" },
    { es: "bonita", pl: "piękna" },
    { es: "con", pl: "z" },
    { es: "amor", pl: "miłość" }
  ]
},
{
  text: "El aprendizaje nunca termina",
  translation: "Nauka nigdy się nie kończy",
  words: [
    { es: "El", pl: "the" },
    { es: "aprendizaje", pl: "nauka" },
    { es: "nunca", pl: "nigdy" },
    { es: "termina", pl: "kończy się" }
  ]
},
{
  text: "La motivación te lleva lejos",
  translation: "Motywacja zabiera cię daleko",
  words: [
    { es: "La", pl: "the" },
    { es: "motivación", pl: "motywacja" },
    { es: "te", pl: "cię" },
    { es: "lleva", pl: "zabiera" },
    { es: "lejos", pl: "daleko" }
  ]
},
{
  text: "El esfuerzo hace la diferencia",
  translation: "Wysiłek robi różnicę",
  words: [
    { es: "El", pl: "the" },
    { es: "esfuerzo", pl: "wysiłek" },
    { es: "hace", pl: "robi" },
    { es: "la", pl: "the" },
    { es: "diferencia", pl: "różnica" }
  ]
}


];