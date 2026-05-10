const screens = {
  "scenario-intro-smishing": {
    typeLabel: "INFO",
    title: "Smishing-udfordringen",
    bodyText: "Du skal nu prøve et kort interaktivt scenarie. Læs situationen, vælg en handling, og se hvordan forløbet udvikler sig.",
    image: "imgs/sms-flow1-valg.png",
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
    image: "imgs/sms-flow1-valg.png",
    imageAlt: "Illustration af SMS-besked",
    choices: [
      {
        text: "Jeg klikker på linket i SMS'en",
        next: "consequence-click",
      },
      {
        text: "Jeg undersøger SMS'en",
        next: "consequence-check",
      },
      {
        text: "Jeg ignorerer SMS'en",
        next: "consequence-ignore",
      },
    ],
  },

  "consequence-click": {
    typeLabel: "Klikker på linket",
    feedbackTone: "warning",
    feedback: [
      "Links i beskeder kan være en sikkerhedsrisiko, især når beskeden skaber tidspres.",
      "Smishing-beskeder forsøger ofte at få modtageren til at reagere hurtigt.",
      "En god huskeregel er: Stop, tænk, tjek.",
    ],
    title: "Siden åbnes",
    bodyText:
      "Linket fører dig ind på en side med et bookingsystem. Her bliver du bedt om at logge ind med skolemail for at få en ny eksamensdato.",
    image: "imgs/fake-calendar02.png",
    imageAlt: "Fiktiv side med login og eksamensbooking",
    choices: [
      {
        text: "Jeg lukker siden og ignorerer beskeden",
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
    typeLabel: "Undersøger SMS'en først",
    title: "Er den ægte eller falsk?",
    bodyText: "Du har undersøgt SMS'en. Er den ægte eller falsk, det er kun dig der kan afgøre det lige nu" ,
      image: "",
    imageAlt: "Fiktiv side med login og eksamensbooking",
    feedbackTone: "good",
    feedback: [
      "Du valgte at undersøge SMS’en nærmere. Måske kender du allerede huskereglen: Stop, tænk, tjek.",
      "Ved at gøre det minimerer du risikoen for at udsætte dig for cyberkriminaslitet ",
      "Smishing-beskeder ligner nemlig ofte almindelige beskeder fra virksomheder eller institutioner og med AI er hackerne blevet endnu bedre til det.",
        ],
    choices: [
      {
        text: "Jeg er i tvivl og kontakter skolen officielt",
        next: "conclusion-contact-it",
      },
      {
        text: "Jeg synes SMSen virker ægte, jeg klikker på linket",
        next: "conclusion-book",
      },
      {
        text: "Jeg ignorerer beskeden, det er smishing",
        next: "conclusion-ignore-book",
      },
    ],
  },

  "consequence-ignore": {
    typeLabel: "Konsekvens",
    title: "Beskeden ignoreres",
    bodyText:
      "Du valgte at ignorere beskeden. Senere sanmme dag fortæller en studiekammerat, at han fik samme SMS og at han allerede har booket en ny eksamensdato. Han fortalte også at der kun er 2 eksamens-tider tilbage",
    feedbackTone: "warning",
    feedback: [
      "Du klikkede ikke på linket, og det reducerer risikoen for Smishing.",
      "Desværre øger det risikoen for at du overser vigtige beskeder.",
      "At din ven har fået samme SMS, kan være et trick.",
      "Hvis du er i tvivl så kontakt altid afsenderen via officielle kanaler i stedet for linket.",
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
      "Du kan opleve at andre får samme besked, men det gør ikke SMS'en mere ægte.", 
      "Faktisk er det en kendt taktik hackerne bruger, som hedder social engeneering, hvor de bruger FOMO/frygten for at gå glip til at få modtageren til at klikke",
      "Tidspres og kunstig knaphed er også kendte metoder.",
      "Adgangskoder bør ændres hurtigst muligt ved mistanke.",
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
      "Beskeden verificeres via officielle kanaler i stedet for linket i SMS'en. Det reducerer risikoen for at dele oplysninger med falske sider.Samtidig hjælper du med at minimere trusle ved at rapportere den",
    feedbackTone: "success",
    feedback: [
      "Officielle hjemmesider og systemer er sikrest.",
      "Mistænkelige beskeder bør altid rapporteres.",
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
      "Du undgik linket, men du fik ikke verificeret beskeden. Når du ikke tjekker den, kan du både gå glip af vigtig information eller misse muligheden for at hjælpe andre ved at rapportere en potentiel trussel til IT. Den sikreste løsning er at kontakte skolen via deres officielle kanaler.",
    feedbackTone: "warning",
    feedback: [
      "At undgå linket reducerer risikoen — du deler ikke oplysninger med en ukendt side.",
      "Men vigtige beskeder bør verificeres — ellers kan du overse noget vigtigt, som fx en eksamen.",
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
