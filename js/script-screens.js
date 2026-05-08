const screens = {
  "scenario-intro-phishing": {
    typeLabel: "E-mail",
    title: "Phishing",
    bodyText:
      "Du modtager en mail, der virker officiel og beder dig handle hurtigt. Scenariet er endnu ikke færdigudviklet.",
    image: "imgs/smishing.png",
    imageAlt: "Phishing illustration",
    choices: [
      {
        text: "Tilbage til forsiden",
        next: "hero",
      },
    ],
  },

  "scenario-intro-cloud": {
    typeLabel: "Cloud",
    title: "Cloud-filer",
    bodyText:
      "Du skal vurdere, hvordan filer kan deles sikkert i skyen. Scenariet er endnu ikke færdigudviklet.",
    choices: [
      {
        text: "Tilbage til forsiden",
        next: "hero",
      },
    ],
  },

  "scenario-intro-router": {
    typeLabel: "Netværk",
    title: "Usikkert netværk",
    bodyText:
      "Du opdager tegn på et usikkert netværk og skal vurdere risikoen. Scenariet er endnu ikke færdigudviklet.",
    choices: [
      {
        text: "Tilbage til forsiden",
        next: "hero",
      },
    ],
  },

  "scenario-intro-smishing": {
    typeLabel: "INFO",
    title: "Hvad er smishing?",
    bodyText:
      "Smishing er digital svindel via SMS. Beskederne kan ligne officielle beskeder fra fx en skole, bank, fragtfirma eller myndighed. Målet er ofte at få modtageren til at handle hurtigt, klikke på et link eller dele oplysninger. I denne udfordring har du mulighed for at afprøve et scenarie, hvor du skal du vurdere hvad du selv ville gøre i en realistisk hverdagssituation. Det er eksamenstid, og hverdagen er præget af deadlines, afleveringer og beskeder fra forskellige digitale systemer. Midt i en travl dag modtager du en SMS om din eksamensbooking.",

    choices: [
      {
        text: "Start udfordringen",
        next: "scenario-01",
      },
    ],
  },

  "scenario-01": {
    typeLabel: "SMS",
    title: "En vigtig SMS",
    bodyText:
      "Det er eksamenstid, og hverdagen er præget af deadlines, afleveringer og beskeder fra forskellige digitale systemer. Midt i en travl dag modtager du en SMS om din eksamensbooking.",
    image: "imgs/sms.png",
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
    title: "Siden åbnes",
    bodyText:
      "Siden ligner skolens bookingsystem og beder dig logge ind med skolemail for at gemme den nye eksamensdato.",
    image: "imgs/fake-calendar.png",
    imageAlt: "Fiktiv side med login og eksamensbooking",
    feedbackTone: "warning",
    feedback: [
      "Ukendte links kan føre til falske login-sider",
      "Loginoplysninger kan blive stjålet",
      "Tidspres øger risikoen for fejlvurderinger",
    ],
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
      "Du tjekker afsender, link og sprog. Flere detaljer virker mistænkelige og matcher ikke skolens normale kommunikation.",
    feedbackTone: "good",
    feedback: [
      "Beskeden undersøges før handling",
      "Afsender og domæne bør altid tjekkes",
      "Officielle kanaler er vigtigst ved tvivl",
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
    feedbackTone: "neutral",
    feedback: [
      "Socialt pres kan påvirke beslutninger",
      "Information bør verificeres via officielle kilder",
      "At ignorere beskeden løser ikke nødvendigvis problemet",
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
    typeLabel: "Resultat",
    title: "Risiko for falsk side",
    bodyText:
      "Ved at bruge linket kan loginoplysninger være blevet delt med en falsk side. Det sikreste næste skridt er at ændre adgangskode og kontakte skolens IT-support.",
    feedbackTone: "danger",
    feedback: [
      "Personlige beskeder virker ofte mere troværdige",
      "Tidspres bruges ofte i digital svindel",
      "Adgangskoder bør ændres ved mistanke",
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
    title: "God beslutning",
    bodyText:
      "Beskeden verificeres via officielle kanaler i stedet for linket i SMS'en. Det reducerer risikoen for at dele oplysninger med falske sider.",
    feedbackTone: "success",
    feedback: [
      "Officielle hjemmesider og systemer er sikrest",
      "Mistænkelige beskeder bør rapporteres",
      "Kilden bag beskeden bør altid vurderes",
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
      "Linket blev undgået, men beskeden blev ikke verificeret. Den sikreste løsning er at kontakte skolen direkte via officielle kanaler.",
    feedbackTone: "warning",
    feedback: [
      "At undgå linket reducerer risikoen",
      "Vigtige beskeder bør verificeres",
      "Troværdige kilder bør bruges til kontrol",
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