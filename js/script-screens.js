const screens = {
  "case-smishing": {
    choices: [
      {
        id: "click",
        text: "Jeg cliker på linket",
        feedbackTitle: "Risiko",
        feedbackText:
          "feedback til click 1 - Du kommer ind på siden og ser en kalender med datoer.",
        next: "feedback-click",
      },
      {
        id: "check",
        text: "Jeg checker1",
        feedbackTitle: "safe",
        feedbackText: "feedback til jeg checker 1",
        next: "feedback-check",
      },
      {
        id: "ignore",
        text: "Jeg ignorerer1",
        feedbackTitle: "medium",
        feedbackText: "feedback til jeg ignorer1 ",
        next: "feedback-ignore",
      },
    ],
  },
};
