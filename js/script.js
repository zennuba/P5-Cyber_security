/*js/script-screens.js = data - tekst, valg og næste skærm. 
js/script.js = logik - styrer klik, skærmskift og hvad der vises.

VIGTIG: rigtig rækkefølge i HTML:
<script src="js/script-screens.js" defer></script>
<script src="js/script.js" defer></script>*/

const allScreens = document.querySelectorAll(".screen");

function showScreen(screenName) {
  allScreens.forEach((screen) => {
    const isCurrentScreen = screen.dataset.screen === screenName;

    screen.classList.toggle("is-hidden", !isCurrentScreen);
  });
}

const goToButtons = document.querySelectorAll("[data-go-to]");

goToButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.goTo);
  });
});

const answerButtons = document.querySelectorAll(".q-card__btn--choice");
answerButtons.forEach((button, index) => {
  console.log("knap får event", button);

  const choice = screens["case-smishing"].choices[index];

  button.textContent = choice.text;

  button.addEventListener("click", () => {
    document.querySelector(".consequence-card__title").textContent =
      choice.feedbackTitle;
    showScreen(choice.next);
  });
});
