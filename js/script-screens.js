const screens = {
  "scenario-intro-phishing": {
    typeLabel: "E-mail",
    title: "Phishing",
    bodyText:
      "Du modtager en mail, der ligner den kommer fra en kendt tjeneste. Scenariet er ikke bygget færdigt endnu.",
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
      "Du skal vurdere, hvordan filer deles sikkert i skyen. Scenariet er ikke bygget færdigt endnu.",
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
      "Du skal tage stilling til et netværk, der virker usikkert. Scenariet er ikke bygget færdigt endnu.",
    choices: [
      {
        text: "Tilbage til forsiden",
        next: "hero",
      },
    ],
  },

  "scenario-intro-smishing": {
    typeLabel: "SMS",
    title: "Ny eksamensdato",
    bodyText:
      "Du modtager en SMS fra et ukendt nummer. Beskeden siger, at din eksamensdato er ændret, og at du skal bekræfte en ny tid inden 24 timer.",

    choices: [
      {
        text: "Start udfordringen",
        next: "scenario-01",
      },    
    ],
  },

  "scenario-01": {
    typeLabel: "Hvad gør du?",
    title: "Hvordan reagerer du?",
    bodyText:
      "SMS'en indeholder linket eksamens-kalender.info og beder dig bekræfte din deltagelse hurtigt, ellers mister du din plads.",
    feedbackTone: "neutral",
    feedback: [
      "Afsenderen er ikke gemt som skolens officielle nummer",
      "Beskeden presser dig til hurtig handling",
      "Linket bruger ikke skolens normale domæne",
    ],
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
    title: "Du lander på en bookingkalender",
    bodyText:
      "Siden ligner skolens login- og bookingsystem. Den beder dig vælge ny eksamensdato og logge ind med skolemail for at gemme ændringen.",
    feedbackTone: "warning",
    feedback: [
      "Risiko: falsk side eller malware",
      "Du bliver bedt om login på en ukendt side",
      "Handling under tidspres øger fejlrisikoen",
    ],
    choices: [
      {
        text: "Jeg lukker siden uden at booke",
        next: "conclusion-ignore-book",
      },
      {
        text: "Jeg booker en ny eksamensdato",
        next: "conclusion-book",
      },
      {
        text: "Jeg kontakter skolen via officielle kanaler",
        next: "conclusion-contact-it",
      },
    ],
  },

  "consequence-check": {
    typeLabel: "Undersøgelse",
    title: "Du stopper og tjekker tegnene",
    bodyText:
      "Du kigger nærmere på afsender, link, sprog og tidspres. Beskeden ligner noget vigtigt, men flere detaljer passer ikke helt med skolens normale kommunikation.",
    feedbackTone: "good",
    feedback: [
      "Godt: du handler ikke automatisk",
      "Tjek afsender og domæne før klik",
      "Brug skolens officielle kanaler ved tvivl",
    ],
    choices: [
      {
        text: "Jeg kontakter skolen via officielle kanaler",
        next: "conclusion-contact-it",
      },
      {
        text: "Jeg booker alligevel en ny dato",
        next: "conclusion-book",
      },
      {
        text: "Jeg ignorerer både SMS og kalender",
        next: "conclusion-ignore-book",
      },
    ],
  },

  "consequence-ignore": {
    typeLabel: "Konsekvens",
    title: "Du ignorerer beskeden",
    bodyText:
      "Senere møder du en studiekammerat, som også har fået SMS'en. Han har allerede booket en ny tid og siger, at der kun er få tider tilbage.",
    feedbackTone: "neutral",
    feedback: [
      "Socialt pres kan få beskeden til at virke mere troværdig",
      "Det er stadig vigtigt at tjekke officielle kilder",
      "Ignorering alene giver ikke sikker viden",
    ],
    choices: [
      {
        text: "Jeg booker en ny eksamensdato",
        next: "conclusion-book",
      },
      {
        text: "Jeg kontakter skolen via officielle kanaler",
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
    title: "Risiko: du gav siden tillid for hurtigt",
    bodyText:
      "Ved at booke eller logge ind via linket kan du have delt oplysninger med en falsk side. Det sikreste næste skridt er at ændre adgangskode og kontakte skolens IT eller administration.",
    feedbackTone: "danger",
    feedback: [
      "Klik ikke videre på mistænkelige links",
      "Skift adgangskode, hvis du har logget ind",
      "Fortæl IT, hvad der er sket, så andre kan advares",
    ],
    choices: [
      {
        text: "Prøv smishing-udfordringen igen",
        next: "scenario-intro-smishing",
      },
      {
        text: "Gå tilbage til forsiden",
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
    title: "Godt valg: du verificerede beskeden",
    bodyText:
      "Du brugte skolens officielle kanal i stedet for linket i SMS'en. Det beskytter både dine loginoplysninger og hjælper skolen med at advare andre studerende.",
    feedbackTone: "success",
    feedback: [
      "Brug officielle hjemmesider, numre eller systemer",
      "Rapporter mistænkelige beskeder",
      "Tjek kilde, ikke kun indhold",
    ],
    choices: [
      {
        text: "Prøv smishing-udfordringen igen",
        next: "scenario-intro-smishing",
      },
      {
        text: "Gå tilbage til forsiden",
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
    title: "Næsten godt: du klikkede ikke",
    bodyText:
      "Du undgik linket, men du fik ikke bekræftet, om beskeden var ægte. Den bedste reaktion er at undgå linket og selv kontakte skolen via en officiel kanal.",
    feedbackTone: "warning",
    feedback: [
      "At ignorere kan være bedre end at klikke",
      "Men vigtige beskeder bør verificeres",
      "Søg selv informationen fra en troværdig kilde",
    ],
    choices: [
      {
        text: "Prøv smishing-udfordringen igen",
        next: "scenario-intro-smishing",
      },
      {
        text: "Gå tilbage til forsiden",
        next: "hero",
      },
      {
        text: "Læs mere om cybersikkerhed",
        next: "learnMore",
      },
    ],
  },
};
