const screens = {

/*------------- INTRO------------- */

    "scenario-intro-smishing": {
        type: "intro",
        title: "Smishing Alert!",
        bodyText: "Du modtager en SMS fra et ukendt nummer.",

        choices: [
            {
            text: "Start udfordringen",
            next: "scenario-01",
            },
        ],
    },

/*------------- RUNDE 1------------- */    

    "scenario-01": {
        type: "question",
        title: "Eksamen aflyst",
        bodyText: "Du modtager en SMS med besked om at ændre din eksamensdato da din eksamen er blevet aflyst.", 
                
        choices: [
            {
                text: "Jeg klikker på linket",
                next: "consequence-click",
            },
            {
                text: "Jeg undersøger SMSen",
                next: "consequence-check",
            },
            {
                text: "Jeg Ignorer SMSen",
                next: "consequence-ignore",
            },
        ],
    },

/*------------- RUNDE 2 - click------------- */

    "consequence-click": {
        type: "consequence",
        title: "Book en ny eksamensdato",
        bodyText: "Du kommer ind på siden nedenunder, som viser en kalender, hvor du kan booke en ny eksamens dato.",
    
        choices: [
            {
                text: "Jeg lukker ned og booker ikke en ny dato",
                next: "conclusion-ignore-book",
            },
            {
                text: "Jeg booker en ny eksamensdato",
                next: "conclusion-book",
            },
            {   text: "Jeg kontakter mit uddannelsessted via de officielle kanaler, for at få SMSen og bookingkalenderen bekræftet. ",
                next: "conclusion-contact-it",
            },
        ],
    },

/*------------- RUNDE 2 - check------------- */
        "consequence-check": {
        type: "consequence",
        title: "Hvad kan man undersøge?",
        bodyText: "Du kommer ind på siden nedenunder, som viser en kalender, hvor du kan booke en ny eksamens dato. Du undersøger den nærmere.",
    
        choices: [
        {       text: "Jeg kontakter mit uddannelsessted via de officielle kanaler, for at få SMSen og bookingkalenderen bekræftet.",
                next: "conclusion-contact-it",
            },
            {
                text: "Jeg booker en ny eksamensdato",
                next: "conclusion-book",
            },
            {
                text: "Jeg lukker ned og booker ikke en ny dato",
                next: "conclusion-ignore-book",
            },
        ],
    },

/*------------- RUNDE 2 - check------------- */

        "consequence-ignore": {
        type: "consequence",
        title: "Var det en god ide at ignorere?",
        bodyText: "Du valgte at ignorere SMSen. Nu møder du en kammerat fra din uddannelse, som har fået samme SMS og som har booket en ny tid. Han siger der ikke er mange datoer tilbage at vælge i mellem.",
    
            choices: [
            
                {
                    text: "Jeg booker en ny eksamensdato",
                    next: "conclusion-book",
                },
                {   text: "Jeg kontakter mit uddannelsessted via de officielle kanaler, for at få SMSen og bookingkalenderen bekræftet.",
                    next: "conclusion-contact-it",
                },
                {
                    text: "Jeg lukker ned og booker ikke en ny dato",
                    next: "conclusion-ignore-book",
                },
            ],
        },

/*------------------ RUNDE 3 conclusion-book ------------- */

        "conclusion-book": {
            type: "conclusion",
            title: "Dare-devil",
            bodyText: "Du har valgt at kontakte booke en ny til i kalenderen. Måske er det smishing og du kan nu have udsat dig selv og andre.... find på" ,
    
            choices: [
            
                {
                    text: "Prøve Smishing-udfordringen igen",
                    next: "scenario-intro-smishing",
                },
                {   text: "Se alle udfordringer",
                    next: "introMain",
                },
                {
                    text: "Læs mere om cyber-Sikkerhed",
                    next: "learnMore",
                },
            ],
        },




/*------------- RUNDE 3 - consequence-contact-it------------- */
        "conclusion-contact-it": {
            type: "conclusion",
            title: "Better safe than....",
            bodyText: "Du har valgt at kontakte IT på dit uddannelses sted. Det er en god beslutn ing fordi.... find på...",
    
            choices: [
                {
                    text: "Prøve Smishing-udfordringen igen",
                    next: "scenario-intro-smishing",
                },
                {   text: "Se alle udfordringer",
                    next: "introMain",
                },
                {
                    text: "Læs mere om cyber-Sikkerhed",
                    next: "learnMore",
                },
            ],
        },  

            
/*------------- RUNDE 3 - consequence-ignore-book------------- */
            "conclusion-ignore-book": { 
                type: "conclusion",
                title: "FOMO",
                bodyText: "Du har valgt at ignorere kalender-bookingen. Det kan føles som det rigtige valg, men SMSen var faktisk rigtig.",
        
                choices: [
                    {
                        text: "Prøve Smishing-udfordringen igen",
                        next: "scenario-intro-smishing",
                    },
                    {   text: "Se alle udfordringer",
                        next: "introMain",
                    },
                    {
                        text: "Læs mere om cyber-Sikkerhed",
                        next: "learnMore",
                    },
                ],
            },

        
        },          

