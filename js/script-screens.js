const screens = {
  "scenario-intro-smishing": {
    typeLabel: "INFO",
    title: "Hvad er smishing?",
    bodyText:
      "Smishing er digital svindel via SMS. Beskederne kan ligne officielle beskeder fra fx banken, et fragtfirma eller myndighederne.\n\nI denne udfordring afprøver du et scenarie om smishing uden risiko. Du skal vurdere, hvad du selv ville gøre i en realistisk hverdagssituation.",
    image: "img/smishing_hook.png",
    imageAlt: "Illustration af SMS-besked",
    isBriefing: true,
    hideQuestion: true,
    choices: [
      {
        text: "Start smishing-udfordringen",
        next: "scenario-01",
      },
    ],
  },

  "scenario-01": {
    typeLabel: "SMS",
    title: "En vigtig SMS",
    bodyText:
      "Det er eksamenstid, og hverdagen er præget af deadlines, afleveringer og beskeder fra forskellige digitale systemer.\n\nMidt i en travl hverdag modtager du en SMS om din eksamen.",
    image: "img/sms-message.png",
    imageAlt: "Illustration af SMS-besked",
    choices: [
      {
        text: "Jeg klikker på linket",
        next: "consequence-click",
      },
      {
        text: "Jeg undersøger SMS'en først",
        next: "consequence-check",
      },
      {
        text: "Jeg ignorerer SMS'en",
        next: "consequence-ignore",
      },
    ],
  },

  "consequence-click": {
    typeLabel: "Konsekvens",
    feedbackTone: "warning",
    feedback: [
      "Du valgte at trykke på linket i SMS’en. Links i beskeder kan være en sikkerhedsrisiko, især når beskeden skaber tidspres. En god huskeregel er: Stop, tænk, tjek."],
    title: "Siden åbnes",
    bodyText:
      "Linket fører dig ind på en side med et bookingsystem. Her bliver du bedt om at logge ind med skolemail eller CPR-nummer for at få en ny eksamensdato.",
    image: "img/fake-calendar02.png",
    imageAlt: "Fiktiv side med login og eksamensbooking",
    choices: [
      {
        text: "Jeg lukker siden",
        next: "conclusion-ignore-book",
      },
      {
        text: "Jeg booker en ny eksamensdato",
        next: "conclusion-book",
      },
      {
        text: "Jeg kontakter skolen officielt",
        next: "conclusion-contact-it",
      },
    ],
  },

  "consequence-check": {
    typeLabel: "Undersøgelse",
    title: "Beskeden undersøges",
    bodyText:
      "Du tjekker afsender, link og sprog. Flere detaljer virker usædvanlige og matcher ikke skolens normale kommunikation.",
    feedbackTone: "good",
    feedback: [
      "Beskeden undersøges før handling.",
      "Afsender og domæne bør altid tjekkes.",
      "Officielle kanaler er vigtigst ved tvivl.",
    ],
    choices: [
      {
        text: "Jeg kontakter skolen officielt",
        next: "conclusion-contact-it",
      },
      {
        text: "Jeg booker alligevel en ny dato",
        next: "conclusion-book",
      },
      {
        text: "Jeg ignorerer beskeden",
        next: "conclusion-ignore-book",
      },
    ],
  },

  "consequence-ignore": {
    typeLabel: "Konsekvens",
    title: "Beskeden ignoreres",
    bodyText:
      "Senere fortæller en studiekammerat, at den samme SMS også er blevet modtaget og allerede brugt til at booke en ny eksamensdato.",
    feedbackTone: "warning",
    feedback: [
      "Du klikkede ikke på linket, og det reducerer risikoen.",
      "Men vigtige beskeder bør stadig verificeres.",
      "Tjek altid via skolens officielle kanaler.",
    ],
    choices: [
      {
        text: "Jeg booker en ny eksamensdato",
        next: "conclusion-book",
      },
      {
        text: "Jeg kontakter skolen officielt",
        next: "conclusion-contact-it",
      },
      {
        text: "Jeg ignorerer stadig beskeden",
        next: "conclusion-ignore-book",
      },
    ],
  },

  "conclusion-book": {
    typeLabel: "Undgik risiko",
    title: "Risiko for falsk side",
    bodyText:
      "Ved at bruge linket kan loginoplysninger være blevet delt med en falsk side. Det sikreste næste skridt er at ændre adgangskode og kontakte skolens IT-support.",
    feedbackTone: "danger",
    feedback: [
      "Personlige beskeder virker ofte mere troværdige.",
      "Tidspres bruges ofte i digital svindel.",
      "Adgangskoder bør ændres ved mistanke.",
    ],
    choices: [
      {
        text: "Jeg prøver udfordringen igen",
        next: "scenario-intro-smishing",
      },
      {
        text: "Tilbage til forsiden",
        next: "hero",
      },
      {
        text: "Læs mere om cybersikkerhed",
        next: "learnMore",
      },
    ],
  },

  "conclusion-contact-it": {
    typeLabel: "Resultat",
    title: "Cyber Hero ",
    bodyText:
      "Beskeden verificeres via officielle kanaler i stedet for linket i SMS'en. Det reducerer risikoen for at dele oplysninger med falske sider.",
    feedbackTone: "success",
    feedback: [
      "Officielle hjemmesider og systemer er sikrest.",
      "Mistænkelige beskeder bør rapporteres.",
      "Kilden bag beskeden bør altid vurderes.",
    ],
    choices: [
      {
        text: "Jeg prøver udfordringen igen",
        next: "scenario-intro-smishing",
      },
      {
        text: "Tilbage til forsiden",
        next: "hero",
      },
      {
        text: "Læs mere om cybersikkerhed",
        next: "learnMore",
      },
    ],
  },

  "conclusion-ignore-book": {
    typeLabel: "Resultat",
    title: "Næsten sikkert",
    bodyText:
      "Du undgik linket, men du fik ikke verificeret beskeden. Når du ikke tjekker den, kan du både gå glip af vigtig information og misse muligheden for at hjælpe andre ved at rapportere beskeden til IT. Den sikreste løsning er at kontakte skolen via deres officielle kanaler.",
    feedbackTone: "warning",
    feedback: [
      "At undgå linket reducerer risikoen — du deler ikke oplysninger med en ukendt side.",
      "Vigtige beskeder bør verificeres — ellers kan du overse noget vigtigt.",
      "Troværdige kilder bør bruges til kontrol — det giver dig en sikker afklaring.",
    ],
    choices: [
      {
        text: "Jeg prøver udfordringen igen",
        next: "scenario-intro-smishing",
      },
      {
        text: "Tilbage til forsiden",
        next: "hero",
      },
      {
        text: "Læs mere om cybersikkerhed",
        next: "learnMore",
      },
    ],
  },
};
